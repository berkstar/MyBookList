const express = require("express");

const router = express.Router();

router.get("/", (req,res) =>{
    console.log("Userda");
    res.send("Userda");

})

module.exports = router;