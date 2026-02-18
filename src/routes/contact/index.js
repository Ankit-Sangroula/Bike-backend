import express from "express";
import { requireValidation } from "../../middlewares/requireValidation.js";
import { contactSchema } from "./validation.js";

const router = express.Router();

// Contact form
router.post("/", requireValidation(contactSchema), async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact Message:", name, email, message);

  res.json({ message: "Message received" });
});

export default router;
