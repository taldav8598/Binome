const express = require('express');
// const { bodyParser } = require('body-parser');

const {
    httpGetAllOrganisms,
} = require('./organims.controller');

const organismsRouter = express.Router();

// organismsRouter.use(bodyParser.json());

organismsRouter.get('/', httpGetAllOrganisms);

organismsRouter.post('/', (req, res) => {
    if (req.body.searchQuery === req.body.form.search && req.body.searchQuery !== "") {
        res.json('success');
    } else {
        res.status(404).json('Search query not found')
    }
})

module.exports = organismsRouter;