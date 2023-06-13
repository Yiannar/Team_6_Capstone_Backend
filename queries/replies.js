const db = require('../db/dbConfig');

const getAllReplies = async (post_id = null) => {
  try {
    let query = 'SELECT * FROM replies';
    let params = [];

    if (post_id) {
      query += ' WHERE post_id = $1';
      params.push(post_id);
    }

    const allReplies = await db.any(query, params);
    return allReplies;
  } catch (error) {
    return error;
  }
};
const getReply = async (post_id) => {
  try {

    const reply = await db.any('SELECT * FROM replies WHERE post_id=$1', post_id);

    return reply;
  } catch (error) {
    return error;
  }
};

const createReplies = async (replies) => {
  let { reply, date, post_id, author_id, groups_id } = replies;
  try {
    const newReplies = await db.one(
      'INSERT INTO replies(reply, date, post_id, author_id, groups_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [reply, date, post_id, author_id, groups_id]
    );
    return newReplies;
  } catch (error) {
    return error;
  }
};


const deleteReply = async (id) => {
  try {
    const deletedReply = await db.one(
      'DELETE FROM replies WHERE id=$1 RETURNING *',
      id
    );
    return deletedReply;
  } catch (error) {
    return error;
  }
};

const updateReplies = async (id, replies) =>{
    // let {reply, date, post_id, author_id}= replies;
    try {
        const updatedReply = await db.one(
            'UPDATE replies SET reply=$1, date=$2, post_id=$3, author_id=$4 WHERE id=$5 RETURNING *',
            [
            replies.reply, 
            replies.date,
            replies.post_id, 
            replies.author_id,
            id
            ]
        )
        return updatedReply
    } catch (error) {
        return error
    }
};

module.exports = {
  getAllReplies,
  getReply,
  createReplies,
  deleteReply,
  updateReplies,
};
