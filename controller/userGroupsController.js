const express = require('express');
const usersGroups = express.Router();
const {
  getAllUserGroups,
  getAllGroupsSingleUser,
  joinAGroup,
  leaveAGroup,
} = require('../queries/user_groups');

//  This gets all the groups the user belongs to
usersGroups.get('/', async (req, res) => {
  const groups = await getAllUserGroups();
  if (groups[0]) {
    res.status(200).json(groups);
  } else {
    res
      .status(500)
      .json({ error: 'Unable to get all groups user is member of' });
  }
});

// this gets all the group the user belongs to at that particular id
usersGroups.get('/:profile_id/:group_id', async (req, res) => {
  const { profile_id, group_id } = req.params;
  const group = await getAllGroupsSingleUser(profile_id, group_id);
  console.log('group', group);
  if (!group.message) {
    res.status(200).json(group);
  } else {
    res.status(400).json({ error: ' group Not found' });
  }
});

// This should allow the user to join a group at that groupID hopefully
usersGroups.post('/:id', async (req, res) => {
  try {
    const joinGroup = await joinAGroup(req.body);
    res.status(200).json(joinGroup);
  } catch (error) {
    res.status(500).json({ error: 'cannot join group' });
  }
});
// This should allow the user to leave a group at that profileID,groupID hopefully
usersGroups.delete('/:profile_id/:group_id', async (req, res) => {
  try {
    const { profileID, groupID } = req.params;
    const leaveGroup = await leaveAGroup(profileID, groupID);
    res.status(200).json(leaveGroup);
  } catch (error) {
    res.status(500).json({ error: 'invalid request' });
  }
});

module.exports = usersGroups;
