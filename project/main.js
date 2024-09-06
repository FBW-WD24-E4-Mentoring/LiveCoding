// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const readlineSync = require("readline-sync");
// Feel free to edit / remove the line above, this is just to test the package
//  Although we may want to use the user's name for something
// Function to generate a random 4-digit secret number with unique digits
function generateSecretNumber() {
  let digits = [];
  while (digits.length < 4) {
    let randomDigit = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }
  console.log(digits);
  return digits.join("");
}

// Function to validate the player's guess
function isValidGuess(guess) {
  if (guess.length !== 4) return false;
  let guessSet = new Set(guess);
  return guessSet.size === 4 && !isNaN(guess);
}
// Function to calculate bulls and cows
function getBullsAndCows(secret, guess) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }
  return { bulls, cows };
}
// Main game function
function playGame() {
  const secretNumber = generateSecretNumber();
  let attempts = 0;
  console.log("Welcome to Bulls and Cows!");
  while (true) {
    const guess = readlineSync.question("Enter your 4-digit guess: ");
    if (!isValidGuess(guess)) {
      console.log(
        "Invalid guess! Make sure it's a 4-digit number with unique digits."
      );
      continue;
    }
    attempts++;
    const { bulls, cows } = getBullsAndCows(secretNumber, guess);
    if (bulls === 4) {
      console.log(
        `Congratulations! You've guessed the secret number ${secretNumber} in ${attempts} attempts!`
      );
      break;
    } else {
      console.log(`${bulls} bull(s) and ${cows} cow(s).`);
    }
  }
}
// Start the game
playGame();
