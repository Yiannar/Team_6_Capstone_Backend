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

const getAllGroupsSingleUser = async (profileID) => {
  try {
    // const singleUserGroups = db.any('SELECT * FROM profile WHERE profile_id = $1', profileID);
    const singleGroups = await db.any(
      'SELECT groups.id, groups.title, groups.about FROM groups JOIN profile_groups ON groups.id = profile_groups.group_id JOIN users ON profile_groups.profile_id = profile.id WHERE profile.id = $1',
      profileID
    );
    return singleGroups;
  } catch (error) {
    return error;
  }
};

const joinAGroup = async (profileID, groupID) => {
  try {
    const groupJoined = await db.one(
      'INSERT INTO profile_groups(profileID, groupID) VALUES ($1, $2) RETURNING *',
      (profileID, groupID)
    );
    return groupJoined;
  } catch (error) {
    return error;
  }
};
const leaveAGroup = async (profileID, groupID) => {
  try {
    const leftGroup = await db.one(
      'DELETE FROM profile_groups WHERE profileID = $1 AND groupID=$2 RETURNING *',
      (profileID, groupID)
    );
    return leftGroup;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserGroups,
  getAllGroupsSingleUser,
  joinAGroup,
  leaveAGroup,
};
