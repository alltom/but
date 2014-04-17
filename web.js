var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.get("/n/:nodeID", function (request, response) {
	response.sendfile(__dirname + '/public/index.html');
});
app.listen(3000);
console.log("listening http://0.0.0.0:3000/")
