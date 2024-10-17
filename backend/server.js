import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectCloudinary from "./src/config/cloudinary.js";
import connectDB from "./src/config/mongodb.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// initializing routes
app.use("/api/song", songRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
