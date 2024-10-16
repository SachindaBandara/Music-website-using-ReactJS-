import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connection Successfully");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/musicWeb`);
};

export default connectDB;
