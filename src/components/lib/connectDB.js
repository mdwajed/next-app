// import mongoose from "mongoose";

import  Mongoose  from "mongoose";

export const connectDB = async () => {
  try {
    await Mongoose.connect(process.env.MONGO);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
    throw new Error(error);
  }
};
