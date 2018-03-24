

// List of Words only
var wins = 0;
var losses = 0;
var ResetStartGuesses = 20;
var CountOfMissedGuesses = 0;
var RemainingGuesses = 20;
var misses = 0;
var validGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wordLetterCount = 0;
var WordAnswerDashes = [];

var words = ["Kimchi","Bibimbap","Bulgogo","Japchae","Hoeddeok",
                "Ddukbokkie","Samgyeopsal","Chimaek","Tteokbokki"]

// List of Words 
    var WordListDetl = {
        "Kimchi":"Fermented Vegetable",
        "Bibimbap":"Mixed Rice",
        "Bulgogi":"Marinated Beef Barbecue",  
        "Japchae":"Stir Fried Noodles",
        "Hoeddeok":"Sweet Syrupy Pancakes",
        "Ddukbokkie":"Spicy Rice Cake",
        "Samgyeopsal":"Noodles and Pork",
        "Chimaek":"Fried Chicken and Beer",
        "Tteokbokki":"Nobody knows don't ask"
      };


// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
//       var userInput = String.fromCharCode(event.which).toLowerCase();

// This function is run whenever the user presses the first key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
        var userGuess = event.key;

    // Generate random number limited by word array length
        var randNum = Math.floor(Math.random() * words.length); // not with +1 like: var randNum = Math.floor(Math.random() * words.length) + 1;

    // Use random number as item number in word array to select the actual word
        var computerGuess = words[randNum];

    // Set up the answer array
    var WordAnswerDashes = [];
    for (var i = 0; i < computerGuess.length; i++) {
        WordAnswerDashes[i] = "_";
    }
    var LettersToGuess = computerGuess.length;

        console.log(LettersToGuess);
        console.log(WordAnswerDashes);

    // send output to html id tags NOT PART OF FINAL VERSION!
    document.getElementById("demo0").innerHTML = userGuess;
    document.getElementById("demo1").innerHTML = randNum;
    document.getElementById("demo2").innerHTML = computerGuess;

    var html =
    "<hr>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<hr>" +
    "<p>You chose: " + userGuess + "</p>" +
    "<hr>" +
    "<p>The computer chose: </p>" +
    "<p>Take a guess >>: " + WordAnswerDashes + "</p>" +
    "<hr>" +
    "<p>misses: " + misses + "</p>";
  
          // Set the inner HTML contents of the #game div to our html string
          document.querySelector("#game").innerHTML = html;

  
};

  
// Start Clock Function

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// End Clock Function


