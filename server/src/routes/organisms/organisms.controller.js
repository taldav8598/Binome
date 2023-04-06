const { getAllOrganisms } = require('../../models/organisms.model');

const { startMongoServer } = require('../../services/mongo');

const fs = require('fs');

async function httpGetAllOrganisms(req, res) {
    return res.status(200).json(await getAllOrganisms());
}

async function httpGetQueryData(req, res) {
    

    fs.readFile('searchQuery.txt', 'utf-8', async (err, data) => {
        if (err) throw err;

        console.log('searchQuery.txt read', data);
        
        const results = await startMongoServer(data);

        return res.status(200).json(results);
    });
}

async function httpPostCommonName(req, res) {
    const name = req.body;

    const { commonName } = name;

    fs.writeFile('searchQuery.txt', commonName, (err) => {
        if(err) throw err;
        console.log(`File including ${commonName} created`);
    })

    if(!commonName) {
        return res.status(400).json({
            error: 'Missing required common name property'
        });
    }

    return res.status(201).json(commonName);
}

module.exports = { 
    httpGetAllOrganisms,
    httpPostCommonName,
    httpGetQueryData
};