
"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Dua Hasan
      Date: 10/07/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {

  //add the e.preventDefault() command to prevent the browser form responding to the submit event
  e.preventDefault();

  //Creating variables containing regular expressions
  let regex1 = /[A-Z]/;
  let regex2 = /\d/;
  let regex3 = /[!$#%.]/;
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

  if(pwd.length <8) {
    feedback.innerHTML = "Your password must be at least 8 characters.";

  } else if (!regex1.test(pwd)) {
    feedback.innerHTML = "Your password must include an uppercase letter.";

  }else if (!regex2.test(pwd)) {
    feedback.innerHTML = "Your password must include a number.";

  }else if (!regex3.test(pwd)) {
    feedback.innerHTML = "Your password must include one of the following: !$#%.";

  }else {
    signupForm.onsubmit();
  }

}
);
