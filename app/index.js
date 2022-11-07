const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  // console.log(req);
  res.send(`Redirected to login`);
});

app.get("/users", (req, res) => {
  // console.log(req);
  res.send(`Users page`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
