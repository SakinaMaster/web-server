var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication); //Application level middleware. At all routes.

//Calling middleware at a specific route.
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(PORT, function () {
	console.log('Express server started on port: ' + PORT);
});