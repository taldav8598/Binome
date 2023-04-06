const express = require('express');

const {
    httpGetAllOrganisms,
    httpPostCommonName,
    httpGetQueryData
} = require('./organisms.controller');

const organismsRouter = express.Router();

// organismsRouter.get('/', httpGetAllOrganisms);

organismsRouter.get('/search', httpGetQueryData)

organismsRouter.post('/search', httpPostCommonName);

module.exports = organismsRouter;