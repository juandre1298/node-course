const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PUERTO = 3000;

app.get("/", (req, res) => {
  res.send("hola mundo!");
});

app.listen(PUERTO, () => {
  console.log("servidor arrancado!");
});
