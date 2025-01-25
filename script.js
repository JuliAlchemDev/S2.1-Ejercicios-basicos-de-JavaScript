/////////////////////////////////////////////////////////////////
// // Arrow Function
/////////////////////////////////////////////////////////////////
// // N1_ex1
// const add = (a, b) => {
//   return a + b;
// };
// // N1_ex2
// const randomNumber = () => {
//   return Math.floor(Math.random() * 101);
// };
// // N1_ex3
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet = () => {
//     console.log(`Hola, ${this.name}`);
//   };
// }
// // N2_ex4
// const printNumbers = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };
// // printNumbers([1,2,3])
// // N3_ex5
// const mgs = () => {
//   setTimeout(() => {
//     console.log("Hello World!");
//   }, 3000);
// };
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// //  Ternary Operator
/////////////////////////////////////////////////////////////////
// // N1_ex1
// const canDrive = (age) => {
//   return age >= 18 ? "You already can Drive!" : "Sorry, you can't...";
// };
// // N1_ex2
// const largerNumber = (num1, num2) => {
//   return num1 > num2
//     ? "The first number is larger than second"
//     : "The second number is larger than first";
// };
// // N2_ex3
// const typeOfNumber = (num) => {
//   return num == 0
//     ? "It's zero!"
//     : num < 0
//     ? "It's negative!"
//     : "It's positive!";
// };
// const largestNumber = (a, b, c) => {
//   return a > b && a > c
//     ? `${a} ${b} ${c}... The first number is the largest`
//     : b > a && b > c
//     ? `${a} ${b} ${c}... The second number is the largest`
//     : `${a} ${b} ${c}... The third number is the largest!`;
// };
// // N3_ex4
// const evenOrOdd = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] % 2 == 0
//       ? console.log(`${numbers[i]} is even`)
//       : console.log(`${numbers[i]} is odd`);
//   }
// };
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// // Callbacks
/////////////////////////////////////////////////////////////////
// // N1_ex1
// const procesar = (num, callback) => {
//   return callback(num);
// };
// const getNum = (num) => {
//   console.log("Your number is " + num);
// };
// procesar(9, getNum);
// // N1_ex2
// const calculator = (num1, num2, callback) => {
//   return callback(num1, num2);
// };
// const calcSum = (num1, num2) => {
//   console.log(num1 + num2);
// };
// calculator(2, 4, calcSum);
// // N2_ex3
// const waitAndGreet = (name, callback) => {
//   setTimeout(() => {
//     return callback(name);
//   }, 2000);
// };
// const sayHiTo = (name) => {
//   console.log(`Hi ${name}`);
// };
// waitAndGreet("Tom", sayHiTo);
// // N2_ex4
// const processElements = (nums, plusOne) => {
//   nums.forEach((num) => {
//     plusOne(num);
//   });
// };
// const plusOne = (num) => {
//   console.log(num + 1);
// };
// processElements([1, 2, 3], plusOne);
// // N3_ex5
// const processString = (str, toAllCaps) => {
//   return toAllCaps(str);
// };
// const toAllCaps = (str) => {
//   console.log(str.toUpperCase());
// };
// processString("Hello World!", toAllCaps);
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// // Rest & Spread Operators
/////////////////////////////////////////////////////////////////
// // N1_ex1
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9];
// const arr3 = [...arr1, ...arr2];
// // N1_ex2
// const sum = (...nums) => {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }
//   return total;
// };
// // N2_ex3
// const person = {
//   name: "Tom",
// };
// const state = {
//   ...person,
//   active: true,
// };
// state.active = false;
// // console.log(state);
// // N2_ex4
// const user = ["Tom", "White", "1990", "Londres"];
// const [name, surname, ...moreInfo] = user;
// // N3_ex5
// const sumAllNums = (a, b, c) => {
//   return a + b + c;
// };
// const nums = [5, 7, 3];
// // console.log(sumAllNums(...nums)); // 15
// // N3_ex6
// const movie = {
//   title: "Inception",
//   year: 2010,
//   genre: "Sci-Fi",
// };
// const director = {
//   name: "Christopher Nolan",
//   birthYear: 1970,
//   awards: 5,
// };
// const moviesDate = { ...movie, ...director };
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// // Array transformations
/////////////////////////////////////////////////////////////////
// // N1_ex1
// const numbers = [1, 2, 3, 4];
// const squareOfNumbers =
// numbers.map((num) => (num * num));
// // N1_ex2
// const evenNumbers = numbers.filter((num) => num % 2 == 0);
// // N1_ex3
// const arrOfNums = [1, 10, 8, 11];
// const moreTheTen = arrOfNums.find((num) => num > 10);
// // N1_ex4
// const arrOfNums2 = [13, 7, 8, 21];
// const sumAllNumbers = arrOfNums2.reduce((acc, num) => acc + num, 0);
// // N2_ex5
// const arrOfNums3 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
// const transformedArr = arrOfNums3
//   .filter((num) => num >= 10)
//   .map((num) => num * 2)
//   .reduce((acc, num) => acc + num, 0);
// // N3_ex6
// const arrOfNums4 = [11, 12, 13, 14];
// // console.log(arrOfNums4.every(num => num > 10)) // true
// // console.log(arrOfNums4.some(num => num > 10)) //true
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// Array loops
/////////////////////////////////////////////////////////////////
// N1_ex1
// let noms = ["Anna", "Bernat", "Clara"];
// noms.forEach((nom) => console.log(nom));
// // N1_ex2
// for (let nom of noms) {
//   console.log("Hi " + nom);
// };
// N1_ex3
// let numbersArr = [1, 2, 3, 4, 5, 6];
// let onlyEven = numbersArr.filter((num) => num % 2 == 0);
// console.log(onlyEven);
// N2_ex4
// let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
// for (let prop in obj) {
//   console.log(`${prop}: ${obj[prop]}`);
// }
// N2_ex5
// let numbersArr2 = [1, 2, 3, 4, 5, 6];
// for (let num of numbersArr2) {
//   console.log(num);
//   if (num >= 5) {
//     break;
//   }
// }
// // N3_ex6
// let names = ["Anna", "Bernat", "Clara"];
// for (let [index, name] of names.entries()) {
//   console.log(`name: ${name} -- index: ${index}`);
// }
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// // Promises & Async/Await
/////////////////////////////////////////////////////////////////
// N1_ex1
// const greeting = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hola Mundo!");
//   }, 2000);
// });
// // N1_ex2
// greeting.then(console.log);
// // N1_ex3
// const isCorrect = (input) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (input === "Hola") {
//           resolve(input + ", nice to see you :)");
//         } else {
//           reject(new Error(`Input: '${input}' is not correct!`));
//         }
//       }, 2000);
//     });
//   };
//   isCorrect("Hla")
//     .then((msg) => console.log(msg))
//     .catch((msg) => console.log(msg));
// // N1_ex4
// async function greetingFrist() {
//   const msg = await greeting;
//   console.log(msg);
// };
// // N2_ex5
// async function greetingFrist() {
//    try{
//     const msg = await greeting;
//     console.log(msg);
//    } catch (error) {
//     console.error('Error!', error)
//    }
//   };
// // N3_ex6
// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("One...");
//   }, 2000);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Two...");
//   }, 3000);
// });

// async function runPromises() {
//   const result = await Promise.all([promise1, promise2]);
//   console.log(result);
// }

/////////////////////////////////////////////////////////////////
