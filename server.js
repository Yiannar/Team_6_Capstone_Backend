const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

const httpServer = require("http").createServer(app);
const cors = require('cors')

app.use(cors())



const socketIO = require('socket.io')(httpServer, {
    cors:{
        origin: 'http://localhost:3000'

        
    }
})


let users = [];

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    
    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
    });
    
    
    socket.on('newUser', (data) => {
        users.push(data);
        socketIO.emit('newUserResponse', users);
    });
console.log(users);

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    users = users.filter((user) => user.socketID !== socket.id);
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
});
});
console.log(users);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

// socketIO.on("connection", (socket) => {
//     socket.on("list items", async (callback) => {
//       try {
//         const items = await findItems();
//         callback({
//           status: "OK",
//           items
//         });
//       } catch (e) {
//         callback({
//           status: "NOK"
//         });
//       }
//     });
//   });

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});