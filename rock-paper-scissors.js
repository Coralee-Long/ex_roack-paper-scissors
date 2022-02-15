// Rock, Paper, or Scissors
// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:

// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

console.log(`nodemon is working, YAY!`);

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(`ERROR: Please choose either 'Rock', 'Paper' or 'Scissors'`);
  }
};

// console.log(getUserChoice(`scissors`));
// console.log(getUserChoice(`banana`));

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return `rock`;
    case 1:
      return `paper`;
    case 2:
      return `scissors`;
  }
};

// console.log(getComputerChoice());

const winner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    console.log(`It's a draw!!`);
  }

  if (getUserChoice === `bomb`) {
    console.log(`Congratulations, Bomb always wins!`);
  }

  if (getUserChoice === `paper`) {
    if (getComputerChoice === "rock") {
      console.log(`Congratulations, you win!`);
    } else {
      console.log(`Sorry, the computer beat you.`);
    }
  }

  if (getUserChoice === `scissors`) {
    if (getComputerChoice === `paper`) {
      console.log(`Congratulations, you win!`);
    } else {
      console.log(`Sorry, the computer beat you.`);
    }
  }

  if (getUserChoice === `rock`) {
    if (getComputerChoice === `scissors`) {
      console.log(`Congratulations, you win!`);
    } else {
      console.log(`Sorry, the computer beat you.`);
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice(`paper`);
  const computerChoice = getComputerChoice();
  console.log(`You played ${userChoice}`);
  console.log(`The computer played ${computerChoice}`);
  console.log(winner(userChoice, computerChoice));
};

playGame();
