/* const readlineSync = require("readline-sync"); */
const inquirer = require("inquirer");
// Your code here!
class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }
  ratio(x, y, width) {
    const height = (y / x) * width;
    return height;
  }
  percentage(x, y) {
    const percentageToString = ((x / y) * 100).toString() + "%";
    return y === 0 ? "Error: Divisor cannot be zero" : percentageToString;
  }
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return y === 0 ? "Error: Divisor cannot be zero" : x / y;
  }
  remainder(x, y) {
    return y === 0 ? "Error: Divisor cannot be zero" : x % y;
  }
  elevate(x, y) {
    return x ** y; // or Math.pow(x, y)
  }
  sqrt(x) {
    return x < 0
      ? "Error: Cannot calculate the square root of a negative number"
      : Math.sqrt(x);
  }
}
const calc = new Calculator();
/* console.log(calc); */ // Calculator { PI: 3.141592653589793, E: 2.718281828459045 }
/* console.log(calc.ratio(5, 7, 300)); // 420
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // -2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.remainder(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5 */

/* readline-sync */

/* const numberOne = +readlineSync.question("Please enter your first number : ");
const numberTwo = +readlineSync.question("Please enter your second number : ");

const operation = readlineSync.question(
  "what operation you want to perform on these numbers: e.g: add, substract, multiply, divide "
);

if (
  operation.toLowerCase() === "add" ||
  operation.toLowerCase() === "addition" ||
  operation.toLowerCase() === "+"
) {
  console.log(calc.add(numberOne, numberTwo));
} else if (operation === "divide") {
  console.log(calc.divide(numberOne, numberTwo));
}
 */

const prompt = inquirer.createPromptModule();
prompt([
  {
    name: "number1",
    type: "input",
    message: "Please enter your first number : ",
  },
  {
    name: "number2",
    type: "input",
    message: "Please enter your send number : ",
  },
  {
    name: "operation",
    type: "list",
    message: "Choose your operation:",
    choices: ["ADD", "SUBTRACT", "DIVIDE", "MODULUS"],
  },
]).then((answer) => {
  const { number1, number2, operation } = answer;

  if (operation === "ADD") {
    console.log(calc.add(+number1, +number2));
  } else if (operation === "DIVIDE") {
    console.log(calc.divide(+number1, +number2));
  }
});
