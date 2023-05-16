const db = require('../db/dbconfig')

const getAllReplies = async ()=>{
    try{
        const allReplies = await db.any('SELECT * FROM replies');
        return allReplies
    } catch(error) {
        return error
    }
};

const getReply = async (id) => {
    try{
        const reply = await db.one('SELECT * FROM replies WHERE id=$1', id);
        return reply 
    } catch(error) {
        return error
    }
};

const createReplies = async (replies) =>{
    let {reply,date, post_id, author_id} = replies
    try{
        const newReplies = await db.one(
            'INSERT INTO replies(reply,date, post_id, author_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [reply,date, post_id, author_id]
        ) 
        return newReplies
    } catch(error){
        return error
    }
};

const deleteReply = async (id) =>{
    try{
        const deletedReply = await db.one(
            'DELETE FROM replies WHERE id=$1 RETURNING *',
            id
        )
        return deletedReply
    } catch (error){
        return error
    }
};

const updateReplies = async (id, replies) =>{
    // let {reply, date, post_id, author_id}= replies;
    try {
        const updatedReply = await db.one(
            'UPDATE replies SET reply=$1, date=$2, post_id=$3, author_id=$4 WHERE id=$5 RETURNING *'
            [
            replies.reply, 
            replies.date,
            replies.post_id, 
            replies.author_id,
            id
            ]
        )
        return updatedReply
    } catch (error) {
        return error
    }
};

module.exports ={getAllReplies,getReply,createReplies,deleteReply,updateReplies}