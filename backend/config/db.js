import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ DATABASE CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("❌ FAILED TO CONNECT DATABASE:", error.message);
  }
};

export default connectMongoDB;
