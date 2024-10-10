const express = require("express");
const app = express();
const userModel = require("./userModel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Prashant",
    username: "prashant",
    email: "prashant@gmail.com",
  });
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    // { _id: "67079c5767a2c0fc0a535f61" },
    { username: "prashant" },
    { name: "Prashant Singh Bhmihaar" },
    { new: true }
  );
  res.send(updateduser);
  // console.log(updateduser);

  // res.send("updated");
});

app.get("/read", async (req, res) => {
  let allUsers = await userModel.find();
  // let oneUser = await userModel.findOne({ _id: "67079d2228d3dcfa671d195f" });
  res.send(allUsers);
  // res.send(oneUser);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "prashant" });
  res.send(users);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("express is running..");
});
