import express from "express";
import cors from "cors";
import bikesRouter from "./routes/bikes/index.js";
import { connectDB } from "./lib/db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/bikes", bikesRouter);

app.listen(5000, () => console.log("Server running on port 5000"));