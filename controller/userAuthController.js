const express = require("express");
const users = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getIdByUsername,
} = require("../queries/users.js");
const { hashPass } = require("../middleware/securePass.js");
const { lowercase } = require("../middleware/lowercase.js");
const usernameController = require("./usernameController.js");
const emailController = require("./emailController.js");
const authController = require("./authController.js");
const tripController = require("./tripController.js");

users.use("/usernames", usernameController);
users.use("/emails", emailController);
users.use("/auth", authController);


// Index
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers.length) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// Show
users.get("/:username", async (req, res) => {
  const { username } = req.params;
  const user = await getUser(username.toLowerCase());
  if (!user.message) {
    res.status(200).json(user);
  } else {
    res.redirect("/not-found");
  }
});

// Create
users.post("/", lowercase, hashPass, async (req, res) => {
  const newUser = await createUser(req.body);
  if (!newUser.message) {
    res.status(200).json(newUser);
  } else {
    res.status(500).json({ error: newUser.message });
  }
});

// Update
users.put("/:username", lowercase, hashPass, async (req, res) => {
  const { username } = req.params;
  const id = await getIdByUsername(username.toLowerCase());
  const updatedUser = await updateUser(req.body, id.id);
  if (!updateUser.message) {
    res.status(200).json(updatedUser);
  } else {
    res.status(500).json({ error: updateUser.message });
  }
});

// Delete
users.delete("/:username", async (req, res) => {
  const { username } = req.params;
  const id = await getIdByUsername(username.toLowerCase());
  const deletedUser = await deleteUser(id.id);
  if (!deletedUser.message) {
    res.status(200).json(deletedUser);
  } else {
    res.status(500).json({ error: deletedUser.message });
  }
});

module.exports = userAuthController;
