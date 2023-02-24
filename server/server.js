const http = require('http');

const { startMongoServer } = require('./services/mongo');

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

startMongoServer('fir');