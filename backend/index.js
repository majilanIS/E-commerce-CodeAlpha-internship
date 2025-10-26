import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { fileURLToPath } from "url";
import connectMongoDB from "./config/db.js";
import ProductRouter from "./routers/ProductRouter.js";

dotenv.config();

// __dirname setup for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// ✅ Custom CORS setup
const allowedOrigins = [
  "http://localhost:5174", // Admin frontend
  "http://localhost:5173", // User frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Serve static files (uploaded images)
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// ✅ Connect to MongoDB
connectMongoDB();

// ✅ Multer setup for image upload
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// ✅ Image upload endpoint
app.post("/api/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const imageUrl = `http://localhost:${port}/images/${req.file.filename}`;

  console.log(`✅ File uploaded: ${imageUrl}`);

  res.json({
    success: 1,
    imageUrl: imageUrl,
    filename: req.file.filename,
  });
});

// ✅ API Routes
app.use("/api", ProductRouter);

// ✅ Optional test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
