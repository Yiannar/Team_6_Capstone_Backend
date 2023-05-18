// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const userController = require('./controller/userController');
const postsController = require('./controller/postsController');
const repliesController = require('./controller/repliesController');
const groupsController = require('./controller/groupsController');
const userGroupsController = require('./controller/userGroupsController');
const bulletinController = require('./controller/bulletinController'
const loginController = require('./controller/loginController');
const registrationController = require('./controller/dashboard');
const morgan = require('morgan');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

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

  // Implement rate limiting in for users
  // ...

  next();
});

// USER ROUTES
app.use('/users', userController);
app.use('/posts', postsController);
app.use('/reply', repliesController);
app.use('/groups', groupsController);
app.use('/userGroups', userGroupsController);


console.log(`${req.method} ${req.url}`);

// LOGIN ROUTE
app.use('/login', loginController);

// BULLETIN ROUTES
app.use('/groups/bulletin', bulletinController);

// Register and Login Routes
app.post('/login', loginController.login);
app.post('/register', registrationController.register);


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Kyrun App');
});

// Registration Form Route
app.get('/registrationForm', (req, res) => {
  // Handle the GET request for the registration form
  // Return the registration form HTML or render a registration form template
  // Example:
  res.send('This is the registration form'); // Replace this with your actual registration form implementation
});

// 404 PAGE
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// EXPORT
module.exports = app;
