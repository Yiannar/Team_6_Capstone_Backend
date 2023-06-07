const db = require('../db/dbConfig');

const getAllBulletin = async (id) => {
  try {
    const bulletin = await db.any(
      'SELECT * FROM bulletin'
    );
    return bulletin;
  } catch (error) {
    return error;
  }
};


const getBulletin = async (group_id) => {
  try {
    const bulletin = await db.any(
      'SELECT * FROM bulletin WHERE groups_id=$1', group_id
    );
    return bulletin;
  } catch (error) {
    return error;
  }
};

const createBulletin = async (bulletin) => {
  let { title, message, author, date, author_id, groups, groups_id } = bulletin;
  try {
    const newBulletin = await db.one(
      'INSERT INTO bulletin (title, message, author, date, author_id, groups, groups_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [ title, message, author, date, author_id, groups, groups_id]
    );
    return newBulletin;
  } catch (error) {
    return error;
  }
};
const deleteBulletin = async (id) => {
  try {
    const deletedBulletin = await db.one(
      'DELETE FROM bulletin WHERE id = $1 RETURNING *',
      id
    );
    return deletedBulletin;
  } catch (error) {
    return error;
  }
};

const updateBulletin = async (id, bulletin) => {
  let { title, message, author, date, author_id, groups, groups_id } = bulletin;
  try {
    const updatedBulletin = await db.one(
      'UPDATE bulletin SET title=$1,message=$2,author=$3,date=$4, author_id=$5, groups=$6, groups_id=$7 WHERE id=$8 RETURNING *',
      [title, message, author, date, author_id, groups, groups_id, id]
    );
    return updatedBulletin;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBulletin,
  getBulletin,
  createBulletin,
  deleteBulletin,
  updateBulletin,
};