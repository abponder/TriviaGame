(function() {
    var myQuestions = [
      {
        question: "Where is Salzburg?",
        answers: {
          a: "Orlando, FL",
          b: "Australia",
          c: "Austria"
        },
        correctAnswer: "c"
      },
      {
        question: "What is a Salzbury Steak?",
        answers: {
          a: "A wooden steak",
          b: "A wooden steak in Salzbury",
          c: "Actually, a Salisbury Steak"
        },
        correctAnswer: "c"
      },
      {
        question: "Sound of music was filmed in What city?",
        answers: {
          a: "Salisbury England",
          b: "Paris, TX",
          c: "Lot B, Universal",
          d: "Salzburg, Austria"
        },
        correctAnswer: "d"
      }
    ];
  
    // Start count down
    var audio = new Audio("assets/images/explosion.mp3");
    var endtime = setTimeout(timeUp, 1000 * 17);
    
    function timeUp() {
       $("#endTitle").html("<h1 id='endTitle2';><strong>Time's Up!</strong></h1>");
        audio.play();
        showResults();
        }

    function timeUp2() {
        clearTimeout(endtime);
        }

    // Start count down
    //<p>Seconds remaing to choose your answer:   <span id="countdowntimer">10 </span> Seconds</p>
     var timeleft = 16;
     var questionTimer = setInterval(function(){
     timeleft--;
     document.getElementById("countdowntimer").textContent = timeleft;
     if(timeleft <= 0)
          clearInterval(questionTimer);
     },1000);

    // End count down


    function triviaGame() {
      // save the HTML output
      var output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {   // => same as 
        // save answer choices
        var answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // combine string HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    /// Submit Button <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    function showResults() {   
      // Stop the clock
      clearInterval(questionTimer);
      timeUp2();

      // disable the buttons
      //$("input[type=radio]").attr('disabled', true); // same as below
      $("input:radio").attr('disabled', true);
      //$(".second").attr('disabled', true);

      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll(".answers"); 
        
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        var answerContainer = answerContainers[questionNumber];  
        var selector = `input[name=question${questionNumber}]:checked`;  
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;   //**** */
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    var quizContainer = document.getElementById("quiz");   //**** */
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
  
    // display first question
    triviaGame();



    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    currentSlide = 0; // let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);



})();




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


