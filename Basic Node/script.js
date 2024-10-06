/*
Node.js Basic 
  -Javacsript runtime environment.
Introduction to Node.js and npm.
Working with Modules 
File System operations 
Understanding HTTP Modules
*/

// const { builtinModules } = require("module");

const fs = require("fs");

/*
fs.writeFile("output.txt", "Hey How are You ??", (err) => {
  if (err) console.log("Error Ocurred");
  else console.log("File written Successully");
});

// append more text in the file.
fs.appendFile("output.txt", "Main to achha hun aap batao", (err) => {
  if (err) console.log("Error ocurred Please debug your code !! ");
  else console.log("text appended successfully !!");
});

fs.rename("output.txt", "hello.txt", (err) => {
  if (err) console.log(err);
  else console.log("File renamed successfully !!");
});
fs.copyFile("hello.txt", "./copy/copy.txt", (err) => {
  if (err) console.log(err.message);
  else console.log("File copied successfully to copy folder !!");
});
*/

// To test we have created a folder  name test inside Basic Node folder which got deleted after running the fs.rm function ;
// fs.rm("./test", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   else console.log("Folder removed !!");
// });

const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello world");
// });

// server.listen(3000, () => {
//   console.log("server is running !!");
// });
