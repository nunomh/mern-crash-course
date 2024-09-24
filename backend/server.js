// const express = require('express');
import express from 'express';

const app = express();
const PORT = 5500;

app.get("/", (req, res) => {
    res.send("Server ready")
});

app.listen(PORT, () => {
    console.log(`Server start at http://localhost:${PORT}`);    
});