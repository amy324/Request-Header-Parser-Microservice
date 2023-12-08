// index.js
require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for the header parsing
app.get('/api/whoami', function (req, res) {
  // extracts relevant information from the request header
  var ipAddress = req.ip; // Extracting IP address from the request
  var language = req.get('Accept-Language'); // Extracting language preference
  var software = req.get('User-Agent'); // Extracting user agent (software)

  // Construct the response JSON object
  var responseObject = {
    ipaddress: ipAddress,
    language: language,
    software: software,
  };

  // Send the JSON response
  res.json(responseObject);
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
