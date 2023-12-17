// // JavaScript Fundamentals – Part 1

// LECTURE: Values and Variables
let country = "USA";
let continet = "North America";
let usaPOP = 130;
// console.log(country);
// console.log(continet);
// console.log(usaPOP);

// ==> LECTURE: Data Types
let isIsland = false;
// // let language;
// console.log(typeof isIsland);
// console.log(typeof usaPOP);
// console.log(typeof country);

// ==> LECTURE: let, const and var
const language = "english";
// console.log(typeof language);

// ==> LECTURE: Basic Operators
// const halfCountries = usaPOP / 2;
// console.log(halfCountries);
// usaPOP++;
// console.log(usaPOP);
// const finladPop = 6;
// const morePop = usaPOP > finladPop;
// console.log(morePop);
// const avaragePop = 33;
// const againstAvarageCountries = usaPOP < avaragePop;
// console.log(againstAvarageCountries);
// const describtion =
//   country +
//   " is in " +
//   continet +
//   ", and its " +
//   usaPOP +
//   " million people speak " +
//   language;
// // "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(describtion);

// ==> TEMPLATE LITERALS
// const describtion = `${country} is in ${continet}, and its ${usaPOP} million people speak ${language}`;
// console.log(describtion);

// ==>TAKING DECISION: IF / ELSE STATEMENTS
// if (usaPOP > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - usaPOP} million below average`
//   );
// }

// ==> TYPE CONVERSION AND COERCION
// console.log("9" - "5"); // results in number 4
// console.log("19" - "13" + "17"); // results in string "617"
// console.log("19" - "13" + 17); // results in number 23
// console.log("123" < 57); // coercining the string number to actual number which results in the statement been false.
// console.log(5 + 6 + "4" + 9 - 4 - 2); // results in number 1,143

// ==> LOGICAL OPERATORS
// if (language === "English" && usaPOP < 50 && !isIsland) {
//   console.log("You should live in USA");
// } else {
//   console.log("USA does not meet your criteria");
// }

// ==> THE SWITCH STATEMENT
// switch (language) {
//   case "chaines":
//   case "mandarin":
//     console.log("MOST numbers of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in nu,ber of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// ==> THE CONDITIONAL (TERNARY) OPERATOR
// usaPOP > 33
//   ? console.log(`${country} population is above average`)
//   : console.log(`${country} population is below average`);
// better way of writing it
// console.log(
//   `${country}'s population is ${usaPOP > 33 ? "above" : "below"} average`
// );

//CHALLENGES
/* Write your code below. Good luck! 🙂 */

//Coding exercise 1: Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const BMIMark = massMark / (heightMark * heightMark);

// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markBMIHigher = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markBMIHigher);

//Coding exercise 2: Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//   console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }

// const numNeighbour = prompt(
//   "How many neighbour countries does your country have?"
// );
// console.log(numNeighbour);
// if (numNeighbour === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbour > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//Coding exercise 4: Challenge #4
const bill = 275;

/* Write your code below. Good luck! 🙂 */

// const tip = bill <= 300 && bill > 50 ? bill * 0.15 : bill * 0.2;
// const totalBill = tip + bill;
// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
// );
