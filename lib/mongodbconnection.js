import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

export let dbClient
export let cachedDb
export let clientPromise

// set the connection options
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

if (!cachedClient && !cachedDb && !clientPromise) {
    
    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts)
    let promise = client.connect()
    let db = client.db(MONGODB_DB)


    // set cache
    clientPromise = promise
    dbClient = client
    cachedDb = db
}