const express = require('express');
const posts = express.Router()
const {getAllPosts,getPost,createPost,deletePost,updatePost} = require('../queries/posts')

// Index route
posts.get('/', async (req, res) => {
  const allPosts = await getAllPosts();
  if (allPosts[0]) {
    res.status(200).json(allPosts);
  } else {
    res.status(500).json({ error: 'Unable to get all posts' });
  }
});

// Show Route

posts.get('/:id', async (req, res) => {
  const { id } = req.params;
  const post = await getPost(id);
  console.log('post', post);
  if (!post.message) {
    res.status(200).json(post);
  } else {
    res.status(400).json({ error: ' Post Not found' });
  }
});
//CREATE
posts.post('/', async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Cannot create a post error' });
  }
});

// Delete

posts.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletedPost(id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: 'invalid request to remove a post' });
  }
});

// Update

posts.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await updatePost(id, req.body);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Cannot update post error' });
  }
});

module.exports = posts;
