/*
  Express.js Framework.
  Introduction to Express.js : 
  ---> Express Js is an npm package.
  ---> It is a framework.
  ---> Manages everything from receiving the request and giving the response.

  Setting up a basic Express application :
  Routes ke pahle middleware lagta h ....
  --->Jab v server request accept krta hai waha se route ke beech phuchne tak agar aap uss request ko beech mein rokte ho and kuchh perform krte ho to ye element middleware kehlaata hai....!!
  Routing .
  Middleware .
  Request and response handling :
  --> Frontend -->Backend -->Frontend ;
  Error handling : 
*/

// Setting up a basic Express application :

const express = require("express");
const app = express();

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
