import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  page: { type: String, enum: ["home", "about"], unique: true },
  content: { type: String, required: true }
});

const Content = mongoose.model("Content", ContentSchema);

export default Content;
