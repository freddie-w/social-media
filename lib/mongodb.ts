import mongoose from "mongoose";

export const connectToDatabase = async () => {
  const connection = await mongoose
    .connect(process.env.MONGODB_URI!)
    .catch((err) => console.log(err));

  console.log("Mongoose Connection Established");

  return connection;
};
