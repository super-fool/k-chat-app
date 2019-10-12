const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);
app.use(cors);

io.on("connection", socket => {
  console.log("We have a new websocket connection.");

  socket.on("disconnect", () => {
    console.log("we have disconnect websocket connection.");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
