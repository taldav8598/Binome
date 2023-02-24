const { MongoClient } = require('mongodb');

async function main(name) {
    // TODO - fill in uri with Binome info
    const uri = "mongodb+srv://Binome:I3Uq9eedfeD7WOmr@binome.d2vovtm.mongodb.net/?retryWrites=true&w=majority";

    // mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority

    // Mongo client used to interact with the Binome database
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        await searchOrganismName(client, name);

    } finally {
        await client.close();
    }
}

/**
 * Search the database for the closest matching commonName or scientificName
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the Binome test.organism database
 * @param {String} commonName The common name or scientific name of the organism
 */

async function searchOrganismName(client, name) {
    const pipeline = [
        {
            '$search': {
              'index': 'default',
              'text': {
                'query': name,
                'path': "commonName"
              }
            }
          }
    ];

    const aggCursor = client.db("test").collection("organisms").aggregate(pipeline);

    await aggCursor.forEach(organism => {
        console.log(`${organism.commonName}: ${organism.scientificName}`);
    });
}

module.exports = { main };