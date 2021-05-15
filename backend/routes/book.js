const express = require("express");
const bodyParser = require("body-parser");
const user_sql = require("../db/user_sql");
const book_sql = require("../db/book_sql");
const cors = require("cors");
const superkey = "superadmin"

const router = express.Router();
router.use(bodyParser.json());
router.use(cors());





router.post("/postbooklist", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let list_name = req.body.list_name
        let book_ids = req.body.book_ids

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthType(auth, user_id)


        if (resultCheckAuth.length) {
            let resultCreateBookList= await book_sql.createBookList(user_id, list_name);
            let bl_id = resultCreateBookList.insertId;
            book_ids.forEach(book_id => {
                 book_sql.addBookToList(book_id, bl_id);
            });
            let resultBookCount = await book_sql.updateBookListCount(bl_id, book_ids.length);
            if (resultBookCount && resultBookCount.affectedRows) {
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




router.post("/addreview", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let book_id = req.body.book_id
        let rating = req.body.rating
        let review = req.body.review

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultAddReview = await book_sql.addBookReview(user_id, book_id,rating,review);
            if (resultAddReview && resultAddReview.affectedRows) {
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


        let resultCheckAuth = await user_sql.checkAuthType(auth,user_id)


        if (resultCheckAuth.length) {
            let resultIncomingRecom = await book_sql.getMyProgressBooks(user_id);
            if (resultIncomingRecom && resultIncomingRecom.length) {
                res.json(resultIncomingRecom);
                res.status(200);
            }
            else { 
                
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


router.post("/addprogress", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let book_id = req.body.book_id
        let page_num = req.body.page_num

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {

            await book_sql.deleteProgressUserId(book_id, user_id);
            let resultAddProgress = await book_sql.addProgress(page_num, book_id);
            if (resultAddProgress && resultAddProgress.affectedRows) {
                pro_id = resultAddProgress.insertId
                await book_sql.addProgressMark(user_id, book_id, pro_id);
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


router.delete("/deleteprogress", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let pro_id = req.body.pro_id

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultCheckBook = await book_sql.deleteProgress(user_id, pro_id);
            if (resultCheckBook.affectedRows) {
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


router.put("/editprogress", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let pro_id = req.body.pro_id
        let page_num = req.body.page_num

        let auth = req.headers.authorization
        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultUpdateProgress = await book_sql.updateProgress(page_num,pro_id,user_id);
            if (resultUpdateProgress && resultUpdateProgress.affectedRows) {
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

router.post("/recommend", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let book_id = req.body.book_id
        let friend_id = req.body.friend_id

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthType(auth, user_id)

        if (resultCheckAuth.length) {
            let resultAddRecommend = await book_sql.addRecommend(user_id, book_id, friend_id);
            if (resultAddRecommend && resultAddRecommend.affectedRows) {
                
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

router.delete("/deleterecommend", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.uid
        let book_id = req.body.book_id
        let friend_id = req.body.friend_id

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultDeleteRecom = await book_sql.deleteRecommend(user_id, book_id, friend_id);
            if (resultDeleteRecom.affectedRows) {
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


router.get("/incomingrecommends", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid
        let auth = req.headers.authorization


        let resultCheckAuth = await user_sql.checkAuthType(auth,user_id)


        if (resultCheckAuth.length) {
            let resultIncomingRecom = await book_sql.getIncomingRecommends(user_id);
            if (resultIncomingRecom && resultIncomingRecom.length) {
                res.json(resultIncomingRecom);
                res.status(200);
            }
            else { 
                
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

router.get("/outgoingrecommends", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.query.uid
        let auth = req.headers.authorization


        let resultCheckAuth = await user_sql.checkAuthType(auth,user_id)


        if (resultCheckAuth.length) {
            let resultOutgoingRecommends = await book_sql.getOutgoingRecommends(user_id);
            if (resultOutgoingRecommends && resultOutgoingRecommends.length) {
                res.json(resultOutgoingRecommends);
                res.status(200);
            }
            else { 
                
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

router.post("/publish", async (req, res) => {

    try {
        res.type('json')
        let user_id = req.body.aid

        let title = req.body.b_name
        let description = req.body.desc
        let pages = req.body.page_num
        let genre = req.body.genre
        let year = req.body.year

        let auth = req.headers.authorization

        let resultCheckAuth = await user_sql.checkAuthAuthor(auth, user_id)

        if (resultCheckAuth.length) {
            let resultAddBook =  book_sql.addBook(title, description, genre, year, pages);
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


router.get("/searchbook", async (req, res) => {

    try {
        res.type('json')
        let keyword = req.query.keyword
        let auth = req.headers.authorization
        console.log("IN=> " + keyword);
        if(keyword)
            keyword = "%" + keyword.trim().replace(/\s/g, "%") + "%";
        else
            keyword = "%"
        let resultCheckAuth = await user_sql.checkAuth(auth)
        
        console.log("OUT=> " + keyword);

        if (resultCheckAuth.length) {
            let resultGetBook = await book_sql.searchBookTitle(keyword);
            if (resultGetBook && resultGetBook.length) {
                res.json(resultGetBook);
                res.status(200);
            }
            else { 
                
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

router.get("/getmyownbooks", async (req, res) => {

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
            else { 
                
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