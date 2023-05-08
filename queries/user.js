const db = require('../db/dbConfig');

const getAllUsers = async () => {
  try {
    const allUsers = await db.any('SELECT * FROM profile');
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (id) => {
  try {
    const user = await db.one('SELECT * FROM profile WHERE id=$1', id);
    return user;
  } catch (error) {
    return error;
  }
};

const createUser = async (profile) => {
  let {
    user_id,
    first_name,
    last_name,
    email,
    password,
    age,
    location,
    pace,
    gender,
    verified,
  } = profile;
  try {
    const newUser = await db.one(
      'INSERT INTO profile (user_id,first_name,last_name,email,password,age,location,pace,gender,verified) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        user_id,
        first_name,
        last_name,
        email,
        password,
        age,
        location,
        pace,
        gender,
        verified,
      ]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      'DELETE FROM profile WHERE id = $1 RETURNING *',
      id
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, profile) => {
  let {
    user_id,
    first_name,
    last_name,
    email,
    password,
    age,
    location,
    pace,
    gender,
    verified,
  } = profile;
  try {
    const updatedUser = await db.one(
      'UPDATE profile SET first_name=$1,last_name=$2,email=$3,password=$4,age=$5,location=$6,pace=$7,gender=$8,verified=$9 WHERE user_id=$10 RETURNING *',
      [
        first_name,
        last_name,
        email,
        password,
        age,
        location,
        pace,
        gender,
        verified,
        user_id,
      ]
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllUsers, getUser, createUser, deleteUser, updateUser };
