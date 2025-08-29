import express from "express";
import Content from "../models/Content.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all content
router.get("/", async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create content (temporary public, later admin-only)
router.post("/", protect, async (req, res) => {
  try {
    const { page, content } = req.body;
    const newContent = new Content({ page, content });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
