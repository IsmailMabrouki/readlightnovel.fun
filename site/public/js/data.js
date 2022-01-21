var socket = io.connect("http://localhost:3000");

var message = document.getElementById("message");
var userName = document.getElementById("userName");
var sendBtn = document.getElementById("send");
var messages = document.getElementById("messages");
var typing = document.getElementById("typing");

socket.on('connect', () => {
  console.log('Successfully connected!');
});

sendBtn.addEventListener("click", function() {

socket.emit("chat", {
    message: message.value,
    userName: userName.value
  });
});

socket.on("chat", function(data) {
  messages.innerHTML +=
    "<p><strong>" + data.userName + ": </strong>" + data.message + "</p>";
    typing.innerHTML = "";
});

message.addEventListener("keypress", function() {
  socket.emit("typing", userName.value);
});

socket.on("typing", function(data) {
  typing.innerHTML = "<p><em>" + data + " is typing</em></p>";
});
