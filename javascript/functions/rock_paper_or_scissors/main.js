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
    console.log("input invalid");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "both are tied";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer wins";
    } else {
      return "user wins";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer wins";
    } else {
      return "user wins";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer wins";
    } else {
      return "user wins";
    }
  } else if (userChoice === "bomb") {
    return "user used a bomb to win";
  }
};

const playGame = () => {
  userChoice = getUserChoice("bomb");
  computerChoice = getComputerChoice();
  console.log("user choice:", userChoice);
  console.log("computer choice:", computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
