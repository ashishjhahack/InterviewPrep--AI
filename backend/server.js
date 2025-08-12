import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import authRoutes from './routes/authRoute.js';
import sessionRouter from './routes/sessionRoute.js';
import questionRoutes from './routes/questionRoute.js';
import { generateConceptExplanations, generateInterviewQuestions } from './controllers/aiController.js';
import protectRoute from './middlewares/auth.js';

const app = express();
app.use(express.json());      // it parses incoming JSON requests

const PORT = process.env.PORT || 4000; // ✅ Define PORT early

connectDB(); // Connect to the database

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, 'uploads');

// Ensure the uploads directory exists so multer can save files.
if (!fs.existsSync(uploadsDir)) {
  console.log(`Creating a new "uploads" directory at: ${uploadsDir}`);
  fs.mkdirSync(uploadsDir, { recursive: true });
}


app.use(
  cors({
    origin: "*", // Allow all origins by default
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


//routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRouter);
app.use("/api/questions", questionRoutes);

app.post("/api/ai/generate-questions", protectRoute,generateInterviewQuestions);
app.post("/api/ai/generate-explanations", protectRoute,generateConceptExplanations);


//Serve uploads folder
app.use("/uploads", express.static(uploadsDir));

//Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, World!')
})