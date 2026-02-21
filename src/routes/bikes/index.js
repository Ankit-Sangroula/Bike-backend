import express from "express";
import Bike from "../../models/Bike.js";  // adjust path

const router = express.Router();

// GET all bikes
router.get("/", async (req, res) => {
  try {
    const bikes = await Bike.find();  // fetch all bikes from MongoDB
    res.json(bikes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;