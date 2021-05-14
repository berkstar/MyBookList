
const express = require('express');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const app = express();
const userRoute = require("./routes/user");
const forumRoute = require("./routes/forum");
const bookRoute = require("./routes/book");
const systemRoute = require("./routes/system");
const swaggerDocument = YAML.load('./swagger.yaml');

const PORT = 8080;

app.use("/user", userRoute);
app.use("/forum", forumRoute);
app.use("/book", bookRoute);
app.use("/system", systemRoute);

app.use(bodyParser.json());


//For parse errors.
app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    res.sendStatus(500);
    console.log(error)
  }
});



app.get("/", (req, res) => {
  console.log(req.query)

  console.log("Main Page Request");
  res.send("JUST NO");
})



app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

app.listen(PORT, () => console.log(`API is running on http://localhost:${PORT}`));