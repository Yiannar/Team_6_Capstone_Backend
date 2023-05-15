const express = require('express');
const app = express();

require("dotenv").config();

const PORT = 3333;

const httpServer = require("http").createServer(app);
const cors = require('cors')

app.use(cors())
app.use(express.json());

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
//     console.log(users);

//     socket.on('disconnect', () => {
//         console.log('🔥: A user disconnected');
//         users = users.filter((user) => user.socketID !== socket.id);
//         socketIO.emit('newUserResponse', users);
//         socket.disconnect();
//     });
// });

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.post('/register', (req, res) => {
  // handle the registration 
  // retrieve the registration data from the request body.
  const { email, password } = req.body;
  // Then, you can use the PostgreSQL client to insert the registration data into the database.  
  const { Client } = require('pg');
  const client = new Client({     
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  client.connect();
  client.query(     
    'INSERT INTO registration(email, password) VALUES($1, $2)',     
    [email, password],     
    (err, result) => {       
      if (err) {         
        console.log(err);         
        res.status(500).send('An error occurred while registering the user');       
      } else {         
        console.log('User registered successfully');         
        res.status(200).send('User registered successfully');       
      }       
      client.end();     
    }   
  ); 
});

httpServer.listen(PORT, () => {   
  console.log(`Server listening on ${PORT}`); 
});
