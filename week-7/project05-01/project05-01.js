
"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Dua Hasan
      Date: 09/23/24

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];


// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

//variables
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

//Add an onclick event
startQuiz.onclick = function() {
  //overlay object's class is "showquiz"
  overlay.className = "showquiz";

  //countdown function will run after every 1000ms (1s)
  timeID = setInterval(function theInnerFunc (){
    countdown();
  }, 1000);
};

//countdown function
function countdown() {
  if (timeLeft === 0) {
    clearInterval(timeID);
    let totalCorrect = checkAnswers();
    if (totalCorrect === correctAnswers.length){
      window.alert("congratulation, you scored 100%!")
    } else {
      window.alert(`Number of wrong answers, that you did, are: ${questionList.length - totalCorrect}`);
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
    }
  } else {
    //otherwise, subtract 1 from timeLeft
    timeLeft = timeLeft - 1;
    quizClock.value = timeLeft;
  }
}





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}
