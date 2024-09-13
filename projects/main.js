/* const readlineSync = require("readline-sync");
const chalk = require("chalk"); */
import chalk from "chalk";
import readlineSync from "readline-sync";
let data = [
  {
    question: "what is js?",
    coorect: "prgrom",
    choices: ["adshfgjhd ..", "sahgdhags"],
    level: "easy",
    topic: "html",
  },
  {
    question: "what is react?",
    coorect: "prgrom",
    choices: ["adshfgjhd ..", "sahgdhags"],
    level: "hard",
    topic: "css",
  },
  {
    question: "what is nodejs?",
    coorect: "prgrom",
    choices: ["adshfgjhd ..", "sahgdhags"],
    level: "medium",
    topic: "js",
  },
  {
    question: "what is Angular?",
    coorect: "prgrom",
    choices: ["adshfgjhd ..", "sahgdhags"],
    level: "hard",
    topic: "js",
  },
];

/* const userInput = "difficult";
const topic = "React"; */

/* use inquirer or readline-sync */
/* const topic = readlineSync.question(
  "Please enter your desired topic (css, html, js): "
);
const difficultyLevel = readlineSync.question(
  "Please enter your desired difficulty level (easy, medium, hard): "
); */
/* const filteredData = data.filter(
  (item) => item.level === difficultyLevel && item.topic === topic
);

console.log(filteredData); */

/* Tic-Tac-Toe */

let xPlayerTurn = true;

if (xPlayerTurn) {
  console.log("player X turn");
  xPlayerTurn = !xPlayerTurn;
} else {
  console.log("player O turn");
  xPlayerTurn = !xPlayerTurn;
}

let gameData = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

gameData.forEach((array) => {
  console.log(array.join(" "));
});

let [a, b, c] = gameData[0]; // [a, b, c] = ["X", "X", "O"];
let [d, e, f] = gameData[1];
let [g, h, i] = gameData[2];

/* if (
  (a === b && b === c) ||
  (d === e && e === f) ||
  (g === h && h == i) ||
  (a === d && d === g) ||
  (b === e && e === h) ||
  (c === f && f === i) ||
  (a === e && e === i) ||
  (c === e && e === g)
) {
  console.log("X is a winner");
} */

console.clear();
gameData = [
  ["X", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

gameData.forEach((array) => {
  console.log(array.join(" "));
});

/* setTimeout(() => {
  console.clear();
  gameData = [
    ["X", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  gameData.forEach((array) => {
    console.log(array.join(" "));
  });
}, 1000);

setTimeout(() => {
  console.clear();
  gameData = [
    ["X", "O", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  gameData.forEach((array) => {
    console.log(array.join(" "));
  });
}, 2000);

setTimeout(() => {
  console.clear();
  gameData = [
    ["X", "O", "_"],
    ["_", "X", "_"],
    ["_", "_", "_"],
  ];

  gameData.forEach((array) => {
    console.log(array.join(" "));
  });
}, 3000);

setTimeout(() => {
  console.clear();
  gameData = [
    ["X", "O", "_"],
    ["_", "X", "O"],
    ["_", "_", "_"],
  ];

  gameData.forEach((array) => {
    console.log(array.join(" "));
  });
}, 4000);

setTimeout(() => {
  console.clear();
  gameData = [
    ["X", "O", "_"],
    ["_", "X", "O"],
    ["_", "_", "X"],
  ];

  gameData.forEach((array) => {
    console.log(array.join(" "));
  });
}, 5000);
 */
let questions = [
  {
    question: "what is js?",
    correct: "language",
    choices: ["adshfgjhd ..", "sahgdhags"],
    level: "easy",
    topic: "html",
  },
  {
    question: "what is function?",
    correct: "keyword",
    choices: ["adshfgjhd ..", "sahgdhags"],
    level: "easy",
    topic: "html",
  },
];

let scoreHistory = [];

let score = 0;

/* questions.forEach((item) => {
  let userAnswer = readlineSync.question(item.question);

  if (userAnswer === item.correct) {
    score += 3;
    console.log("your answer is correct");
  } else {
    console.log("sorry the correct answer was", item.correct);
  }
}); */

/* function timer() {
  let seconds = 10;
  let interval = setInterval(() => {
    seconds -= 1;
    console.log(seconds);
    if (seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
}
timer(); */

/* shuffling items inside the array */
const numbers = [1, 2, 3, 4, 5];

function shuffleArray(array) {
  let copyArray = [...array];
  let resultArray = [];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * copyArray.length);
    let randomItem = copyArray[randomIndex];
    resultArray.push(randomItem);
    copyArray.splice(randomIndex, 1);
  }
  return resultArray;
}

console.log(shuffleArray(numbers));
console.log(numbers);
