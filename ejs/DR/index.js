const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("chal raha h !!");
  res.render("index");
});

/* Dynamic Routing :
------------------------
    sabse phle browser par jao.
    url likhiye apna jo aapko chahiye and press Enter .
    Ab uss url route ko create karo .
    res bhejiye kuch v.
    ab usi url ko dynaic krna h to realize kro kon sa part dynamic h to uss route part ke phle colon (:) laga do;
    */
app.get("/profile/:username", (req, res) => {
  res.send(req.params.username);
});
app.get("/author/:username/:age", (req, res) => {
  res.send(`The age of ${req.params.username} is ${req.params.age} .`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Its ,working !!");
});
