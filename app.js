const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "/public");
app.use(express.static(publicPath));

app.listen(3031, () => {
  console.log("El servidor esta corriendo en http://localhost:3031");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
