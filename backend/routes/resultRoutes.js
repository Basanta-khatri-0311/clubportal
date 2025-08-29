import express from "express";
import Result from "../models/Result.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all results
router.get("/", async (req, res) => {
  try {
    const results = await Result.find().sort({ date: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single result by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ message: "Result not found" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE new result (admin only)
router.post("/", protect, async (req, res) => {
  try {
    const { title, date, mvp, details } = req.body;
    const newResult = new Result({ title, date, mvp, details });
    await newResult.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE result (admin only)
router.put("/:id", protect, async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ message: "Result not found" });

    Object.assign(result, req.body);
    await result.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE result (admin only)
router.delete("/:id", protect, async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ message: "Result not found" });

    await result.remove();
    res.json({ message: "Result deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
