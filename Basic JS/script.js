// Fundamentals of Javascript ;
// Arrays [forEach,map,filter,find ,indexOf] and objects ;
// functions return ;
// async javascript ;

// console.log("Welcome to the revision of JAVASCRIPT");
// let printName = () => console.log("My name is Harsh !!");

// const arr = [1, 2, 3, "hello", printName];

// arr.forEach((val) => {
//   console.log(val);
// });

// ____________________OUTPUT___________________;
// Welcome to the revision of JAVASCRIPT
// 1
// 2
// 3
// hello
// [Function: printName]

// let nums = [1, 2, 3, 4, 5];

// let ans = nums.map((val) => {
//   return val * val;
// });

// console.log(ans);

// PS C:\Users\Harsh\Desktop\nodeJS\Basic JS> node script.js
// [ 1, 4, 9, 16, 25 ]

// let numbers = [1, 3, -7, -5, 9, 8, 9, -10];

// let ans = numbers.filter((val) => {
//   if (val > 0) return true;
// });
// console.log(ans);

// let ans = numbers.find((val) => {
//   if (val === 9) return val;
// });

// console.log(ans);
// console.log(numbers.indexOf(15)); // return index if value is present else return -1;

// Objects :

// let details = {
//   name: "Harsh",
//   age: 25,
//   income: 25000,
// };

// console.log(details.name);
// console.log(details.age);
// console.log(details["income"]);

// Object.freeze(details);
// details.name = "Prashant";
// console.log(details["name"]);

// function abcd(a, b, c, d) {
//   // the length of function is the number of parameters;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// }

// console.log(abcd.length);
// console.log(typeof abcd);

// Line by line code chale isse synchronous kahte hein .
// jo bhi code async nature ka ho , usey side stack mein bhej do and agle code ko chalao jo v sync nature ka ho , jab v sara sync code chal jaaye, tab check kro ki async code complete hua ya nhi and agar wo complete ho gya ho to usey main stack mein laao and chala do .
// Jab main stack empty ho jaaye to side stack ki cheezon ko main stack mein laao and usey run kar do .

async function abcd() {
  let blob = await fetch("url");
  let ans = await blob.json();
  console.log(ans);
}

abcd();
