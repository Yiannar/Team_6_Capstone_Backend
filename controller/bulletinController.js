const express = require('express');
const bulletin = express.Router();
const {
  getAllBulletin,
  getBulletin,
  createBulletin,
  deleteBulletin,
  updateBulletin,
} = require('../queries/bulletin');


bulletin.get('/', async (req, res) => {
  const allBulletins = await getAllBulletin();
  if (allBulletins[0]) {
    res.status(200).json(allBulletins);
  } else {
    res.status(500).json({ error: 'Unable to get all bulletin posts' });
  }
});


// get bulletin

bulletin.get('/:id', async (req, res) => { const { id } = req.params;
  const foundBulletin = await getBulletin(id);
  console.log('bulletin', foundBulletin);
  if (!foundBulletin.message) {
    res.status(200).json(foundBulletin);
  } else {
    res.status(400).json({ error: 'Bulletin Not found' });
  }
});     

// bulletin.get('/profile/:profile_id', async (req, res) => {
//   const { profile_id } = req.params;
//   try {
//     const groups = await getAllGroupsUserBelongsTo(profile_id);
//     const groupIds = groups.map((group) => group.groups_id);

//     const bulletins = await getAllBulletin(groupIds);
//     res.status(200).json(bulletins);
//   } catch (error) {
//     res.status(500).json({ error: 'Unable to get bulletins for the profile' });
//   }
// });


// 

// create
bulletin.post('/', async (req, res) => {
  try {
    const newBulletin = await createBulletin(req.body);
    res.status(200).json(newBulletin);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});

// delete
bulletin.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBulletin = await deleteBulletin(id);
    res.status(200).json(deletedBulletin);
  } catch (error) {
    res.status(500).json({ error: 'invalid request' });
  }
});

// update

bulletin.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBulletin = await updateBulletin(id, req.body);
    res.status(200).json(updatedBulletin);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});

module.exports = bulletin;