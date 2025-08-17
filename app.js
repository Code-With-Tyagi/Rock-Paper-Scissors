let images = document.querySelectorAll(".btn");
let choices = ["rock", "paper", "scissors"];
let result = document.querySelector(".result");
let firstScore = document.querySelector(".score-1");
let secondScore = document.querySelector(".score-2");
let resetBtn = document.querySelector(".button");

let userScore = 0;
let compScore = 0;

let userWins = false;
let compWins = false;

for (let image of images) {
    image.addEventListener("click", () => {
        let userChoice = image.getAttribute("id");
        console.log("Your Choice : ", userChoice)
        let compChoice = computerChoice();
        console.log("Computer Choice :", compChoice);

        checkChoices(userChoice, compChoice);
    });
}

function computerChoice() {
    let randomIdx = Math.floor(Math.random() * 3);
    randomChoice = choices[randomIdx];
    return randomChoice;
}

function checkChoices(userChoice, compChoice) {
    // reset the color befor play next move
    result.classList.remove("green", "red");

    if (userChoice == compChoice) {
        result.innerText = "Game was Draw. Play Again."
    }

    else if (userChoice == "rock" && compChoice == "paper") {
        result.innerText = "You Lost! Paper beats your rock"
        compWins = true;
    }

    else if (userChoice == "paper" && compChoice == "rock") {
        result.innerText = "You Win! Your Paper beats rock"
        userWins = true;
    }


    else if (userChoice == "rock" && compChoice == "scissors") {
        result.innerText = "You Win! Your rock beats scissors"
        userWins = true;
    }

    else if (userChoice == "scissors" && compChoice == "rock") {
        result.innerText = "You Lost! Rock beats your scissors"
        compWins = true;
    }


    else if (userChoice == "paper" && compChoice == "scissors") {
        result.innerText = "You Lost! Scissors beats your paper"
        compWins = true;
    }

    else if (userChoice == "scissors" && compChoice == "paper") {
        result.innerText = "You Win! Your Scissors beats paper"
        userWins = true;
    }

    if (userWins) {
        userScore++;
        firstScore.innerText = userScore;
        result.classList.add("green");

    }

    if (compWins) {
        compScore++;
        secondScore.innerText = compScore;
        result.classList.add("red");

    }

    userWins = false;
    compWins = false;

}

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    firstScore.innerText = "0";
    secondScore.innerText = "0";
    result.innerText = "Play your move";
    result.classList.remove("green", "red");

});

