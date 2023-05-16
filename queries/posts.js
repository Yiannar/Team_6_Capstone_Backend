const db = require('../db/dbConfig')

const getAllPosts = async ()=>{
    try{
        const allPosts = await db.any('SELECT * FROM posts');
        return allPosts
    } catch(error) {
        return error
    }
};

const getPost = async (id) => {
    try{
        const post = await db.one('SELECT * FROM posts WHERE id=$1', id);
        return post 
    } catch(error) {
        return error
    }
};

const createPost = async (post) =>{
    let {post,date} = post
    try{
        const newPost = await db.one(
            'INSERT INTO posts(post,date) VALUES ($1, $2) RETURNING *',
            [post, date ]
        ) 
        return newPost
    } catch(error){
        return error
    }
};

const deletePost = async (id) =>{
    try{
        const deletedPost = await db.one(
            'DELETE FROM posts WHERE id=$1 RETURNING *',
            id
        )
        return deletedPost
    } catch (error){
        return error
    }
};

const updatePost = async (id, post) =>{
    let {post, date}= post;
    try {
        const updatedPost = await db.many(
            'UPDATE post SET post=$1, date=$2 WHERE id=$3 RETURNING *'
            [post, date]
        )
        return updatePost
    } catch (error) {
        return error
    }
};

module.exports ={getAllPosts,getPost,createPost,deletePost,updatePost}