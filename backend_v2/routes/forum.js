const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sql_user = require("../db/user_sql");
const sql_forum = require("../db/forum_sql");

const router = express.Router();
router.use(bodyParser.json());
router.use(cors());


router.get("/getallthreads", async (req, res) => {

    try {
        res.type('json')
        let auth = req.headers.authorization
        let resultCheckAuth = await sql_user.checkAuth(auth)
        
        let resultListThreads = await sql_forum.listThreads()
        if (resultCheckAuth.length) {
            res.status(200);
            res.json(resultListThreads);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

router.get("/listfollowedthreads", async (req, res) => {

    try {
        res.type('json')
        let auth = req.headers.authorization
        let user_id = req.query.uid

        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)

        
        if (resultCheckAuth.length) {
            let resultListThreads = await sql_forum.listFollowedThreads(user_id)
            res.status(200);
            res.json(resultListThreads);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})


router.post("/followthread", async (req, res) => {
    try {
        res.type('json')
        let user_id = req.body.uid
        let thread_id = req.body.tid

        let auth = req.headers.authorization
        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)
        
        if (resultCheckAuth.length){
            let resultFollowThread = await sql_forum.followThread(thread_id, user_id);
            if(resultFollowThread && resultFollowThread.affectedRows){
                res.sendStatus(200);
            }
            else { 
                res.sendStatus(401);
            }
        }
        else { // If there is an sql error.
            res.sendStatus(401);
        }
        
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})


router.delete("/unfollowthread", async (req, res) => {
    try {
        res.type('json')
        let user_id = req.body.uid
        let thread_id = req.body.tid

        let auth = req.headers.authorization
        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)
        
        if (resultCheckAuth.length){
            let resultUnfollowThread = await sql_forum.unFollowThread(thread_id, user_id);
            if(resultUnfollowThread && resultUnfollowThread.affectedRows){
                res.sendStatus(200);
            }
            else { 
                res.sendStatus(401);
            }
        }
        else { // If there is an sql error.
            res.sendStatus(401);
        }
        
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})

router.get("/getposts", async (req, res) => {

    try {
        res.type('json')
        let auth = req.headers.authorization
        let threadId = req.query.tid

        let resultCheckAuth = await sql_user.checkAuth(auth)

        
        
        if (resultCheckAuth.length) {
            let resultListPosts = await sql_forum.listPosts(threadId)
            res.status(200);
            res.json(resultListPosts);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})


router.get("/getuserposts", async (req, res) => {

    try {
        res.type('json')
        let auth = req.headers.authorization
        let user_id = req.query.uid

        let resultCheckAuth = await sql_user.checkAuth(auth)

        
        
        if (resultCheckAuth.length) {
            let resultListThreads = await sql_forum.listUserPosts(user_id)
            res.status(200);
            res.json(resultListThreads);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})


router.get("/getpost", async (req, res) => {

    try {
        res.type('json')
        let auth = req.headers.authorization
        let post_id = req.query.pid

        let resultCheckAuth = await sql_user.checkAuth(auth)

        if (resultCheckAuth.length) {
            let resultGetPost = await sql_forum.getPost(post_id)
            resultGetPost[0].comments = await sql_forum.getComments(post_id)
            res.status(200);
            res.json(resultGetPost);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

router.delete("/deletepost", async (req, res) => {
    try {
        res.type('json')
        let user_id = req.body.uid
        let post_id = req.body.pid

        let auth = req.headers.authorization
        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)
        
        if (resultCheckAuth.length){
            let resultUnfollowThread = await sql_forum.deletePost(post_id, user_id);
            if(resultUnfollowThread && resultUnfollowThread.affectedRows){
                res.sendStatus(200);
            }
            else { 
                res.sendStatus(401);
            }
        }
        else { // If there is an sql error.
            res.sendStatus(401);
        }
        
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})

router.put("/likepost", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let pid = req.body.pid
        let auth = req.headers.authorization

        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultLikePost = await sql_forum.likePost(pid);
            if (resultLikePost && resultLikePost.affectedRows) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(401);
            }
        }
        else { // If three are none uid of fid
            res.sendStatus(401);
        }
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})


router.put("/updatepost", async (req, res) => {

    try {
        res.type('json')


        let user_id = req.body.uid
        let pid = req.body.pid
        let title = req.body.title
        let context = req.body.context

        let auth = req.headers.authorization

        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultLikePost = await sql_forum.updatePost(user_id, pid,title,context);
            if (resultLikePost && resultLikePost.affectedRows) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(401);
            }
        }
        else {
            res.sendStatus(401);
        }
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})

router.post("/postpost", async (req, res) => {

    try {
        res.type('json')

        let user_id = req.body.uid
        let thread_id = req.body.tid
        let post_title = req.body.name
        let post_text = req.body.text

        let auth = req.headers.authorization
        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)
        
        if (resultCheckAuth.length){
            let resultAddPost = await sql_forum.addPost(thread_id, user_id, post_title, post_text);
            if(resultAddPost && resultAddPost.affectedRows){
                res.sendStatus(200);
            }
            else { 
                res.sendStatus(401);
            }
        }
        else { // If there is an sql error.
            res.sendStatus(401);
        }
        

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

router.get("/getpostcomment", async (req, res) => {

    try {
        res.type('json')
        let auth = req.headers.authorization
        let post_id = req.query.pid

        let resultCheckAuth = await sql_user.checkAuth(auth)

        if (resultCheckAuth.length) {
            let resultGetComments = await sql_forum.getComments(post_id)
            res.status(200);
            res.json(resultGetComments);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})


router.post("/addpostcomment", async (req, res) => {

    try {
        res.type('json')

        let user_id = req.body.uid
        let post_id = req.body.pid
        let comment_text = req.body.text

        let auth = req.headers.authorization
        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)
        
        if (resultCheckAuth.length){
            let resultAddComment = await sql_forum.addComment(user_id, comment_text);
            let commentId = resultAddComment.insertId

            if(resultAddComment && resultAddComment.affectedRows){

                await sql_forum.linkPostComment(commentId, post_id);

                res.sendStatus(200);
            }
            else { 
                res.sendStatus(401);
            }
        }
        else { // If there is an sql error.
            res.sendStatus(401);
        }
        

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

router.delete("/deletepostcomment", async (req, res) => {
    try {
        res.type('json')
        let user_id = req.body.uid
        let comment_id = req.body.cid

        let auth = req.headers.authorization
        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)
        
        if (resultCheckAuth.length){
            let resultDeleteComment = await sql_forum.deleteComment(user_id, comment_id);
            if(resultDeleteComment && resultDeleteComment.affectedRows){
                res.sendStatus(200);
            }
            else { 
                res.sendStatus(401);
            }
        }
        else { // If there is an sql error.
            res.sendStatus(401);
        }
        
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})


router.put("/updatepostcomment", async (req, res) => {

    try {
        res.type('json')


        let user_id = req.body.uid
        let comment_id = req.body.cid
        let context = req.body.text

        let auth = req.headers.authorization

        let resultCheckAuth = await sql_user.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultUpdateComment = await sql_forum.updatePostComment(user_id, comment_id,context);
            if (resultUpdateComment && resultUpdateComment.affectedRows) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(401);
            }
        }
        else {
            res.sendStatus(401);
        }
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})




module.exports = router;