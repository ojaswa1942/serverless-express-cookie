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
    .then(xRes => xRes.body.pipe(res));
});

scriptRoutes.get('/jsonHeaderScript', (req, res) => {
    return fetch(`${process.env.URL}/scripts/jsonHeader.js`)
    .then(xRes => xRes.body.pipe(res));
});

scriptRoutes.get('/scriptRaw', (req, res) => {
    return fetch(`${process.env.URL}/scripts/scriptRaw.js`)
    .then(xRes => xRes.body.pipe(res));
});

scriptRoutes.get('/scriptHeader', (req, res) => {
    res.cookie('scriptHeader', randomBinary, cookieConfig);
    return fetch(`${process.env.URL}/scripts/scriptHeader.js`)
    .then(xRes => xRes.body.pipe(res));
});

scriptRoutes.get('/scriptExplicit', (req, res) => {
    return fetch(`${process.env.URL}/scripts/scriptExplicit.js`)
    .then(xRes => xRes.body.pipe(res));
});

scriptRoutes.get('/scriptHeaderAndExplicit', (req, res) => {
    res.cookie('header_scriptHeaderAndExplicit', randomBinary, cookieConfig);
    return fetch(`${process.env.URL}/scripts/scriptHeaderAndExplicit.js`)
    .then(xRes => xRes.body.pipe(res));
});

module.exports = scriptRoutes;