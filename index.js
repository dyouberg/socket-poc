const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT_NUMBER = 9555;

let people = {};

// TODO Add list of users to right side
// Allow selection of users
// Allow whisper to user
// Add message box

// Add box to live bidder
// Have bidders connect
// Set up as Desktop App with Electron

// Routing
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Our app runs on port 4000
http.listen(PORT_NUMBER, () => {
  console.log('listening on Port: '+PORT_NUMBER);
});

io.on('connection', socket => {

  // console.log(io.sockets.connected);

  socket.on('broadcast', msg => {
    io.emit('broadcast', msg);
  });

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});