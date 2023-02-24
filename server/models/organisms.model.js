const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const organisms = require('./organisms.mongo');

function isScientificName(organism) {
    return organism['scientific_name'] !== "" && organism['common_name'] !== "";
}

function loadOrganismsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'organism_names.csv'))
        .pipe(parse({
            comment: '#',
            columns: true
        }))
        .on('data', async (data) => {
            if(isScientificName(data)) {
                saveOrganisms(data);
            }
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', async () => {
            const countOrganismsFound = (await getAllOrganisms()).length;
            console.log(`${countOrganismsFound} organisms found!`);
            resolve();
        });
    })
}

async function getAllOrganisms() {
    return await organisms.find({}, {
        '_id': 0, '__v': 0,
    });
}

async function saveOrganisms(organism) {
    try {
        await organisms.updateOne({
            commonName: organism.common_name,
            scientificName: organism.scientific_name
        }, {
            commonName: organism.common_name,
            scientificName: organism.scientific_name
        }, {
            upsert: true
        });
    } catch(err) {
        console.error(`Could not save organism ${err}`);
    }
}

module.exports = {
    loadOrganismsData,
    getAllOrganisms
}