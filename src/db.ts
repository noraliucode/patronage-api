import { MongoClient, Db } from "mongodb";
require("dotenv").config();

let dbConnection: Db | undefined;
const uri = process.env.MONGODB_URI || "";

const connectToDb = async (): Promise<void> => {
  try {
    const client = await MongoClient.connect(uri);
    dbConnection = client.db();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getDb = (): Db | undefined => {
  return dbConnection;
};

export { connectToDb, getDb };
