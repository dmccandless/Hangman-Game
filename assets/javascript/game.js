window.onload = function(){

//GLOBAL VARIABLES  ********************************************************************

var stateCapitals = ["montgomery", "tallahassee", "annapolis", "bismarck", "columbia", "augusta",
  "concord","montpelier", "boston", "providence", "hartford", "albany", "trenton", "harrisburg",
  "dover", "richmond", "charleston", "raleigh", "austin", "batonrouge", "jackson", "lansing", "columbus",
  "frankfort", "nashville", "madison", "springfield", "indianapolis", "stpaul", "desmoines", "jeffersoncity",
  "littlerock", "pierre", "lincoln", "honolulu", "juneau", "olympia", "salem", "sacramento", "boise",
  "carsoncity", "phoenix", "helena", "denver", "topeka", "oklahomacity", "santafe", "saltlakecity",
  "cheyenne", "atlanta"];

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

var augusta = {
  "state": "Maine",
  "flag": "maineFlag",
  "nameIs": "Augusta"
};

var concord = {
  "state": "New Hampshire",
  "flag": "newHampshireFlag",
  "nameIs": "Concord"
};

var montpelier = {
  "state": "Vermont",
  "flag": "vermontFlag",
  "nameIs": "Montpelier"
};

var boston = {
  "state": "Massachusetts",
  "flag": "massachusettsFlag",
  "nameIs": "Boston"
};

var providence = {
  "state": "Rhode Island",
  "flag": "rhodeIslandFlag",
  "nameIs": "Providence"
};

var hartford = {
  "state": "Connecticut",
  "flag": "connecticutFlag",
  "nameIs": "Hartford"
};

var albany = {
  "state": "New York",
  "flag": "newYorkFlag",
  "nameIs": "Albany"
};

var trenton = {
  "state": "New Jersey",
  "flag": "newJerseyFlag",
  "nameIs": "Trenton"
};

var harrisburg = {
  "state": "Pennsylvania",
  "flag": "pennsylvaniaFlag",
  "nameIs": "Harrisburg"
};

var dover = {
  "state": "Delaware",
  "flag": "delawareFlag",
  "nameIs": "Dover"
};

var richmond = {
  "state": "Virginia",
  "flag": "virginiaFlag",
  "nameIs": "Richmond"
};

var charleston = {
  "state": "West Virginia",
  "flag": "westVirginiaFlag",
  "nameIs": "Charleston"
};

var raleigh = {
  "state": "North Carolina",
  "flag": "northCarolinaFlag",
  "nameIs": "Raleigh"
};

var austin = {
  "state": "Texas",
  "flag": "texasFlag",
  "nameIs": "Austin"
};

var batonrouge = {
  "state": "Louisiana",
  "flag": "louisianaFlag",
  "nameIs": "Baton Rouge"
};

var jackson = {
  "state": "Mississippi",
  "flag": "mississippiFlag",
  "nameIs": "Jackson"
};

var lansing = {
  "state": "Michigan",
  "flag": "michiganFlag",
  "nameIs": "Lansing"
};

var frankfort = {
  "state": "Kentucky",
  "flag": "kentuckyFlag",
  "nameIs": "Frankfort"
};

var nashville = {
  "state": "Tennessee",
  "flag": "tennesseeFlag",
  "nameIs": "nashville"
};

var columbus = {
  "state": "Ohio",
  "flag": "ohioFlag",
  "nameIs": "Columbus"
};

var stpaul = {
  "state": "Minnesota",
  "flag": "minnesotaFlag",
  "nameIs": "St. Paul"
};

var desmoines = {
  "state": "Iowa",
  "flag": "iowaFlag",
  "nameIs": "Des Moines"
};

var jeffersoncity = {
  "state": "Missouri",
  "flag": "missouriFlag",
  "nameIs": "Jefferson City"
};

var littlerock = {
  "state": "Arkansas",
  "flag": "arkansasFlag",
  "nameIs": "Little Rock"
};

var pierre = {
  "state": "South Dakota",
  "flag": "southDakotaFlag",
  "nameIs": "Pierre"
};

var lincoln = {
  "state": "Nebraska",
  "flag": "nebraskaFlag",
  "nameIs": "Lincoln"
};

var honolulu = {
  "state": "Hawaii",
  "flag": "hawaiiFlag",
  "nameIs": "Honolulu"
};

var juneau = {
  "state": "Alaska",
  "flag": "alaskaFlag",
  "nameIs": "Juneau"
};

var olympia = {
  "state": "Washington",
  "flag": "washingtonFlag",
  "nameIs": "Olympia"
};

var salem = {
  "state": "Oregon",
  "flag": "oregonFlag",
  "nameIs": "Salem"
};

var sacramento = {
  "state": "California",
  "flag": "californiaFlag",
  "nameIs": "Sacramento"
};

var boise = {
  "state": "Idaho",
  "flag": "idahoFlag",
  "nameIs": "Boise"
};

var carsoncity = {
  "state": "Nevada",
  "flag": "nevadaFlag",
  "nameIs": "Carson City"
};

var phoenix = {
  "state": "Arizona",
  "flag": "arizonaFlag",
  "nameIs": "Phoenix"
};

var helena = {
  "state": "Montana",
  "flag": "montanaFlag",
  "nameIs": "Helena"
};

var denver = {
  "state": "Colorado",
  "flag": "coloradoFlag",
  "nameIs": "Denver"
};

var topeka = {
  "state": "Kansas",
  "flag": "kansasFlag",
  "nameIs": "Topeka"
};

var oklahomacity = {
  "state": "Oklahoma",
  "flag": "oklahomaFlag",
  "nameIs": "Oklahoma City"
};

var santafe = {
  "state": "New Mexico",
  "flag": "newMexicoFlag",
  "nameIs": "Santa Fe"
};

var saltlakecity = {
  "state": "Utah",
  "flag": "utahFlag",
  "nameIs": "Salt Lake City"
};

var cheyenne = {
  "state": "Wyoming",
  "flag": "wyomingFlag",
  "nameIs": "Cheyenne"
};

var atlanta = {
  "state": "Georgia",
  "flag": "georgiaFlag",
  "nameIs": "Atlanta"
};

var madison = {
  "state": "Wisconsin",
  "flag": "wisconsinFlag",
  "nameIs": "Madison"
};

var springfield = {
  "state": "Illinois",
  "flag": "illinoisFlag",
  "nameIs": "Springfield"
};

var indianapolis = {
  "state": "Indiana",
  "flag": "indianaFlag",
  "nameIs": "Indianapolis"
};

var washingtondc = {
  "state": "District of Columbia",
  "flag": "washingtondcFlag",
  "nameIs": "Washington, DC"
}

//setting up the game

function initGame(){

  //reset of initial variables if starting a new game after a previous one

  guessesRemaining = 9;
  currentContest = [];
  wrongLettersUsed = [];
  html1 = "";
  document.querySelector("#cityInfo").innerHTML = html1;

  flagImage = document.getElementById("flagPlaceholder");
  flagImage.setAttribute("src", "assets/images/flag.png");

//selection of different state capital

  computerSelection = stateCapitals[Math.floor(Math.random() * stateCapitals.length)];
  console.log(computerSelection);
  lettersInSelection = computerSelection.split("");
  console.log(lettersInSelection);
  numDashes = lettersInSelection.length;
  console.log(numDashes);

  //setting up the row of dashes

  for(var i = 0; i < numDashes; i++){
    currentContest.push(" _ ");
  }

  console.log(currentContest);

  //Print to the DOM/HTML

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

//helper function for use in examineLetters() to keep wrong letters recorded only once
function inArray(needle, haystack){
  var length = haystack.length;
  for (var i = 0; i < length; i++){
    if(haystack[i] === needle){
      return true;
    }
  } 
}
  
//examine letter input by user to determine if said letter is in capital name

function examineLetters(letter){
  console.log(letter);
  var isLetterInWord = false;
  for (var i = 0; i < numDashes; i++){      //Is letter in the word?
    if(computerSelection[i] === letter){
      console.log(computerSelection[i]);
      isLetterInWord = true;
      console.log(isLetterInWord);
    }
  }

//If letter is in word, put it in row of dashes
  if(isLetterInWord) {
    for(var i = 0; i < numDashes; i++){
      if(computerSelection[i] === letter){
        currentContest[i] = letter;
      }
    }
  }


//If letter is not in word, don't put it in row of dashes
//But do put it in area for wrong letters guessed
//But don't put it in area for wrong letters guessed if it's already there
  else{
    if(!(inArray(letter, wrongLettersUsed) === true)){
      wrongLettersUsed.push(letter);
      guessesRemaining--;
    }
  }
  

  console.log(currentContest);
  console.log(currentContest.join(" "));

  //Print to the DOM/screen

  var html =
        "<p>Press any key to get started</p>" +
        "<p>Wins: " + winCounter + "</p>" +
        "<p>Current Word: " + currentContest.join(" ") + "</p>" +                                    
        "<p>Number of guesses remaining: " + guessesRemaining + "</p>" +
        "<p>Incorrect letters already used: " + wrongLettersUsed + "</p>"; 
        
  document.querySelector("#gameDashboard").innerHTML = html;
  console.log(html);

  //Determine if game has ended: if it has, call wrapUpGame()

  if(lettersInSelection.toString() === currentContest.toString()){
    //If player has won
    html1 = "This city is the capital of " + eval(computerSelection).state + 
    	" and its name is " + eval(computerSelection).nameIs + ".";
    document.querySelector("#cityInfo").innerHTML = html1;
    setTimeout(wrapUpGame, 2000);
    //If player has lost
  } else if(guessesRemaining === 0){
		setTimeout(wrapUpGame, 2000);
  }


}


// Notify player if he/she has won or lost and start a new game
function wrapUpGame(){
  //If player has won
  if(lettersInSelection.toString() === currentContest.toString()){
    winCounter++;
    alert("You won!")
    initGame();
  }

  //If player has lost
  else if(guessesRemaining === 0){
    alert("You lost!");
    initGame();
  }

}




//CALLS  ************************************************************************************
  //Start a game
initGame();

  //Event listener for receiving key input
document.onkeyup = function(event){
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  alert("You pressed: " + letterGuessed);
  examineLetters(letterGuessed);
}

};










