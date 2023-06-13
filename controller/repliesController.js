const express = require('express');
const reply = express.Router()
const {getAllReplies,
    getReply,
    createReplies,
    deleteReply,
    updateReplies} = require('../queries/replies')

// Index route
// gets all posts
reply.get('/', async (req, res) => {
  try {
    const allReplies = await getAllReplies();
    res.status(200).json(allReplies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Show Route

reply.get('/:id', async (req, res) => {
  const { id } = req.params;
  const replies = await getReply(id);
  console.log('reply', replies);
  if (replies[0]) {
    res.status(200).json(replies);
  } else {
    res.status(400).json({ error: ' Replies Not found' });
  }
});
//CREATE
reply.post('/', async (req, res) => {
  try {
    const replies = await createReplies(req.body);
    res.status(200).json(replies);
  } catch (error) {
    res.status(500).json({ error: 'Cannot create a reply error' });
  }
});

// Delete

reply.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReply = await deleteReply(id);
    res.status(200).json(deletedReply);
  } catch (error) {
    res.status(500).json({ error: 'invalid request to remove a reply' });
  }
});

// Update

reply.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedReply = await updateReplies(id, req.body);
    res.status(200).json(updatedReply);
  } catch (error) {
    res.status(404).json({ error: 'Cannot update reply error' });
  }
});

module.exports = reply;
