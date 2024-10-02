
"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Dua Hasan
      Date: 09/30/2024

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling());

// Create function that copies values from the shipping fields to corresponding billing fields

function copyShippingToBilling() {
  if (useShip.checked) {
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;

    // Copy selected index for state fields
    document.getElementById('stateBill').selectedIndex = document.getElementById('stateShip').selectedIndex;
  }
}

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

//for loop that iterates through iterates through each element in the formElements node list
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// create showValidationError(evt) function
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}

document.getElementById('form').addEventListener("submit", function(evt) {
  for (let i = 0; i < fieldCount; i++){
    if (!formElements[i].checkValidity()) {
      evt.preventDefault();
      showValidationError(evt);
      break;
    }
  }
} );