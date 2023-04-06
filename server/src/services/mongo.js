const mongoose = require('mongoose');

require('dotenv').config();

const { main } =  require('./aggregation');
// const { loadOrganismsData } = require('../models/organisms.model');

const MONGO_URL = 'mongodb+srv://Binome:I3Uq9eedfeD7WOmr@binome.d2vovtm.mongodb.net/?retryWrites=true&w=majority';


mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.set('strictQuery', false);

mongoose.connection.on('error', (err) => {
    console.log(err);
})

async function startMongoServer(name) {
    await mongoose.connect(MONGO_URL)
    // await loadOrganismsData();
    return await main(name).catch(console.error());
}

module.exports = {
    startMongoServer
}