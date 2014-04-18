var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.get("/n/:nodeID", function (request, response) {
	response.sendfile(__dirname + '/public/index.html');
});
app.listen(port);
console.log('listening http://0.0.0.0:' + port + '/')
