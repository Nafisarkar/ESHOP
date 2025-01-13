import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

app.use(cors({
  origin: "*", // Allow all origins; restrict this in production to your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

const __dirname = path.resolve();

// Middleware to parse JSON data
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Database connection
connectDB();

// Export the app for Vercel
export default app;
