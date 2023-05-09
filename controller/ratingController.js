const express = require('express');
const ratings = express.Router();
const {
  getAllRatings,
  getRating,
  createRating,
  deleteRating,
  updateRating,
} = require('../queries/rating');

ratings.get('/', async (req, res) => {
  const allRatings = await getAllRatings();
  if (allRatings[0]) {
    res.status(200).json(allRatings);
  } else {
    res.status(500).json({ error: 'Unable to get all ratings' });
  }
});

ratings.get('/:id', async (req, res) => {
  const { id } = req.params;
  const rating = await getRating(id);
  console.log('rating', rating);
  if (!rating.message) {
    res.status(200).json(rating);
  } else {
    res.status(400).json({ error: 'Rating Not found' });
  }
});

ratings.post('/', async (req, res) => {
  try {
    const rating = await createRating(req.body);
    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ error: 'cannot create rating' });
  }
});

ratings.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRating = await deleteUser(id);
    res.status(200).json(deletedRating);
  } catch (error) {
    res.status(500).json({ error: 'cannot delete rating' });
  }
});

ratings.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRating = await updateRating(id, req.body);
    res.status(200).json(updatedRating);
  } catch (error) {
    res.status(500).json({ error: 'cannot update rating' });
  }
});
module.exports = ratings;
