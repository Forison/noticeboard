const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
require('dotenv').config();

async function main() {
    const uri = process.env.DB_URL;
    const client = new MongoClient(uri,{ useUnifiedTopology: true } );
    try {
        await client.connect();
        const db = client.db('blogproject');
        const colOne = db.collection('blog1');
        const createIndexResults = await client.db("blog1").collection("users").createIndex({ "email": 1 }, { unique: true });
        console.log(`Index successfully created: ${createIndexResults}`);
        console.log(db.collection('blog1').find())
        await listDatabases(client);

        // app.get('/', (req, res) => {
        //   db.collection('users').find().toArray()
        //     .then(results => {
        //       console.log(results)
        //     })
        //     .catch(error => console.error(error))
        // }).listen(process.env.PORT, ()=>{console.log('app running on port 3000')});

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);


