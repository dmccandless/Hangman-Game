//global variables, objects, calls

//document onload ready (?) needed for making sure the page is loaded before processing begins?


//GLOBAL VARIABLES  ********************************************************************

var stateCapitals = ["montgomery", "tallahassee", "annapolis", "bismarck", "columbia"];

var computerSelection = "";

var winCounter = 0;

var guessesRemaining = 10;

var numDashes = 0;

var lettersInSelection = [];

var wrongLettersUsed = [];

var currentContest = [];

//var gameStarted = false;

//for gameExtras functionality, each stateCapitals[i] is an object with properties to display

var montgomery = {
  "state": "Alabama"
  /*"outline": xxx.png,
  "flag": xxx.png*/
}

var tallahassee = {
  "state": "Florida"
  /*"outline": xxx.png,
  "flag": xxx.png*/
}

var annapolis = {
  "state": "Maryland"
  /*"outline": xxx.png,
  "flag": xxx.png*/
}

var bismarck = {
  "state": "North Dakota"
  /*"outline": xxx.png,
  "flag": xxx.png*/
}

var columbia = {
  "state": "South Carolina"
  /*"outline": xxx.png,
  "flag": xxx.png*/
}




//FUNCTIONS ***********************************************************************

//for starting a game
/*document.onkeyup = function(event){
  gameStarted = true;
  initGame();
}*/


var initGame = function(){

  guessesRemaining = 10;
  currentContest = [];
  wrongLettersUsed = [];
  

  computerSelection = stateCapitals[Math.floor(Math.random() * stateCapitals.length)];
  var lettersInSelection = computerSelection.split(" ");
  var numDashes = lettersInSelection.length;

  for(var i = 0; i < numDashes; i++){
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

//for checking letters

var examineLetters = function(letter){
  var isLetterInWord = false;
  for (var i = 0; i < numDashes; i++){
    if(computerSelection[i] === letter){
      isLetterInWord = true;
    }
  }

  if(isLetterInWord) {
    for(var i = 0; i < numDashes; i++){
      if(computerSelection[i] === letter){
        currentContest[i] === letter;
      }
    }
  }

  else{
    wrongLettersUsed.push(letter);
    guessesRemaining--;
  }

  console.log(currentContest);
} //end of examineLetters()

var cycleComplete = function(){
  console.log("Win count: " + winCounter + " | Guesses Left: " + guessesRemaining);

  var html =
        "<p>Press any key to get started</p>" +
        "<p>Wins: " + winCounter + "</p>" +
        "<p>Current Word: " + currentContest + "</p>" +                                    
        "<p>Number of guesses remaining: " + guessesRemaining + "</p>" +
        "<p>Letters already used: " + wrongLettersUsed + "</p>"; 
        

  document.querySelector("#gameDashboard").innerHTML = html;

  if(lettersInSelection.toString() === currentContest.toString()){
    winCounter++;
    alert("You won!");

    var html =
        "<p>Press any key to get started</p>" +
        "<p>Wins: " + winCounter + "</p>" +
        "<p>Current Word: " + currentContest + "</p>" +                                    
        "<p>Number of guesses remaining: " + guessesRemaining + "</p>" +
        "<p>Letters already used: " + wrongLettersUsed + "</p>"; 
        

    document.querySelector("#gameDashboard").innerHTML = html;

    initGame();
  }// end of if you won

  else if(guessesRemaining === 0){
    alert("You lost!");

    initGame();
  }// end of if you lost

}//end of cycleComplete()







//MAIN PROCESSING  ************************************************************************************

document.onkeyup = function(event){
  gameStarted = true;
  initGame();
}

//initGame();


document.onkeyup = function(event){
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  alert("You pressed: " + letterGuessed);
  console.log(letterGuessed);
  examineLetters(letterGuessed);
  cycleComplete();
}






