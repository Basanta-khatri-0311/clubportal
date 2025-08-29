import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";

dotenv.config();

const seedAdmin = async () => {
  await connectDB();

  const existing = await Admin.findOne({ username: "admin" });
  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("password123", 10);

  const admin = new Admin({
    username: "admin",
    password: hashedPassword
  });

  await admin.save();
  console.log("✅ Admin user created: admin / password123");
  process.exit();
};

seedAdmin();
