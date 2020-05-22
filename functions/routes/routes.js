const express = require('express');
const routes = express.Router();
const scriptRoutes = require('./scriptRoutes');

const cookieConfig = { 
    maxAge: 2419200000, 
    httpOnly: true,
};

const randomBinary = Math.random().toString(2).substr(2, 50);

routes.get(`/`, (req, res) => res.status(200).json("This is JSON Response"));

routes.get(`/jsonHeader`, (req, res) => {
    return res.status(200)
    .cookie("jsonHeader", randomBinary, cookieConfig)
    .json("Cookie type JSON-Header has been set!");
});

routes.use('/scripts', scriptRoutes);

module.exports = routes;