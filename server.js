// const express = require('express');
const app = require('./app');
// const cors = require("cors");

//config
require("dotenv").config();
const PORT = process.env.PORT;

// app.use("/authentication", require("./controller/jwtAuth"));

// app.use("/dashboard", require("./controller/authController"));

//listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const httpServer = require("http").createServer(app);
// const cors = require('cors')

// app.use(cors())
// app.use(express.json());

// const socketIO = require('socket.io')(httpServer, {
//     cors:{
//         origin: 'http://localhost:3000'
//     }
// })


// const socketIO = require('socket.io')(httpServer, {
//     cors:{
//         origin: 'http://localhost:3000'

        
//     }
// })


// let users = [];

// socketIO.on('connection', (socket) => {
//     console.log(`⚡: ${socket.id} user just connected!`);
    
//     socket.on('message', (data) => {
//         socketIO.emit('messageResponse', data);
//     });
    
    
//     socket.on('newUser', (data) => {
//         users.push(data);
//         socketIO.emit('newUserResponse', users);
//     });
// console.log(users);

//   socket.on('disconnect', () => {
//     console.log('🔥: A user disconnected');
//     users = users.filter((user) => user.socketID !== socket.id);
//     socketIO.emit('newUserResponse', users);
//     socket.disconnect();
// });
// });
// console.log(users);



