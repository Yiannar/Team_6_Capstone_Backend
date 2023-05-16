const db = require('../db/dbconfig')

const getAllGroups = async ()=>{
    try{
        const allGroups = await db.any('SELECT * FROM groups');
        return allGroups
    } catch(error) {
        return error
    }
};

const getGroup = async (id) => {
    try{
        const group = await db.one('SELECT * FROM groups WHERE id=$1', id);
        return group 
    } catch(error) {
        return error
    }
};



module.exports ={getAllGroups, getGroup}