const express = require('express');
const groups = express.Router()
const {getAllGroups, getGroup, createGroup, deleteGroup,updateGroup} = require('../queries/groups')

// Index route
groups.get('/', async (req, res) => {
  const allgroups = await getAllGroups();
  if (allgroups[0]) {
    res.status(200).json(allgroups);
  } else {
    res.status(500).json({ error: 'Unable to get all groups' });
  }
});

// Show Route

groups.get('/:id', async (req, res) => {
  const { id } = req.params;
  const group = await getGroup(id);
  console.log('group', group);
  if (!group.message) {
    res.status(200).json(group);
  } else {
    res.status(400).json({ error: ' Group Not found' });
  }
});
//CREATE
groups.post('/', async (req, res) => {
  try {
    const group = await createGroup(req.body);
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: 'Cannot create a group error' });
  }
});

// Delete

groups.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGroup = await deleteGroup(id);
    res.status(200).json(deletedGroup);
  } catch (error) {
    res.status(500).json({ error: 'invalid request to remove a group' });
  }
});

// Update

groups.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGroup = await updateGroup(id, req.body);
    res.status(200).json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: 'Cannot update group error' });
  }
});

module.exports = groups;