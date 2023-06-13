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

const getBulletinsByGroupIds = async (groupIds) => {
  try {
    const bulletins = await db.any(
      'SELECT * FROM bulletin WHERE groups_id IN ($1:csv)',
      [groupIds]
    );
    return bulletins;
  } catch (error) {
    return error;
  }
};





const createBulletin = async (bulletin) => {
  let { title, message, author, date, author_id, groups, groups_id, is_important } = bulletin;
  try {
    const newBulletin = await db.one(
      'INSERT INTO bulletin (title, message, author, date, author_id, groups, groups_id, is_important) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [ title, message, author, date, author_id, groups, groups_id, is_important]
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
  let { title, message, author, date, author_id, groups, groups_id, is_important } = bulletin;
  try {
    const updatedBulletin = await db.one(
      'UPDATE bulletin SET title=$1,message=$2,author=$3,date=$4, author_id=$5, groups=$6, groups_id=$7, is_important=$8 WHERE id=$9 RETURNING *',
      [title, message, author, date, author_id, groups, groups_id, is_important, id]
    );
    return updatedBulletin;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBulletin,
  getBulletin,
  getBulletinsByGroupIds,
  createBulletin,
  deleteBulletin,
  updateBulletin,
};