// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = 5500;

app.get("/", (req, res) => {
    res.send("Server ready")
});

app.get("/products", (req, res) => {
    res.send("products ready")
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server start at http://localhost:${PORT}`);
});