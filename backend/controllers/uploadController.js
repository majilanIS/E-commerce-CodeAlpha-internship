import express from "express";
import path from "path";
import fs from "fs";

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: 0, message: "No file uploaded" });
    }

    res.json({
      success: 1,
      image_url: `http://localhost:8888/images/${req.file.filename}`,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ success: 0, message: "Something went wrong!" });
  }
}

export default uploadImage;