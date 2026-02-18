import express from "express";
import { Bike } from "./models.js";  // make sure Bike is exported properly
import { validateBike } from "./validation.js";  // make sure validateBike exists

const router = express.Router();

// GET all bikes
router.get("/", async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a bike
router.post("/", validateBike, async (req, res) => {
  try {
    const bike = await Bike.create(req.body);
    res.status(201).json(bike);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
