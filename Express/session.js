// FORM HANDLING  , SESSION  AND COOKIES ;

const express = require("express");
const app = express();

// Form handling , session and cookies VVI ;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("middleware chalao !!");
  next();
});

app.use((req, res, next) => {
  console.log("middleware ek baar aur chalao !!");
  next();
});

// creating the routes :
app.get("/", (req, res) => {
  res.send("champion you are going great !!");
});

app.get("/profile", (req, res) => {
  res.send("champion you are going very great !!");
});

app.get("/about", (req, res, next) => {
  return next(new Error("Something went wrong..."));
  // res.send("This is the about Page !!");
});

// Default Express error Handler..
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke here !!");
});

const PORT = 3000;
app.listen(3000, () => {
  console.log("Express is running...........");
});
