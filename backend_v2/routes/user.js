const express = require("express");
const bodyParser = require("body-parser");
const sql = require("../db/user_sql");
const TokenGenerator = require('uuid-token-generator');


const router = express.Router();
router.use(bodyParser.json());

const tokgen = new TokenGenerator(128, TokenGenerator.BASE16);



router.post("/register", async (req, res) => {

    try {
        let username = req.body.username
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        var date = new Date()
        date.setHours(date.getHours() + 1);
        
        //Succesfully Logged in.
        let resultAddUser = await sql.addUser(username, name, email, password);
        if (resultAddUser && resultAddUser.affectedRows) {

            sql.addAuth(date, token = tokgen.generate())
            res.status(200);
            res.json({
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





router.post("/login", async (req, res) => {

    try {
        let username = req.body.username
        let password = req.body.password
        var date = new Date()
        date.setHours(date.getHours() + 1);

        let resultCheckUser = await sql.checkUser(username, password)
        //If user exists
        if (resultCheckUser.length) {
            sql.addAuth(date, token = tokgen.generate())
            res.status(200);
            res.json({
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


router.get("/logintest", async (req, res) => {

    try {
        let username = req.body.username
        let password = req.body.password

        var date = new Date()
        date.setHours(date.getHours() + 1);
        let result = await sql.addAuth(date, token = tokgen.generate());
        //res.status(500);
        //res.json(result.length);
        res.json({
            token: token,
            rows: result.affectedRows,
            date: date

        });
        console.log("AUTH Added=>" + result.affectedRows)

    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }

})

module.exports = router;