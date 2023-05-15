const db = require("../models");

const groupController = {};

groupController.getAllGroups = async (req, res) => {
  try {
    const groups = await db.Group.findAll();
    res.status(200).json(groups);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

groupController.getGroupById = async (req, res) => {
  try {
    const group = await db.Group.findOne({ where: { id: req.params.id } });
    if (!group) {
      res.status(404).json({ error: "Group not found" });
    } else {
      res.status(200).json(group);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

groupController.createGroup = async (req, res) => {
  try {
    const group = await db.Group.create({
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      adminId: req.user.id // assuming you have middleware to authenticate the user and store their id in req.user
    });
    res.status(201).json(group);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

groupController.updateGroup = async (req, res) => {
  try {
    const group = await db.Group.findOne({ where: { id: req.params.id } });
    if (!group) {
      res.status(404).json({ error: "Group not found" });
    } else if (group.adminId !== req.user.id) {
      res.status(403).json({ error: "You are not authorized to update this group" });
    } else {
      await group.update({
        name: req.body.name || group.name,
        description: req.body.description || group.description,
        location: req.body.location || group.location
      });
      res.status(200).json(group);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

groupController.deleteGroup = async (req, res) => {
  try {
    const group = await db.Group.findOne({ where: { id: req.params.id } });
    if (!group) {
      res.status(404).json({ error: "Group not found" });
    } else if (group.adminId !== req.user.id) {
      res.status(403).json({ error: "You are not authorized to delete this group" });
    } else {
      await group.destroy();
      res.status(204).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = groupController;
