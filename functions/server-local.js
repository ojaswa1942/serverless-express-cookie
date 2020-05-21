const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes/routes');

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/', routes);

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Functions at root (localhost:${PORT}/)`);
    console.log(`We are on on port ${PORT}!`);
});
