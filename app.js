console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Jill";
let lastName = "Oakes";
var age = "21";

// Exercise 2 using concatenation
let fullName = firstName + " " + lastName;
console.log("using concatenation: ");
console.log(fullName);
// Exercise 2 using template literal
let fullName2 = `${firstName} ${lastName}`;
console.log("using template literal:  ");
console.log(fullName2);

// Exercise 3
let city = "Indianapolis";
let pastime = "video games";
let myStory = `Bonjour, my name is ${fullName}.  I live in ${city}.  Enjoying ${pastime} is a hobby of mine.`;
console.log(myStory);