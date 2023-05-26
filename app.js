// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const userController = require('./controller/userController');
const postsController = require('./controller/postsController');
const repliesController = require('./controller/repliesController');
const groupsController = require('./controller/groupsController');
const userGroupsController = require('./controller/userGroupsController');
const bulletinController = require('./controller/bulletinController');
// const loginController = require('./controller/loginController');
// const authController = require('./controller/authController');
const morgan = require('morgan');

//auth 
const { PORT, CLIENT_URL } = require('./db/dbConfig');
// const cookieParser = require('cookie-parser');
// const passport = require('passport');

// CONFIGURATION
const app = express();

//import passport middleware 
// require('./middleware/auth-middleware');

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

// USER ROUTES
app.use('/users', userController);
app.use('/posts', postsController);
app.use('/reply', repliesController);
app.use('/groups', groupsController);
app.use('/userGroups', userGroupsController);

// LOGIN ROUTE
app.use('/users', userController);

// BULLETIN ROUTES
app.use('/groups/bulletin', bulletinController);

app.use("/users", userController);

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Kyrun App');
});

// 404 PAGE
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// EXPORT
module.exports = app;
