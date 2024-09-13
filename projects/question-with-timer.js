import readline from "readline";

// Create interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let interval;
// Function to display countdown timer
function countdown(seconds, status) {
  interval = setInterval(() => {
    process.stdout.write(`\rTime left: ${seconds}s `);
    seconds--;
    if (seconds < 0) {
      clearInterval(interval);
      process.stdout.write(`\nTime's up!\n`);
      rl.close();
    }
  }, 1000);
}

// Function to ask quiz question with timer
function askQuestionWithTimer(question, timeLimit) {
  countdown(timeLimit);
  rl.question(`${question}\nYour answer: \n`, (answer) => {
    console.log(`\nYou answered: ${answer}`);

    clearInterval(interval);
    rl.close();
  });
}

// Example of a quiz question
const quizQuestion = "What is the capital of France?";
const timeLimit = 10; // 10 seconds timer

askQuestionWithTimer(quizQuestion, timeLimit);
