import mongoose from 'mongoose';

export const connectToDB = async () => {
  const mongodb_uri = process.env.MONGO_URI!;
  // console.log("db connection string: ", mongodb_uri)
  try {
    await mongoose.connect(mongodb_uri);
    console.log(`✅ Successfully connected to Database`);
  } catch (error) {
    console.log(`❌ could not connect to Database = `, error);
    process.exit(1);
  }
};
