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

const createGroup= async (groups) =>{
    let {title, about, img} = groups
    try{
        const newGroup = await db.one(
            'INSERT INTO groups(title, about, img) VALUES ($1, $2, $3) RETURNING *',
            [title, about, img]
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
  let {title, about, img} = groups
    try {
        const updatedGroup = await db.one(
            'UPDATE groups SET title=$1, about=$2, img=$3 WHERE id=$4 RETURNING *',
            [title, about, img, id ]
        )
        return updatedGroup
    } catch (error) {
        return error
    }
};


module.exports ={getAllGroups, getGroup, createGroup, deleteGroup,updateGroup}