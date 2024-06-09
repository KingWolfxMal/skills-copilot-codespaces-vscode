// Create web server
// 1. Load express module
// 2. Create an express app
// 3. Create a route
// 4. Start the server
// 5. Listen on port 3000

// 1. Load express module
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// 2. Create an express app
var app = express();

// 3. Create a route
app.get('/', function(request, response) {
  response.send('Hello world');
});

// 4. Start the server
app.listen(3000, function() {
  console.log('Server started on http://localhost:3000');
});

// 5. Listen on port 3000

// 6. Create a route that sends back a JSON object
app.get('/comments', function(request, response) {
  response.json({
    comments: [