// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

const  {socket}  = require("socket.io");
const {instrument} = require ('@socket.io/admin-ui')



const io = require('socket.io')(3004, {
    cors:{
        origin: ['https://kyrun.netlify.app/', 'https://admin.socket.io/']
    }
})

io.on('connection', socket =>{
    console.log(socket.id)
    socket.on('send-message', (message, room) => {
        if(room === ''){ 
            socket.broadcast.emit('recieve-message', message)
        } else {
            socket.to(room).emit('recieve-message', message)
        }
    })
    socket.on('join-room', (room, cb) =>{
        socket.join(room)
        cb(`Joined ${room}`)
    })
})

instrument(io, {auth: false})

// LISTEN
io.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  
  