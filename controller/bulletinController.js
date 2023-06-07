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
  const AllBulletin = await getAllBulletin();
  if (AllBulletin[0]) {
    res.status(200).json(AllBulletin);
  } else {
    res.status(500).json({ error: 'Unable to get all bulletin posts' });
  }
});


// get bulletin
bulletin.get('/:id', async (req, res) => {
  const { id } = req.params;
  const bulletin = await getBulletin(id);
  console.log('bulletin', bulletin);
  if (!bulletin.message) {
    res.status(200).json(bulletin);
  } else {
    res.status(400).json({ error: ' Bulletin Not found' });
  }
});

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
