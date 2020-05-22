const express = require('express');
const scriptRoutes = express.Router();
const path = require('path');
const fetch = require('node-fetch');

const cookieConfig = { 
    maxAge: 2419200000, 
    httpOnly: true,
};

const randomBinary = Math.random().toString(2).substr(2, 50);

scriptRoutes.get('/jsonScript', (req, res) => {
    return fetch(`${process.env.URL}/scripts/json.js`)
    .then(extRes => extRes.body.pipe(res));
});

scriptRoutes.get('/jsonHeaderScript', (req, res) => {
    res.cookie('scriptCook', randomBinary, cookieConfig);
    return fetch(`${process.env.URL}/scripts/jsonHeader.js`)
    .then(extRes => extRes.body.pipe(res));
});

module.exports = scriptRoutes;