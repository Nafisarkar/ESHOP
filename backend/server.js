import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000


const __dirname = path.resolve();

app.use(express.json()); // to accept json data in the body of the request

app.use("/api/products",productRoutes)

app.get("/", (req, res) => {
  res.send("Server is running");
});


app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http://localhost:"+PORT);
});
