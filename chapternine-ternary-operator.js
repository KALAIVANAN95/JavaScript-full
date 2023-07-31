//Chapter 9 Ternary-operator

let age = 26;

let beverage = age >= 21 ? "Beer" : "Juice";

console.log("Avarage Values is :" + " " + beverage);

//=================================================\\

let developers = "Developer";

let result = developers
  ? "Welcome to React JS Course"
  : "Welcome to Basic Course";

console.log("Result will be", result);

//=================================================\\

let testScore = 90;

let grade =
  testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : "FAIL";

console.log("Grade will be", grade);

//=================================================\\

let player = "rock";

let computer = "scissors";

let results =
  player === computer
    ? "Tie"
    : player === "rock" && computer === "paper"
    ? "Computer wins!"
    : player === "paper" && computer === "scissors"
    ? "Computer wins!"
    : player === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "Player Wins";

console.log(results);
