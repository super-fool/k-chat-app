const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('We have a new websocket connection.')

    socket.on('disconnect', () => {
        console.log('we have disconnect websocket connection.')
    })
})

const PORT = process.env.PORT || 5000;

const router = require('./router');

app.use(router);

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});