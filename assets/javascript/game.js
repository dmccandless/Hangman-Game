

//GLOBAL VARIABLES  ********************************************************************

var stateCapitals = ["montgomery", "tallahassee", "annapolis", "bismarck", "columbia"];

var computerSelection = "";

var winCounter = 0;

var guessesRemaining = 9;

var numDashes = 0;

var lettersInSelection = [];

var wrongLettersUsed = [];

var currentContest = [];


//FUNCTIONS/OBJECTS ***********************************************************************

//for gameExtras functionality, each stateCapitals[i] is an object with properties to display

/*var montgomery = {
  "state": "Alabama",
  "flag": alabama.png
}

var tallahassee = {
  "state": "Florida",
  "flag": florida.png
}

var annapolis = {
  "state": "Maryland",
  "flag": maryland.png
}

var bismarck = {
  "state": "North Dakota",
  "flag": northdakota.png
}

var columbia = {
  "state": "South Carolina",
  "flag": southCarolina.png
}*/





function initGame(){

  guessesRemaining = 9; //duplicative initializing?
  currentContest = [];
  wrongLettersUsed = [];
  

  computerSelection = stateCapitals[Math.floor(Math.random() * stateCapitals.length)];
  console.log(computerSelection);
  lettersInSelection = computerSelection.split("");
  console.log(lettersInSelection);
  numDashes = lettersInSelection.length;
  console.log(numDashes);

  for(var i = 0; i < numDashes; i++){
    currentContest.push(" _ ");
  }

  console.log(currentContest);

  var html =
        "<p>Press any key to get started</p>" +
        "<p>Wins: " + winCounter + "</p>" +
        "<p>Current Word: " + currentContest.join(" ") + "</p>" +                                    
        "<p>Number of guesses remaining: " + guessesRemaining + "</p>" +
        "<p>Incorrect letters already used: " + wrongLettersUsed + "</p>"; 
        

    document.querySelector("#gameDashboard").innerHTML = html;


}//end of initGame()



function examineLetters(letter){
  console.log(letter);
  var isLetterInWord = false;
  for (var i = 0; i < numDashes; i++){
    if(computerSelection[i] == letter){
      console.log(computerSelection[i]);
      isLetterInWord = true;
      console.log(isLetterInWord);
    }
  }

  if(isLetterInWord) {
    for(var i = 0; i < numDashes; i++){
      if(computerSelection[i] == letter){
        currentContest[i] = letter;
      }
    }
  }

  else{
    wrongLettersUsed.push(letter);
    guessesRemaining--;
  }
  

  console.log(currentContest);
  //currentContest.join(" ");
  console.log(currentContest.join(" "));

  var html =
        "<p>Press any key to get started</p>" +
        "<p>Wins: " + winCounter + "</p>" +
        "<p>Current Word: " + currentContest.join(" ") + "</p>" +                                    
        "<p>Number of guesses remaining: " + guessesRemaining + "</p>" +
        "<p>Incorrect letters already used: " + wrongLettersUsed + "</p>"; 
        
  document.querySelector("#gameDashboard").innerHTML = html;
  console.log(html);

  /*if(lettersInSelection.toString() == currentContest.toString() || guessesRemaining == 0){
    wrapUpGame();
  }*/

} //end of examine letters

function wrapUpGame(){
  if(lettersInSelection.toString() == currentContest.toString()){
    winCounter++;
    alert("You won!");
    initGame();
  }

  else if(guessesRemaining == 0){
    alert("You lost!");
    initGame();
  }

}


//CALLS  ************************************************************************************

//document onload ready (?) needed for making sure the page is loaded before processing begins?
initGame();


document.onkeyup = function(event){
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  alert("You pressed: " + letterGuessed);
  examineLetters(letterGuessed);
}










