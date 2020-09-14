const { MongoClient } = require('mongodb');
require('dotenv').config();

async function main() {
    const uri = process.env.DB_URL;
    const client = new MongoClient(uri,{ useUnifiedTopology: true } );
    try {
        await client.connect();
        await listDatabases(client);
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

