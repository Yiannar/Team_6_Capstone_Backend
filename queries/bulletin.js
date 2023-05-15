const db = require('../db/dbConfig');

const getBulletin = async (bulletin_id) => {
  console.log(db);
  try {
    const bulletin = await db.oneOrNone(
      'SELECT * FROM groups WHERE bulletin_id =$1',
      bulletin_id
    );
    return bulletin;
  } catch (error) {
    return error;
  }
};

const createBulletin = async (bulletin) => {
  let { bulletin_id, title, message, author, date } = bulletin;
  try {
    const newBulletin = await db.one(
      'INSERT INTO groups (bulletin_id,title,message,author,group) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [bulletin_id, title, message, author, date]
    );
    return newBulletin;
  } catch (error) {
    return error;
  }
};
const deleteBulletin = async (bulletin_id) => {
  try {
    const deletedBulletin = await db.one(
      'DELETE FROM groups WHERE bulletin_id = $1 RETURNING *',
      bulletin_id
    );
    return deletedBulletin;
  } catch (error) {
    return error;
  }
};

const updateBulletin = async (bulletin_id, bulletin) => {
  let { title, message, author, date } = bulletin;
  try {
    const updatedBulletin = await db.one(
      'UPDATE bulletin SET title=$1,message=$2,author=$3,date=$4 WHERE bulletin_id=$5 RETURNING *',
      [title, message, author, date, bulletin_id]
    );
    return updatedBulletin;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getBulletin,
  createBulletin,
  deleteBulletin,
  updateBulletin,
};
