const db = require('../db/dbConfig')

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

const createGroup= async (groups) =>{
    let {title, about, img, location} = groups
    try{
        const newGroup = await db.one(
            'INSERT INTO groups(title, about, img, location) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, about, img, location]
        ) 
        return newGroup
    } catch(error){
        return error
    }
};

const deleteGroup = async (id) =>{
    try{
        const deletedGroup = await db.one(
            'DELETE FROM groups WHERE id=$1 RETURNING *',
            id
        )
        return deletedGroup
    } catch (error){
        return error
    }
};

const updateGroup = async (id, groups) =>{
  let {title, about, img, location} = groups
    try {
        const updatedGroup = await db.one(
            'UPDATE groups SET title=$1, about=$2, img=$3 location=$4 WHERE id=$5 RETURNING *',
            [title, about, img, location, id ]
        )
        return updatedGroup
    } catch (error) {
        return error
    }
};


module.exports ={getAllGroups, getGroup, createGroup, deleteGroup,updateGroup}