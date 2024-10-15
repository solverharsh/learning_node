const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});
app.use("/", (req, res, next) => {
  console.log("Second dummy middleware", req.url, req.method);
  next();
});

// app.use("/", (req, res, next) => {
//   console.log("Third Middleware");
//   res.send("Welcome to learning Node.JS", req.url, req.method);
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET ", req.url, req.method);
  res.send("Hello, How r u doinnn..");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handlng contact-us for GET ", req.url, req.method);
  res.send(`
    <h1>Enter your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" placeholder="Enter your name" name="name"/>
      <input type="email" placeholder="Enter your email" name="email"/>
      <input type="Submit" />
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling contact-us for POST ", req.url, req.method);
  res.send("We will contact you shortly..");
  
});
app.listen(3000);
