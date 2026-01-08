require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const sistemRoutes = require('./routes/sistemRoutes');
app.use('/sistem', sistemRoutes);

const protectedRoutes = require('./routes/protectedRoutes');
app.use('/protected', protectedRoutes);

module.exports = app;