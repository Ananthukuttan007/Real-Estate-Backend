const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/user');
const assetRoute = require('./routes/asset');
var jwt = require('jsonwebtoken');
const secret = "RESTAPI"


app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/asset', assetRoute);




module.exports = app;