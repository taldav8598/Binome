const mongoose = require('mongoose');

require('dotenv').config();

const { main } =  require('./aggregation');
// const { loadOrganismsData } = require('../models/organisms.model');

const MONGO_URI = 'mongodb+srv://Binome:RHVu37qNLGGJic91@binome.d2vovtm.mongodb.net/';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.set('strictQuery', false);

mongoose.connection.on('error', (err) => {
    console.log(err);
})

async function startMongoServer(name) {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, });
    // await loadOrganismsData();

    const searchResults = await main(name).catch(console.error);
    
    return searchResults;
}

module.exports = {
    startMongoServer
}