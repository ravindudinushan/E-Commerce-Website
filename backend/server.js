import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary;

// Middleware
app.use(express.json());
app.use(cors());

//Api endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server is runing on PORT: " + port));
