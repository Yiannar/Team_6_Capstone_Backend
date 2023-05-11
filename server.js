const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const http = require('http').Server(app)
const cors = require('cors')

app.use(cors())

let users = [];

const socketIO = require('socket.io')(http, {
    cors:{
        origin: ['https://kyrun.netlify.app/']
    }
})



socketIO.on('connection', (socket) => {
   
    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
    });
  
    console.log(`⚡: ${socket.id} user just connected!`);

  //Listens when a new user joins the server
  //Adds the new user to the list of users
  //Sends the list of users to the client
  
  socket.on('newUser', (data) => {
    users.push(data);
    socketIO.emit('newUserResponse', users);
});
console.log(users);

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
});
});
console.log(users);

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});