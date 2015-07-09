var gzippo = require('gzippo');
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
 
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
console.log('listening on ', port)
app.listen(port);