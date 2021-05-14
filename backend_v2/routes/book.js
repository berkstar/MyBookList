const express = require("express");
const bodyParser = require("body-parser");
const user_sql = require("../db/user_sql");
const book_sql = require("../db/book_sql");
const cors = require("cors");
const superkey = "superadmin"

const router = express.Router();
router.use(bodyParser.json());
router.use(cors());






router.post("/addbook", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid

        let title = req.body.title
        let description = req.body.description
        let genre = req.body.genre
        let year = req.body.year
        let pages = req.body.pages

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultAddBook = await book_sql.addBook(title, description, genre, year, pages);
            if (resultAddBook && resultAddBook.affectedRows) {
                book_id = resultAddBook.insertId
                await book_sql.linkPublisher(user_id, book_id);

                res.sendStatus(200);
            }
            else { // If there are duplicates
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

router.put("/updatebook", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let book_id = req.body.book_id
        let title = req.body.title
        let description = req.body.description
        let genre = req.body.genre
        let year = req.body.year
        let pages = req.body.pages

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultUpdateBook = await book_sql.updateBook(book_id,title, description, genre, year, pages, user_id);
            if (resultUpdateBook && resultUpdateBook.affectedRows) {
                res.sendStatus(200);
            }
            else { // If there are duplicates
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


router.get("/getmybooks", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultGetBook = await book_sql.getMyBooks(user_id);
            if (resultGetBook && resultGetBook.length) {
                res.json(resultGetBook);
                res.status(200);
            }
            else { // If there are duplicates
                
                res.status(200);
                res.json([])
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


router.delete("/removebook", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let book_id = req.body.book_id

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultCheckBook = await book_sql.checkBook(user_id, book_id);
            if (resultCheckBook.length) {
                await book_sql.delBook(book_id);
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