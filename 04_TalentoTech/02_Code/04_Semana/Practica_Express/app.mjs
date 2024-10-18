'use strict';

import express from "express";

const app = express();
const port = 3000;

// Creando una ruta
app.get('/', (req, res) => {
    res.send('Welcomen to my first API with Express');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});