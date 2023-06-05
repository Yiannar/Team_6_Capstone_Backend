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
    // const singleUserGroups = db.any('SELECT * FROM profile WHERE profile_id = $1', profile_id);
    // const singleGroups = await db.any(
    //   'SELECT groups.id, groups.title, groups.about FROM groups JOIN profile_groups ON groups.id = profile_groups.group_id JOIN profile ON profile_groups.profile_id = profile.id WHERE profile.id = $1',
    //   profile_id
    // );
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


// {need to work on the leave group, everything else works}

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
  countGroupMembers,
  getSingleUserGroup,
  joinAGroup,
  leaveAGroup,
};
