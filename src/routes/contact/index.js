import express from "express";
import Contact from "../../models/Contact.js";

const router = express.Router();

// Submit contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const contact = await Contact.create({ name, email, message });
  res.status(201).json(contact);
});

// Get all contacts (for admin)
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

export default router;