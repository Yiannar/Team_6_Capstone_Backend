// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const userController = require('./controller/userController');
const postsController = require('./controller/postsController');
const repliesController = require('./controller/repliesController');
const groupsController = require('./controller/groupsController');
const userGroupsController = require('./controller/userGroupsController');
const bulletinController = require('./controller/bulletinController');
const runningRoutesController = require('./controller/runningRoutesController');

const morgan = require('morgan');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// USER ROUTES
app.use('/users', userController);
app.use('/posts', postsController);
app.use('/reply', repliesController);
app.use('/groups', groupsController);
app.use('/usergroups', userGroupsController);
app.use('/bulletin', bulletinController);
app.use('/runningroutes', runningRoutesController);


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
