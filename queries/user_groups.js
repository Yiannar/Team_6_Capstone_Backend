const db = require('../db/dbConfig');

const getAllUserGroups = async () => {
  console.log(db);
  try {
    const allUsers = await db.any('SELECT * FROM profile_groups');
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getAllGroupsSingleUser = async (profile_id) => {
  try {
    const singleUserGroups = await db.any(
      'SELECT groups.* FROM groups JOIN profile_groups ON groups.id = profile_groups.groups_id JOIN profile ON profile_groups.profile_id = profile.id WHERE profile.id=$1',
      profile_id
    );
    console.log('Hello There');
    return singleUserGroups;
  } catch (error) {
    return error;
  }
};
const getAllGroupsUserBulletin = async (profile_id) => {
  try {
    const groups = await db.any(
      'SELECT * FROM user_groups WHERE profile_id = $1',
      profile_id
    );
    return groups;
  } catch (error) {
    return error;
  }
};

const getAllGroups = async (groups_id) => {
  try {
    const singleUserGroups = await db.any(
      'SELECT profile.* FROM profile JOIN profile_groups ON profile.id = profile_groups.profile_id JOIN groups ON profile_groups.groups_id = groups.id WHERE groups.id = $1',
      groups_id
    );
    console.log('Hello There');
    return singleUserGroups;
  } catch (error) {
    return error;
  }
};



const countGroupMembers = async (groups_id) => {
  try {
    const count = await db.one(
      'SELECT COUNT(*) FROM profile_groups WHERE groups_id = $1',
      [groups_id]
    );
    console.log('Hello There');
    return count.count;
  } catch (error) {
    return error;
  }
};


const getSingleUserGroup = async (profile_id, groups_id) => {
  try {
    const singleUserGroup = await db.oneOrNone(
      'SELECT * FROM groups JOIN profile_groups ON groups.id = profile_groups.groups_id WHERE profile_groups.profile_id = $1 AND profile_groups.groups_id = $2',
      [profile_id, groups_id]
    );
    console.log('Hello There');
    return singleUserGroup;
  } catch (error) {
    return error;
  }
};



const joinAGroup = async (profile_id, groups_id) => {
  try {
    const groupJoined = await db.one(
      'INSERT INTO profile_groups(profile_id, groups_id) VALUES ($1, $2) RETURNING *',
      [profile_id, groups_id]
    );
    return groupJoined;
  } catch (error) {
    return error;
  }
};

const leaveAGroup = async (profile_id, groups_id) => {
  try {

    const leftGroup = await db.one(
      'DELETE FROM profile_groups WHERE profile_id = $1 AND groups_id=$2 RETURNING *',
      [profile_id, groups_id]
    );
    return leftGroup;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserGroups,
  getAllGroupsSingleUser,
  getAllGroupsUserBulletin,
  getAllGroups,
  countGroupMembers,
  getSingleUserGroup,
  joinAGroup,
  leaveAGroup,
};
