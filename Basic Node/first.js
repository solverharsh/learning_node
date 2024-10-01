const fs = require("fs");
// console.log("first javascript code using nodeJs");

fs.writeFile("output.txt", "writing File", (err) => {
  if (err) console.log("Error Ocurred");
  else console.log("File written Successully");
});
