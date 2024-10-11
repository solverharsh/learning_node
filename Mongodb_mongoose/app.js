const express = require("express");
const app = express();
const userModel = require("./model/user");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });
  // res.render("read", { users });
  res.redirect("/read");
});

app.get("/edit/:userid", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.userid });
  res.render("edit", { user });
  // res.redirect("/read");
});

app.post("/update/:userid", async (req, res) => {
  let { name, email, image } = req.body;
  let updateduser = await userModel.findOneAndUpdate(
    { _id: req.params.userid },
    {
      name: name,
      email: email,
      image: image,
    },
    { new: true }
  );
  res.redirect("/read");
});

// app.get("/create", async (req, res) => {
//   let createduser = await userModel.create({
//     name: "Prashant",
//     username: "prashant",
//     email: "prashant@gmail.com",
//   });
//   res.send(createduser);
// });

// app.get("/update", async (req, res) => {
//   let updateduser = await userModel.findOneAndUpdate(
//     // { _id: "67079c5767a2c0fc0a535f61" },
//     { username: "prashant" },
//     { name: "Prashant Singh Bhmihaar" },
//     { new: true }
//   );
//   res.send(updateduser);
//   // console.log(updateduser);

//   // res.send("updated");
// });

// app.get("/read", async (req, res) => {
//   let allUsers = await userModel.find();
//   // let oneUser = await userModel.findOne({ _id: "67079d2228d3dcfa671d195f" });
//   res.send(allUsers);
//   // res.send(oneUser);
// });

// app.get("/delete", async (req, res) => {
//   let users = await userModel.findOneAndDelete({ username: "prashant" });
//   res.send(users);
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log("express is running..");
});
