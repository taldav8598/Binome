const express = require('express');

const organismsRouter = require('./organisms/organisms.router');

const api = express.Router();

api.use('/organisms', organismsRouter);

module.exports = api;