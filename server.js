'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(8888, function(){
    console.log("http server running on port 8888");
});