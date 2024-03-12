let gameChoices = ["R", "P", "S"];
let wins = 0;
let losses = 0;
let ties = 0;

function playingRules() {

   console.log("Lets play Rock, Paper, Scissor");
   console.log("Rules are you must enter [R]ock, [P]aper or [S]cissor");
   console.log("The computer will enter it's choice!")
   console.log("Reminder Rock wins against Scissors; Paper covers Rock and Scissors cuts Paper");

}

function playGame() {

   let userInput;
   let computerPick;
   let cnt = 0;

   while (true && cnt < 5) {
      userInput= prompt("Enter your choice [R], [P], [S]...").toUpperCase();
      cnt++;

      if (!gameChoices.includes(userInput)) {
         cnt++;
         alert("entered invalid value - try again");
         continue;
      }

      // get computer choice
      computerPick = gameChoices[Math.floor(Math.random() * gameChoices.length)];

      //determine winner 
      if (userInput === computerPick) {
         ties++;
         alert("No winner it is a tie!!");
      } else if (
                  (userInput === "R" && computerPick === "S") || 
                  (userInput === "S" && computerPick === "P") ||
                  (userInput === "P" && computerPick === "R") 
               ) {  
                  wins++;
                  alert("User Wins!");
      } else {
         losses++;
         alert("Computer wins!!");
      }
         
      keepPlaying = confirm("Would you like to play again?");
      if (keepPlaying) {
         cnt = 0;
         playGame();
      } else {
         alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
         break;
      }

   }
   
   if (cnt > 5) {
      alert("Exceed number of tries!  Goodbye!");
   }

}

playingRules();
playGame();








