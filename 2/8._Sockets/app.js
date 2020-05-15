const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on('connection', socket => {
    console.log("hello?????", socket.id);
});

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
});

server.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server");
    }
    console.log("The server is running on port", 3000);
});