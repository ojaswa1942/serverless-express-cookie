const express = require('express');
const scriptRoutes = express.Router();
const path = require('path');

const cookieConfig = { 
    maxAge: 2419200000, 
    httpOnly: true,
};

const randomBinary = Math.random().toString(2).substr(2, 50);

scriptRoutes.use('/static', express.static(path.join(__dirname, '../scripts')));

scriptRoutes.get('/json', (req, res) => res.sendFile(path.join(__dirname, '../scripts', 'json.js')));
scriptRoutes.get('/jsonHeader', (req, res) => res.sendFile(path.join(__dirname, '../scripts', 'jsonHeader.js')));


module.exports = scriptRoutes;