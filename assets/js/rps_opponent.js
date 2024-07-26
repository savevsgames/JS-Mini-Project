// Set the score to 0 for both the player and the computer
document.addEventListener("DOMContentLoaded", () => {
  // Your code here

  var score = [0, 0];
  var games = 0;
  // Get the elements from the HTML
  var playerScore = document.getElementById("player-score");
  var computerScore = document.getElementById("computer-score");
  var rock = document.getElementById("rock");
  var paper = document.getElementById("paper");
  var scissors = document.getElementById("scissors");
  var result = document.getElementById("result");
  var gamesPlayed = document.getElementById("games-played");

  // Get the elements from the HTML
  var handRight = document.getElementById("hand-right");
  var handLeft = document.getElementById("hand-left");

  // Function to generate a random number between 0 and 2
  function computerPlay() {
    return Math.floor(Math.random() * 3);
  }

  // Function to determine the winner of the game
  function playRound(playerSelection, computerSelection) {
    // 0 = rock, 1 = paper, 2 = scissors
    var handRight = document.getElementById("hand-right");
    var handLeft = document.getElementById("hand-left");

    if (playerSelection === 0 && computerSelection === 0) {
      handRight.setAttribute("src", "./assets/images/rock_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/rock_hand.png");
      return "You chose rock. So did God. It's a tie!";
    } else if (playerSelection === 1 && computerSelection === 1) {
      handRight.setAttribute("src", "./assets/images/paper_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/paper_hand.png");
      return "You chose paper. So did God. It's a tie!";
    } else if (playerSelection === 2 && computerSelection === 2) {
      handRight.setAttribute("src", "./assets/images/scissors_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/scissors_hand.png");
      return "You chose scissors. So did God. It's a tie!";
    } else if (playerSelection === 0 && computerSelection === 1) {
      handRight.setAttribute("src", "./assets/images/paper_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/rock_hand.png");
      return "You lose! Paper beats rock!";
    } else if (playerSelection === 0 && computerSelection === 2) {
      handRight.setAttribute("src", "./assets/images/scissors_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/rock_hand.png");
      return "You win! Rock beats scissors!";
    } else if (playerSelection === 1 && computerSelection === 0) {
      handRight.setAttribute("src", "./assets/images/rock_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/paper_hand.png");
      return "You win! Paper beats rock!";
    } else if (playerSelection === 1 && computerSelection === 2) {
      handRight.setAttribute("src", "./assets/images/scissors_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/paper_hand.png");
      return "You lose! Scissors beats paper!";
    } else if (playerSelection === 2 && computerSelection === 0) {
      handRight.setAttribute("src", "./assets/images/rock_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/scissors_hand.png");
      return "You lose! Rock beats scissors!";
    } else if (playerSelection === 2 && computerSelection === 1) {
      handRight.setAttribute("src", "./assets/images/paper_hand_right.png");
      handLeft.setAttribute("src", "./assets/images/scissors_hand.png");
      return "You win! Scissors beats paper!";
    } else {
      return "You lose!";
    }
  }

  document.getElementById("rock").addEventListener("click", function () {
    var playerSelection = 0;
    games++;
    var computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
    if (result.textContent.includes("win")) {
      score[0]++;
    } else if (result.textContent.includes("lose")) {
      score[1]++;
    } else if (result.textContent.includes("tie")) {
      games++;
    }
    updateScore();
  });

  document.getElementById("paper").addEventListener("click", function () {
    var playerSelection = 1;
    games++;
    var computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
    if (result.textContent.includes("win")) {
      score[0]++;
    } else if (result.textContent.includes("lose")) {
      score[1]++;
    }
    updateScore();
  });

  document.getElementById("scissors").addEventListener("click", function () {
    var playerSelection = 2;
    games++;
    var computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
    if (result.textContent.includes("win")) {
      score[0]++;
    } else if (result.textContent.includes("lose")) {
      score[1]++;
    }
    updateScore();
  });

  // fucntion to update the score
  function updateScore() {
    playerScore.textContent = score[0];
    computerScore.textContent = score[1];
    gamesPlayed.textContent = `Round ${games}`;
  }

  // Animation for the hands / buttons

  rock.addEventListener("click", (e) => {
    {
      handRight.classList.add("shakeright");
      handLeft.classList.add("shake");
      setTimeout(() => {
        handRight.classList.remove("shakeright");
        handLeft.classList.remove("shake");
      }, 3000);
    }
  });

  paper.addEventListener("click", (e) => {
    {
      handRight.classList.add("shakeright");
      handLeft.classList.add("shake");
      setTimeout(() => {
        handRight.classList.remove("shakeright");
        handLeft.classList.remove("shake");
      }, 3000);
    }
  });

  scissors.addEventListener("click", (e) => {
    {
      handRight.classList.add("shakeright");
      handLeft.classList.add("shake");
      setTimeout(() => {
        handRight.classList.remove("shakeright");
        handLeft.classList.remove("shake");
      }, 3000);
    }
  });
});
