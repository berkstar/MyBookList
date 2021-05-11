const express = require("express");
const bodyParser = require("body-parser");
const sql = require("../db/user_sql");
const cors = require("cors");
const TokenGenerator = require('uuid-token-generator');


const router = express.Router();
router.use(bodyParser.json());
router.use(cors());
const tokgen = new TokenGenerator(128, TokenGenerator.BASE16);

const pool = require("../db_config"); // FOR TESTING

router.post("/register", async (req, res) => {
    try {
        res.type('json')
        let username = req.body.username
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        var date = new Date()
        date.setHours(date.getHours() + 1);

        //Succesfully Logged in.
        let resultAddUser = await sql.addUser(username, name, email, password);
        if (resultAddUser && resultAddUser.affectedRows) {
            let user_id = resultAddUser.insertId

            sql.addAuth(date, token = tokgen.generate())
            res.status(200);
            res.json({
                user_id: user_id,
                token: token
            });
        } else {// User entered mail or username that has a user.
            res.sendStatus(406);
        }


    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

router.post("/addfriend", async (req, res) => {
    
    try {
        res.type('json')
        let user_id = req.body.uid
        let friend_id = req.body.fid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuth(auth)
        
        if (resultCheckAuth.length){
            let resultAddFriend = await sql.addFriend(user_id, friend_id);
            if(resultAddFriend && resultAddFriend.affectedRows){
                res.sendStatus(200);
            }
            else { // If there are duplicates
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


router.get("/getusers", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuth(auth)
        

        if (resultCheckAuth.length) {
            let resultgetUsers = await sql.getUsers(user_id);
            res.status(200);
            res.json(resultgetUsers);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

router.get("/getfriends", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuth(auth)
        

        if (resultCheckAuth.length) {
            let resultGetFriends = await sql.getFriends(user_id);
            res.status(200);
            res.json(resultGetFriends);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})



router.post("/login", async (req, res) => {

    try {
        // res.type('json')
        // console.log(req.params);
        let username = req.body.username
        let password = req.body.password
        var date = new Date()
        date.setHours(date.getHours() + 1);

        let resultCheckUser = await sql.checkUser(username, password)
        //If user exists
        if (resultCheckUser.length) {
            let user_id = resultCheckUser[0].user_id
            sql.addAuth(date, token = tokgen.generate())
            res.status(200);
            res.json({
                user_id: user_id,
                token: token
            });
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

//<<<<<<<<<<<<<<<<<<<<<<<<<<<FOR TEST PURPOSES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.get("/test", async (req, res) => {

    try {
  
        test = () => {
            return new Promise((resolve, reject) => {
        
                pool.query("(SELECT * from User)", (err, results) => {
                    if (err) {
        
                        return reject(err);
                    }
                    return resolve(results);
                })
            })
        }
        let  resultTable = await test();
        
        console.log(bodyParser.json()(resultTable))
  
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
  
  })
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<FOR TEST PURPOSES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = router;