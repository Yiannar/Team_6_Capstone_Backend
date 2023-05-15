const db = require('../db/dbConfig');

const getAllRatings = async () => {
  console.log(db);
  try {
    const allRatings = await db.any('SELECT * FROM ratings');
    return allRatings;
  } catch (error) {
    return error;
  }
};

const getRating = async (rating_id) => {
  try {
    const rating = await db.one(
      'SELECT * FROM ratings WHERE rating_id=$1',
      rating_id
    );
    return rating;
  } catch (error) {
    return error;
  }
};

const createRating = async (rating_id) => {
  let { rating_id, route_name, profile_id, rating_value, zipCode } = rating;
  try {
    const newRating = await db.one(
      'INSERT INTO ratings (rating_id, route_name, profile_id, rating_value, zipCode) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [rating_id, route_name, profile_id, rating_value, zipCode]
    );
    return newRating;
  } catch (error) {
    return error;
  }
};

const deleteRating = async (rating_id) => {
  try {
    const deletedRating = await db.one(
      'DELETE FROM ratings WHERE rating_id = $1 RETURNING *',
      rating_id
    );
    return deletedRating;
  } catch (error) {
    return error;
  }
};

const updateRating = async (rating_id, rating) => {
  let { rating_id, route_name, profile_id, rating_value, zipCode } = rating;

  try {
    const updatedRating = await db.one(
      'UPDATE ratings SET rating_id=$1,route=$2,profile_id=$3,rating_value=$4, zipCode= $5 WHERE rating_id=6 RETURNING *',
      [rating_id, route_name, profile_id, rating_value, zipCode]
    );
    return updatedRating;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRatings,
  getRating,
  createRating,
  deleteRating,
  updateRating,
};
