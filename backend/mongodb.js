const {MongoClient} = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    if (!client.isConnected()) {
        await client.connect();
    }
    return client.db("joelson-bet");
}

module.exports = connectDB;