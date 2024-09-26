// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

// middleware to parse json
app.use(express.json()); //  for parsing application/json, allows to accept JSON


app.get("/", (req, res) => {
    res.send("Server ready")
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server start at http://localhost:${PORT}`);
});