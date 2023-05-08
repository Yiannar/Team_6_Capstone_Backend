// DEPENDENCIES
const { Socket } = require("socket.io");
const app = require("./app.js");



// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



const io = require('socket.io')(3003, {
    cors:{
        origin: ['http://localhost:3003']
    }
})

io.on('connection', socket =>{
    console.log(socket.id)
    socket.on('send-message', message => {
        if(room === ''){ 
            socket.broadcast.emit('recieve-message', message)
        } else {
            socket.to(room).emit('recieve-message', message)
        }
    })
})
socket.on('join-room', (room,cb) =>{
    socket.join(room)
    cb(`Joined ${room}`)
})
