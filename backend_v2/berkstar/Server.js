
const express = require('express');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const userRoute = require("./routes/user");


const PORT = 8080;


app.use("/user", userRoute);


app.use(bodyParser.json());

//app.use("/user/", userRoute);

app.get("/", (req,res) =>{
    console.log("Test");
    res.send("asda");



})

app.listen(PORT, () => console.log(`API is running on http://localhost:${PORT}`));