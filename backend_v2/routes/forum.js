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


router.get("/getposts", async (req, res) => {

    try {
        res.type('json')
        let auth = req.headers.authorization
        let threadId = req.query.tid

        let resultCheckAuth = await sql_user.checkAuth(auth)

        
        
        if (resultCheckAuth.length) {
            let resultListThreads = await sql_forum.listPosts(threadId)
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

module.exports = router;