// var http = require("http");
// http.createServer(function(request, response) {
//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, { 'Content-Type': 'text/plain' });

//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
// }).listen(8081);
// var app = require('express')(); //to install express write "npm install express"

// app.get('/testmap', function(req, res) {

//     res.sendFile(path.join(__dirname + '/testMap.html'));
// });
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

var express = require('express');
var app = express();
var path = require("path");

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/testMap.html'));
});
app.listen(3000);