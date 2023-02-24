const { getAllOrganisms } = require('../../models/organisms.model');

async function httpGetAllOrganisms(req, res) {
    return res.staus(200).json(await getAllOrganisms());
}

module.exports = {httpGetAllOrganisms};