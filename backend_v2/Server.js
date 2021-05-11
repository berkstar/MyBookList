
const express = require('express');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const app = express();
const userRoute = require("./routes/user");
const forumRoute = require("./routes/forum");
const systemRoute = require("./routes/system");
const swaggerDocument = YAML.load('./swagger.yaml');

const PORT = 8080;

app.use("/user", userRoute);
app.use("/forum", forumRoute);
app.use("/system", systemRoute);

app.use(bodyParser.json());


app.get("/", (req,res) =>{
    console.log(req.query)

    console.log("Main Page Request");
    res.send("JUST NO");
})




  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {explorer: true})
  );

app.listen(PORT, () => console.log(`API is running on http://localhost:${PORT}`));