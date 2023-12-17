// // let js = "amazing";
// // if (js == "amazing") alert("JavaScript is fun");
// // console.log(9 + 10 + 20 - 1);

// ==> MATH OPERATORS
// const now = 2037;
// const ageAli = now - 1995;
// const ageMaryan = now - 2005;
// console.log(ageAli, ageMaryan);

// console.log(ageAli * 2, ageAli / 10, 2 ** 3);
// // we can log different values at the same time. We separate them by ,{comma}
// // the two star means power of. Meaneanig 2 * 2 *2 = 8

// ==> ASSINGMET OPERATORS
// let x = 10 + 5; //results in 15
// x += 15; // besically i am telling it to add another 15. x = x + 15 results in = 30
// x *= 4; // this means multiply it by 4. x = x * 4 which results in = 120
// x++; // what i am saying here is add by one. x = x + 1 + 1 which results in = 121
// x--; // means subtract by one
// x--; // this will result in 2 quick subtraction which results in = 119
// console.log(x);

// // comparison operators = results in boolean
// console.log(ageAli > ageMaryan);
// console.log(ageMaryan >= 18);

// ==> TEMPLATE LITERALS
// const firstName = "Ali";
// const job = "Security officer";
// const birthYear = 1995;
// const year = 2037;

// const ali =
//   " I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(ali);

// const aliNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(aliNew);

// ==> TAKING DECISION: IF / ELSE STATEMENTS
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
// }
//THE ABOVE CODE IS CALLED A CONTROLLED STRUCTURE. IT ALLOWS US TO HAVE MORE CONTROL ON HOW WE EXECUTE OUR CODE.

// ==> TYPE CONVERSION AND COERCION
// Conversion => is when we manually convert on type to an other. for example
// const inputYear = "1991";
// console.log(inputYear + 18);
// what this is doing is it's concatenating the strings. Aka "199118" and not 1991 + 18 = 2009.
// The way to fix this is using the built in number function
// console.log(Number(inputYear));
// Converting a string that doesn't contain a number will result in NaN. Meaning an invalid number.
// console.log(Number("Ali"));

// Coercion => is when JavaScript aoutomatically converts two different types
// In the example below it results in a string due to the operations
// console.log(" I am " + 24 + " years old"); // is besically JS automatically understanding that 24 in this case a string. is just as wring it as this => console.log(" I am " + "24" + " years old");
// minus operator triggers the opposite Coercion
// console.log("23" - "10" - 3);
// multiplication also turns string numbers into real numbers.
// console.log("23" / "2"); // console.log("23" * "2");

// ==> TRUTHY AND FALSY VALUES

// Falsy values are not exactly false, but become false when we try to convert them into boolean
// Those values are: 0, "", undefine, null, and NaN.
// console.log(Boolean(0)); // Falsy
// console.log(Boolean(undefined)); // Falsy
// console.log(Boolean("Ali")); // Truthy
// console.log(Boolean({})); // Truthy, doesn't meet the falsy values.
// console.log(Boolean("")); // Falsy
// Any other values are considered Truthy when attemted to be converted to a boolean
// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job");
// } //in this case the else statement runs
// Type Coercion to booleans happens when using logical operators and in logical context like if/ else statment.
// let height;
// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// } //in this case the else statement runs

// ==> EQUALITY OPERATORS: == VS ===
// this === is called strict equality operator becuase it doesn't perform type coersion
// const age = "18";
// if (age === 18) console.log("you just became an adult :D (Strict");
// this == is called loose equality operator becuase it does type coersion AKA Javascript fixes it behind the scene.
// if (age == 18) console.log("you just became an adult :D (loose");
// NB/ General rule for clean code use avoid loose operator as much as you can. When comparing always use strict operator.

// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite);

// if (favorite === 23) {
//   console.log("23 is my favorite number too!");
// } else {
//   console.log("That's not my favorite number");
// }

// different operator != (Loose) !== (strict)
// if (favorite !== 23) {
//   console.log("why not 23");
// }

// => BOOLEAN LOGIC OPERATORS
// is a branch of computer science which uses true and false values to solve complex logical problems.
//  It uses several logical Operators to combine true and false values. These are AND, OR, and NOT operators
// AND (&&) operator what it does is to return true if only if all the conjetion are true. Otherwise it will be flase.
// OR (||) operator will be true if just one of the variables is true
// NOT (!) operator takes truth to falsity and vice versa
// const hasDriverLicense = true;
// const hasGoodVision = true;
// if (hasDriverLicense && hasGoodVision) {
//   console.log("Ali is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }
// const isTired = false;
// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("can drive!");
// }

// ==> THE SWITCH STATEMENT
// is an alternitive way of writing a complicated if/else statement
const day = "monday";
// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; // without the break the code will simply continue executing
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default: // this is besically and else block at the end of a long if/else statement.
//     console.log("Not a Valid Day!");
// }
// This is the if statement.
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a Valid Day!");
// }

// ==> STATEMENT AND EXPRESSION
// EXPRESSION produce values
// STATEMENT are like full sentances that translate our action

// ==> THE CONDITIONAL (TERNARY) OPERATOR
// It's essentially writing an if/else statement all in one line.
// It has three parts; the condition, the if part and then the else part. for ex:
// const age = 18;
// age >= 25 ? console.log("can enter the venue") : console.log("can't come in");
