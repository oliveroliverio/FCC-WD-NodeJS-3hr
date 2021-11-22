const readline = require("readline");
// process is global, don't need to req
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// generate random number between 1 and 10
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

// rl interface has method called question, ('string', 'function')
rl.question(`What is ${num1} + ${num2}?`, (userInput) => {
  // trim trims whitespace or newline characters
  if (userInput.trim() == answer) {
    console.log("correct!");
    // close app
    rl.close();
  }
});
