var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')));
app.use('/client',express.static(path.join(__dirname, 'client/page')));
app.use('/b',express.static(path.join(__dirname, 'client/bootstrap')));

var test = require('./test');
app.use('/test', test);
app.get('/', function (req, res) {
    res.send('Hello World2!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});