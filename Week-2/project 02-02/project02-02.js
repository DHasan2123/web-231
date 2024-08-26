
/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Dua Hasan
      Date: 08/22/24

      Filename: project02-02.js
 */

function verifyForm() {
  // Declare the variables and get hte values from the input controls
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  // Use a conditional operator to check if all fields are filled
  var message = (name && email && phone) ? "Thank you!" : "Please fill all fields";

  // Display the appropriate message
  window.alert(message);
}

//Attach an event listener to the element with id 'submit'
document.getElementById('submit').addEventListener('click',verifyForm);

