const db = require('../db/dbconfig')

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

const createPost = async (singlePost) =>{
    let {post, date, author_id, groups_id} = singlePost
    try{
        const newPost = await db.one(
            'INSERT INTO posts(post,date, author_id, groups_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [post, date, author_id, groups_id  ]
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
    try {
        const updatedPost = await db.many(
            'UPDATE post SET post=$1 WHERE id=$2 RETURNING *',
            [post, id]
        )
        return updatedPost
    } catch (error) {
        return error
    }
};

module.exports ={getAllPosts,getPost,createPost,deletePost,updatePost}