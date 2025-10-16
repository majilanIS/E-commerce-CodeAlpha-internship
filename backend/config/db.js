import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully Connected to the Database!");
  } catch (error) {
    console.error(" Database connection failed:", error.message);
  }
};

export default connectMongoDB;
