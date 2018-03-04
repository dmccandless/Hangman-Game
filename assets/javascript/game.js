

//GLOBAL VARIABLES  ********************************************************************

var stateCapitals = ["montgomery", "tallahassee", "annapolis", "bismarck", "columbia"];/* "augusta",
  "concord","montpelier", "boston", "providence", "hartford", "albany", "trenton", "harrisburg",
  "dover", "richmond", "charleston", "raleigh", "austin", "batonrouge", "jackson", "lansing", "columbus",
  "frankfort", "nashville", "madison", "springfield", "indianapolis", "stpaul", "desmoines", "jeffersoncity",
  "littlerock", "pierre", "lincoln", "honolulu", "juneau", "olympia", "salem", "sacramento", "boise",
  "carsoncity", "phoenix", "helena", "denver", "topeka", "oklahomacity", "santafe", "saltlakecity",
  "cheyenne", "atlanta"];*/

var computerSelection = "";

var winCounter = 0;

var guessesRemaining = 9;

var numDashes = 0;

var lettersInSelection = [];

var wrongLettersUsed = [];

var currentContest = [];

var html1 = "";

var flagImage;


//FUNCTIONS/OBJECTS ***********************************************************************

//for gameExtras functionality, each stateCapitals[i] is an object with properties to display

var montgomery = {
  "state": "Alabama",
  "flag": "alabamaFlag",
  "nameIs": "Montgomery"
};

var tallahassee = {
  "state": "Florida",
  "flag": "floridaFlag",
  "nameIs": "Tallahassee"
};

var annapolis = {
  "state": "Maryland",
  "flag": "marylandFlag",
  "nameIs": "Annapolis"
};

var bismarck = {
  "state": "North Dakota",
  "flag": "northdakotaFlag",
  "nameIs": "Bismarck"
};

var columbia = {
  "state": "South Carolina",
  "flag": "southCarolinaFlag",
  "nameIs": "Columbia"
};





function initGame(){

  guessesRemaining = 9; //duplicative initializing?
  currentContest = [];
  wrongLettersUsed = [];
  html1 = "";
  document.querySelector("#cityInfo").innerHTML = html1;

  flagImage = document.getElementById("flagPlaceholder");
  flagImage.setAttribute("src", "assets/images/flag.png");



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

  flagImage = document.getElementById("flagPlaceholder");
  flagImage.setAttribute("src", "assets/images/" + eval(computerSelection).flag + ".png");


}//end of initGame()

//part of attempt to keep duplicates of wrong guesses from being recorded -- that is, record wrong guesses only once
function inArray(needle, haystack){
  var length = haystack.length;
  for (var i = 0; i < length; i++){
    if(haystack[i] == needle){
      return true;
    }
  } 
}
  


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
    if(!(inArray(letter, wrongLettersUsed) == true)){
      wrongLettersUsed.push(letter);
      guessesRemaining--;
    }
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

  if(lettersInSelection.toString() == currentContest.toString() || guessesRemaining == 0){
    html1 = "This city is the capital of " + eval(computerSelection).state + " and its name is " + eval(computerSelection).nameIs + ".";
    document.querySelector("#cityInfo").innerHTML = html1;
    setTimeout(wrapUpGame, 2000);

  }

} //end of examine letters

function wrapUpGame(){
  if(lettersInSelection.toString() == currentContest.toString()){
    winCounter++;
    alert("You won!")
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










