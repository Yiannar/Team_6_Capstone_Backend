// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const userController = require('./controller/userController');
const groupController = require('./controller/groupsController');
const loginController = require('./controller/loginController');
const registrationController = require('./controller/registrationController');
const morgan = require('morgan');

// CONFIGURATION
const app = express();
const port = 3333; 
// post should change to 3003 

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Input validation middleware
app.use((req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  // Check that email is in a valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Check that password is at least 8 characters long
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  next();
});

// Security middleware
app.use((req, res, next) => {
  // Implement HTTPS
  if (req.protocol !== 'https') {
    return res.status(403).json({ error: 'HTTPS required' });
  }

  // Implement rate limiting
  // ...

  next();
});

// USER ROUTES
app.use('/users', userController);
console.log(`${req.method} ${req.url}`);
// LOGIN ROUTE
app.use('/login', loginController);
console.log(`${req.method} ${req.url}`);
//Groups Routes 
app.use('/groups', groupController);
console.log(`${req.method} ${req.url}`);

app.post('/login', loginController.login);
app.post('/register', registrationController.register);

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Kyrun App');
  console.log();
});

// 404 PAGE
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// EXPORT
module.exports = app;
