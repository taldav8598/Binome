const { MongoClient } = require('mongodb');

require('dotenv').config();

async function main(name) {
    
    const uri = process.env.MONGO_URI;
    
    // Mongo client used to interact with the Binome database
    const client = new MongoClient(uri);    

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Call the searchOrganismName function (assuming it's defined elsewhere)
        const result = await searchOrganismName(client, name);

        // Handle the result of the search operation here
        return result;

    } catch (err) {
        console.error("Error:", err.message);

    } finally {
        // Ensures that the client is closed, even if an error occurs
        await client.close();
    }
}

/**
 * Search the database for the closest matching commonName or scientificName
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the Binome test.organism database
 * @param {String} commonName The common name or scientific name of the organism
 */

async function searchOrganismName(client, name) {
    // Defines a pipeline array that specifies the aggregation stages for the search
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

    // Creates an aggregation cursor by applying th aggregation pipline to the "organisms" in the "test" database
    const aggCursor = client.db("test").collection("organisms").aggregate(pipeline);
    
    //Initialises an array to store all results
    const allValues = [];
    
    // Iterates throught the documents in the aggregation cursor and extracts the "commonName" and the "scientificName" fields
    await aggCursor.forEach(organism => {
        allValues.push({
            commonName: organism.commonName,
            scientificName: organism.scientificName
        });
        // return `${organism.commonName}: ${organism.scientificName}`;
    });
    
    // console.log({ allValues });

    // Returns values that include the search results
    return allValues;
}

module.exports = { main };