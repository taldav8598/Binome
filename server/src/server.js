const http = require('http');

const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT;

const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

// @TODO - move start mongo server to API layer and invoke when search query is made
