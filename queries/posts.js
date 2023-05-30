const db = require('../db/dbConfig');

const getAllPosts = async (groups_id) => {
  try {
    const allPosts = await db.any('SELECT * FROM posts WHERE groups_id=$1', groups_id);
    return allPosts;
  } catch (error) {
    return error;
  }
};

const getPost = async (groups_id) => {
  try {
    const post = await db.one('SELECT * FROM posts WHERE groups_id=$1', groups_id);
    return post;
  } catch (error) {
    return error;
  }
};

const createPost = async (singlePost) => {
  let { post, date, author_id, groups_id } = singlePost;
  try {
    const newPost = await db.one(
      'INSERT INTO posts(post,date, author_id, groups_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [post, date, author_id, groups_id]
    );
    return newPost;
  } catch (error) {
    return error;
  }
};

const deletePost = async (id) => {
  try {
    const deletedPost = await db.one(
      'DELETE FROM posts WHERE id=$1 RETURNING *',
      id
    );
    return deletedPost;
  } catch (error) {
    return error;
  }
};

const updatePost = async (id, singlePost) =>{
    let {post, date, author_id, groups_id} = singlePost
    try {
        const updatedPost = await db.one(
            'UPDATE posts SET post=$1, date=$2, author_id=$3, groups_id=$4 WHERE id=$5 RETURNING *',
            [post, date, author_id, groups_id, id]
        )
        return updatedPost
    } catch (error) {
        return error
    }
};

module.exports = { getAllPosts, getPost, createPost, deletePost, updatePost };
