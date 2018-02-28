//global variables, objects, calls


/* some sample code from rock/paper/scissors
var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;


document.onkeyup = function(event) {


  var userGuess = event.key;


  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    if ((userGuess === "r") && (computerGuess === "s")) {
      wins++;
    } else if ((userGuess === "r") && (computerGuess === "p")) {
      losses++;
    } else if ((userGuess === "s") && (computerGuess === "r")) {
      losses++;
    } else if ((userGuess === "s") && (computerGuess === "p")) {
      wins++;
    } else if ((userGuess === "p") && (computerGuess === "r")) {
      wins++;
    } else if ((userGuess === "p") && (computerGuess === "s")) {
      losses++;
    } else if (userGuess === computerGuess) {
      ties++;
    }


    var html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>The computer chose: " + computerGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>";

    document.querySelector("#game").innerHTML = html;
  }
};
*/

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

var guessesRemaining = x; //how to initialize?

var wrongLettersUsed = [];


