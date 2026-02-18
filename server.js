import express from "express";
import bikesRouter from "./src/routes/bikes/index.js";  // correct path

const app = express();
app.use(express.json());

// register API route
app.use("/api/bikes", bikesRouter);

app.listen(5000, () => console.log("Server running on port 5000"));
