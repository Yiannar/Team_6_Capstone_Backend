const express = require('express');
const usersGroups = express.Router();
const {
  getAllUserGroups,
  getAllGroupsSingleUser,
  getAllGroups,
  countGroupMembers,
  getSingleUserGroup,
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
usersGroups.get('/:profile_id/', async (req, res) => {
  const { profile_id } = req.params;
  const group = await getAllGroupsSingleUser(profile_id);
  console.log('group', group);
  if (!group.message) {
    res.status(200).json(group);
  } else {
    res.status(400).json({ error: ' group Not found' });
  }
});

// // This should allow the user to join a group at that groupID hopefully
// usersGroups.post('/', async (req, res) => {
// =======
// // gets all profiles that belong to a groups_id
// usersGroups.get('/groups/:groups_id', async (req, res) => {
//   const { groups_id} = req.params;
//   const group = await getAllGroups(groups_id);
//   console.log('group', group);
//   if (!group.message) {
//     res.status(200).json(group);
//   } else {
//     res.status(400).json({ error: ' group Not found' });
//   }
// });



// count to see how many users are in a group
usersGroups.get('/:groups_id/profiles/count', async (req, res) => {
  const { groups_id} = req.params;
  const group = await countGroupMembers(groups_id);
  console.log('group', group);
  if (!group.message) {
    res.status(200).json(group);
  } else {
    res.status(400).json({ error: ' group Not found' });
  }
});


// this gets all the group the user belongs to at that particular profile_id
usersGroups.get('/:profile_id/:groups_id', async (req, res) => {
  const { profile_id, groups_id } = req.params;
  try {
    const group = await getSingleUserGroup(profile_id, groups_id);
    console.log('group', group);
    if (!group.message) {
      res.status(200).json(group);
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



// This works now to join 
usersGroups.post('/:profile_id/:groups_id', async (req, res) => {
  const { profile_id, groups_id } = req.params;
  try {
    const joinGroup = await joinAGroup(profile_id, groups_id);
    res.status(200).json(joinGroup);
  } catch (error) {
    res.status(500).json({ error: 'cannot join group' });
  }
});

// This should allow the user to leave a group at that profileID,groupID hopefully but needs work
usersGroups.delete('/:profile_id/:groups_id', async (req, res) => {
  try {
    const { profile_id, groups_id } = req.params;
    const leaveGroup = await leaveAGroup(profile_id, groups_id);
    res.status(200).json(leaveGroup);
  } catch (error) {
    res.status(500).json({ error: 'invalid request' });
  }
});

module.exports = usersGroups;
