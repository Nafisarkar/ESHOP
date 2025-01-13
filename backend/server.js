import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// Load environment variables
dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middleware to parse JSON data
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Database connection
connectDB();

// Export the app for Vercel
export default app;
