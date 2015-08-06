// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/build'));

// // views is directory for all template files
// app.set('/', __dirname);
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('index');
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  response.render('index');
});

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
