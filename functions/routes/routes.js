const express = require('express');
const routes = express.Router();

const cookieConfig = { 
    maxAge: 2419200000, 
    httpOnly: true,
};

const randomBinary = Math.random().toString(2).substr(2, 50);

routes.get(`/`, (req, res) => res.status(200).json("Server is up!"));

routes.get(`/jsonHeader`, (req, res) => {
    return res.status(200)
    .cookie("jsonHeader", randomBinary, cookieConfig)
    .json("Cookie type JSON-Header has been set!");
})

module.exports = routes;