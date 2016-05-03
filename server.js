/**
 * Created by kebab on 27-04-2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var weatherController = require('./server/controllers/weather-controller');

mongoose.connect('mongodb://localhost:27017/time-waste');

app.use(bodyParser.json());
app.use('/app',express.static(__dirname+"/app"));
app.use('/node_modules',express.static(__dirname+"/node_modules"));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);
app.post('/api/weather/citylist',weatherController.getCityList);

app.listen('3000', function() {
    console.log("Listening for localhost 3000");
});
