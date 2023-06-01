const db = require('../db/dbConfig');

// get All users
const getAllUsers = async () => {
  console.log(db);
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
    first_name,
    last_name,
    email,
    password,
    age,
    zipCode,
    pace,
    gender,
    verified,
    img,
    // groups_id,
  } = profile;
  try {
    const newUser = await db.one(
      'INSERT INTO profile (first_name,last_name,email,password,age,zipCode,pace,gender,verified,img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        first_name,
        last_name,
        email,
        password,
        age,
        zipCode,
        pace,
        gender,
        verified,
        img,
        // groups_id,
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
    first_name,
    last_name,
    email,
    password,
    age,
    zipCode,
    pace,
    gender,
    verified,
    img,
    // groups_id,
  } = profile;
  try {
    const updatedUser = await db.one(
      'UPDATE profile SET first_name=$1,last_name=$2,email=$3,password=$4,age=$5,zipCode=$6,pace=$7,gender=$8,verified=$9,img=$10 WHERE id=$11 RETURNING *',
      [
        first_name,
        last_name,
        email,
        password,
        age,
        zipCode,
        pace,
        gender,
        verified,
        img,
        // groups_id,
        id,
      ]
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllUsers, getUser, createUser, deleteUser, updateUser };
