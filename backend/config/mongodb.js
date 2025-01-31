import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // ESTABILISH CONNECTION
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected..");
  } catch (error) {
    console.log("Database Connection Faild: ", error.message);
  }
};

export default connectDB;
