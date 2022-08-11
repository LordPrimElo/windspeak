// ======================================================
// IMPORTS
// ======================================================
// PACKAGE IMPORTS
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const bodyParser = require("body-parser")



// ROUTE IMPORTS
const mainRoutes = require("./routes/main")


// ======================================================
// CONFIGURATION
// ======================================================
// Express Config
app.set("view engine", "ejs")
app.use(express.static("public"))

// Body Parser Config
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Socket.io Config
io.on("connection", (socket) => {
  // console.log("Connected on " + socket.id)
  socket.on("send-message", msg => {

    console.log("Received send-message command"); console.log(msg)
    
    socket.broadcast.emit("receive-message", msg); console.log("Emitted Message")
    
    
  })
})


// Route Config
app.use(mainRoutes)


// ======================================================
// LISTEN
// ======================================================
server.listen(process.env.PORT || 3000, () => {
    console.log("It's Alive!")
})