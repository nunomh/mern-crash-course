// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';


dotenv.config();

const app = express();
const PORT = 5500;

// middleware to parse json
app.use(express.json()); //  for parsing application/json, allows to accept JSON


app.get("/", (req, res) => {
    res.send("Server ready")
});


app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in fetching products: ", error.message);
        res.status(500).json({ success: false, message: `Server error: ${error.message}` });
    }
});

app.post("/api/products", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product: ", error.message);
        res.status(500).json({ success: false, message: `Server error: ${error.message}` });
    }

});

app.delete("/api/products/:id", async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.error("Error in Delete product: ", error.message);
        res.status(404).json({ success: false, message: `Product not found: ${error.message}` });
    }
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server start at http://localhost:${PORT}`);
});