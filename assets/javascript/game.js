//global variables, objects, calls

//document onload ready (?) needed for making sure the page is loaded before processing begins?
//Global Variables
var stateCapitals = ["montgomery", "tallahassee", "annapolis", "bismarck", "columbia"];

var computerSelection = stateCapitals[Math.floor(Math.random() * stateCapitals.length)];

var montgomery = {
  "state": "Alabama",
  "outline": xxx.png,
  "song": xxx.mp4
}

var tallahassee = {
  "state": "Florida",
  "outline": xxx.png,
  "song": xxx.mp4
}

var annapolis = {
  "state": "Maryland",
  "outline": xxx.png,
  "song": xxx.mp4
}

var bismarck = {
  "state": "North Dakota",
  "outline": xxx.png,
  "song": xxx.mp4
}

var columbia = {
  "state": "South Carolina",
  "outline": xxx.png,
  "song": xxx.mp4
}

var winCounter = 0;

var guessesRemaining = x; //how to initialize? initialize with 15

var wrongLettersUsed = [];

var currentContest[];

var gameStarted = false;


//Functions

//for starting a game
document.onkeyup = function(event){
  gameStarted = true;
  initGame();

}


var initGame = function(){

  guessesRemaining = 10;
  currentContest = [];
  

  computerSelection = stateCapitals[Math.floor(Math.random() * stateCapitals.length)];
  var lettersInSelection = computerSelection.split(" ");
  var numDashes = lettersInSelection.length;

  for(var i = 0; i < numDashes; numDashes++){
    currentContest.push(" _ ");
  }

  var html =
        "<p>Press any key to get started</p>" +
        "<p>Wins: " + winCounter + "</p>" +
        "<p>Current Word: " + currentContest + "</p>" +                                    
        "<p>Number of guesses remaining: " + guessesRemaining + "</p>" +
        "<p>Letters already used: " + wrongLettersUsed + "</p>"; 
        

    document.querySelector("#gameDashboard").innerHTML = html;


}//end of initGame()







//Main Process

initGame();

document.onkeyup = function(event){
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  alert(letterGuessed);
  console.log(letterGuessed);
}






