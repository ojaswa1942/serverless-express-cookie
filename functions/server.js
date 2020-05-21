const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

const cookieConfig = { 
    maxAge: 2419200000, 
    httpOnly: true,
};

const randomBinary = Math.random().toString(2).substr(2, 50);

app.get(`/jsonHeader`, (req, res) => {
    res.status(200)
    .cookie("jsonHeader", randomBinary, cookieConfig)
    .json("Cookie type JSON-Header has been set!");
})

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
}