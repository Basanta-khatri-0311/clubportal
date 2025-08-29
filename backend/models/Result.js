import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  title: { type: String, required: true },       // e.g., "Chess Tournament 2025"
  date: { type: Date, required: true },
  mvp: { type: String },                          // Most Valuable Player
  details: { type: String }                       // Additional info
}, { timestamps: true });

const Result = mongoose.model("Result", ResultSchema);

export default Result;
