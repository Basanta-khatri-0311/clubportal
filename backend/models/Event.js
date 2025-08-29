import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String },
  images: [String], // store URLs of images
}, { timestamps: true });

const Event = mongoose.model("Event", EventSchema);

export default Event;
