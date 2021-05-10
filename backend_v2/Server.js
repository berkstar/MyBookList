
const express = require('express');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const userRoute = require("./routes/user");


const PORT = 8080;


app.use("/user", userRoute);


app.use(bodyParser.json());


app.get("/", (req,res) =>{
    console.log(req.query)

    console.log("Main Page Request");
    res.send("JUST NO");
})


// const options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "My Book List API with Swagger",
//         version: "0.1.0",
//         description:
//           "This is a simple CRUD API application made with Express and documented with Swagger",
//         license: {
//           name: "MIT",
//           url: "https://spdx.org/licenses/MIT.html",
//         },
//       },
//       servers: [
//         {
//           url: "http://localhost:3000/",
//         },
//       ],
//     },
//     apis: ["./routes/user.js"],
//   };
  
//   const specs = swaggerJsdoc(options);
//   app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(specs, {explorer: true})
//   );

app.listen(PORT, () => console.log(`API is running on http://localhost:${PORT}`));