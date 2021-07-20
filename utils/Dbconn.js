import mongoose from "mongoose";
const connection = {};

const DB_URI = process.env.MONGO_URI;

const connectDb = async () => {
  if (connection.isConnected) {
    // use cached connection when available
    return;
  }
  try {
    const dbConnection = await mongoose.connect(DB_URI);
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    connection.isConnected = dbConnection.connections[0].readyState;
  } catch (err) {
    logger.error(`error connecting to db ${err.message || err}`);
  }
};

export default connectDb;
