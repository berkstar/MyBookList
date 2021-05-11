const express = require("express");
const bodyParser = require("body-parser");
const sql_user = require("../db/user_sql");
const sql_forum = require("../db/forum_sql");

const router = express.Router();
router.use(bodyParser.json());


router.get("/getallthreads", async (req, res) => {

    try {
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
        let auth = req.headers.authorization
        let threadId = req.query.tid

        let resultCheckAuth = await sql_user.checkAuth(auth)

        
        let resultListThreads = await sql_forum.listPosts(threadId)
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

module.exports = router;