const express = require('express');
const users = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser
} = require('../queries/user');

// Index route
users.get('/', async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: 'Unable to get all users' });
  }
});

// Show Route

users.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  console.log('user', user);
  if (!user.message) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ error: ' User Not found' });
  }
});

users.post('/login', async(req,res)=>{
// email and password is req.body
  try {
    const user = await loginUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
})


//CREATE
users.post('/', async (req, res) => {
  let copy = { ...req.body };
  //   const capitalized = copy.name
  //     .toLowerCase()
  //     .split(' ')
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  //   copy.name = capitalized;
  // console.log({ copy });

  try {
    const user = await createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});

// Delete

users.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'invalid request' });
  }
});

// Update

users.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUser(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});

module.exports = users;
