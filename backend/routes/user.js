const express = require("express");
const bodyParser = require("body-parser");
const sql = require("../db/user_sql");
const cors = require("cors");
const TokenGenerator = require('uuid-token-generator');
const superkey = "superadmin"


const router = express.Router();
router.use(bodyParser.json());
router.use(cors());
const tokgen = new TokenGenerator(128, TokenGenerator.BASE16);


router.post("/register", async (req, res) => {
    try {
        res.type('json')
        let username = req.body.username
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        let type = req.body.type
        // var date = new Date()
        // date.setHours(date.getHours() + 1);
        let super_auth = req.headers.super_auth


        let resultAddUser;
        if ((super_auth == undefined && type != 2) || super_auth == superkey)
            resultAddUser = await sql.addUser(username, name, email, password);

        if (resultAddUser && resultAddUser.affectedRows) {
            let user_id = resultAddUser.insertId


            if (type == 1) //Author
                await sql.addAuthor(user_id);
            else if (type == 2 && super_auth == superkey) //Librarian 
                await sql.addLibrarian(user_id);

            sql.addAuth(token = tokgen.generate(), user_id)
            res.status(200);
            res.json({
                user_id: user_id,
                token: token,
                type: type
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

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultAddFriend = await sql.addFriend(user_id, friend_id);
            if (resultAddFriend && resultAddFriend.affectedRows) {
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

router.delete("/removefriend", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let friend_id = req.body.fid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultAddFriend = await sql.delFriend(user_id, friend_id);
            if (resultAddFriend && resultAddFriend.affectedRows) {
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

router.put("/setbio", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let biography = req.body.bio

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultSetBiography = await sql.setBiography(user_id, biography);
            if (resultSetBiography && resultSetBiography.affectedRows) {
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


router.put("/setemail", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let email = req.body.email

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultSetEmail = await sql.setEmail(user_id, email);
            if (resultSetEmail && resultSetEmail.affectedRows) {
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

router.put("/setname", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let name = req.body.name

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultSetName = await sql.setName(user_id, name);
            if (resultSetName && resultSetName.affectedRows) {
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

router.put("/setpassword", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let password = req.body.password

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultSetPassword = await sql.setPassword(user_id, password);
            if (resultSetPassword && resultSetPassword.affectedRows) {
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

router.put("/setusername", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let username = req.body.username

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultSetUsername = await sql.setUsername(user_id, username);
            if (resultSetUsername && resultSetUsername.affectedRows) {
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

router.get("/getusers", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuth(auth)


        if (resultCheckAuth.length) {
            let resultgetUsers = await sql.getNonFriends(user_id);
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

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)


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

router.get("/incomingrequests", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid
        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)


        if (resultCheckAuth.length) {
            let resultIncomingRequests = await sql.getIncomingRequests(user_id);
            res.status(200);

            resultIncomingRequests.forEach(item => {
                item.accepted = 0;
            });

            console.log(resultIncomingRequests)
            res.json(resultIncomingRequests);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

router.get("/outgoingrequests", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid
        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)


        if (resultCheckAuth.length) {
            let resultIncomingRequests = await sql.getOutgoingRequests(user_id);
            res.status(200);

            resultIncomingRequests.forEach(item => {
                item.accepted = 0;
            });

            console.log(resultIncomingRequests)
            res.json(resultIncomingRequests);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})


router.put("/requestresponse", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let friend_id = req.body.sender_id
        let response = req.body.response

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultSetRequest;
            if (response) {

                resultSetRequest = await sql.acceptRequest(user_id, friend_id);
            }
            else{
                resultSetRequest = await sql.delFriend(user_id, friend_id);
            }

            if (resultSetRequest && resultSetRequest.affectedRows) {
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



router.post("/login", async (req, res) => {

    try {
        // res.type('json')
        // console.log(req.params);
        let username = req.body.username
        let password = req.body.password
        // var date = new Date()
        // date.setHours(date.getHours() + 1);

        let resultCheckUser = await sql.loginUser(username, password)
        //If user exists
        if (resultCheckUser.length) {
            let user_id = resultCheckUser[0].user_id
            await sql.addAuth(token = tokgen.generate(), user_id)
            let resultCheckUserType = await sql.checkUserType(user_id)

            let type = resultCheckUserType[0].type


            res.status(200);
            res.json({
                user_id: user_id,
                token: token,
                type: type
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




router.get("/getuser", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthType(auth, user_id)
        if (resultCheckAuth.length) {
            let resultGetUserInfo = await sql.getUserInfo(user_id);
            res.status(200);
            res.json(resultGetUserInfo[0]);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }


})



router.get("/getunverifiedauthors", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthLibrarian(auth, user_id)
        if (resultCheckAuth.length) {
            let resultUnverifiedAuthors = await sql.getUnverifiedAuthors(user_id);
            res.status(200);
            res.json(resultUnverifiedAuthors);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})


router.get("/getverifiedauthors", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthLibrarian(auth, user_id)
        if (resultCheckAuth.length) {
            let resultverifiedAuthors = await sql.getVerifiedAuthors(user_id);
            res.status(200);
            res.json(resultverifiedAuthors);
        }
        else {
            res.sendStatus(401);
        }

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
})

router.put("/verifyauthor", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let author_id = req.body.author_id

        let auth = req.headers.authorization

        let resultCheckAuth = await sql.checkAuthLibrarian(auth, user_id)

        if (resultCheckAuth.length) {
            let resultVerifyAuthor= await sql.verifyAuthor(user_id,author_id);
            if (resultVerifyAuthor && resultVerifyAuthor.affectedRows) {
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


module.exports = router;