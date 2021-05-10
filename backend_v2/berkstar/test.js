  
const express = require('express')
const app = express()
const PORT = 8080
const test = require("./test2")


app.use(express.json())

app.get("/test", (req,res) => {
    res.status(200)
    res.send({

        anan: "yooao"
    })
});

app.post("/test/:id", (req,res) => {

    const { id } = req.params
    const {anan} = req.body

    res.send({

        pusi: "yoo" + id + anan
    })

});

app.listen(PORT, () => {
    
    console.log('API is running on http://localhost:8080/user/login')
    test.name("asdad")


});

