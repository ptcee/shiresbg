const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

let scoreboardState = {
  p1: { name: '', affil: '', score: 0 },
  p2: { name: '', affil: '', score: 0 },
  round: 1,
  extract: '',
  secure: ''
};

io.on('connection', (socket) => {
  socket.emit('update', scoreboardState);

  socket.on('updateState', (data) => {
    scoreboardState = { ...scoreboardState, ...data };
    io.emit('update', scoreboardState);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/mcpo.html');
});

app.get('/display', (req, res) => {
  res.sendFile(__dirname + '/public/display.html');
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('updateState', (state) => {
    socket.broadcast.emit('stateUpdated', state);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});