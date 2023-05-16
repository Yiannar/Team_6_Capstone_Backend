const db = require('../db/dbConfig');

const getAllReplies = async () => {
  try {
    const allReplies = await db.any('SELECT * FROM replies');
    return allReplies;
  } catch (error) {
    return error;
  }
};

const getReply = async (id) => {
  try {
    const reply = await db.one('SELECT * FROM replies WHERE id=$1', id);
    return reply;
  } catch (error) {
    return error;
  }
};

const createReplies = async (replies) => {
  let { replies, date } = replies;
  try {
    const newReplies = await db.one(
      'INSERT INTO replies(replies,date) VALUES ($1, $2) RETURNING *',
      [replies, date]
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

const updateReplies = async (id, replies) => {
  let { replies, date } = post;
  try {
    const updatedReply = await db.many(
      'UPDATE replies SET replies=$1, date=$2 WHERE id=$3 RETURNING *'[
        (replies, date)
      ]
    );
    return updatedReplies;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReplies,
  getReply,
  createReplies,
  deleteReply,
  updateReplies,
};
