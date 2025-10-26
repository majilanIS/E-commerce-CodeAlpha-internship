import express from "express";
import path from "path";
import cors from "cors";
import connectMongoDB from "./config/db.js";
import ProductRouter from "./routers/ProductRouter.js";
import multer from "multer";
import { fileURLToPath } from 'url'; 

// Get __filename and __dirname equivalent for use with path.join()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
const allowedOrigins = [
  'http://localhost:5174', // admin frontend
  'http://localhost:5173'  // user/frontend
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin like Postman
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


// ✅ FIX 1: Serve static files (uploaded images)
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// Connect to the MongoDB database
connectMongoDB()

const storage = multer.diskStorage({
  destination: "./upload/images", 
  filename: (req, file, cb) => { 
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage: storage });

// Create upload route
app.post('/api/upload', upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  const imageUrl = `http://localhost:8888/images/${req.file.filename}`;
  
  console.log(`✅ File uploaded: http://localhost:888/${req.file.filename}`);
  
  // Respond with the file's information and the correct public URL
  res.json({
    success: 1,
    imageUrl: imageUrl, 
    filename: req.file.filename
  });
});

app.use("/api", ProductRouter);


app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
