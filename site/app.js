const express = require('express');
const bodyParser = require('body-parser');
var socket = require("socket.io");
var db = require("./public/js/createdb.js");
const app = express();
var id, psw;
var port = 3000;
var server = app.listen(port, function() {
  console.log("Listening at http://localhost:" + port);
});
var sock = socket(server);
// const express_force_ssl = require('express-force-ssl');
//
// app.use(express_force_ssl);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log("Listening at http://localhost: " + port));

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// app.get('/',function(req,res){
//   res.sendfile("index.html");
// });

app.post('/login/new', function(req, res, next){
  id = req.body.login-id;
  psw = req.body.login-psw;
  db.run("INSERT OR REPLACE INTO Membership(id, password) VALUES(?, ?)", [id, psw]);
  res.redirect("/index.html")
});

sock.on('connection', function(socket) {
  console.log("made connection with socket " + socket.id);
  socket.on("chat", function(data) {
    sock.sockets.emit("chat", data);
  });

  socket.on("typing", function(data) {
    socket.broadcast.emit("typing", data);
  });
});
