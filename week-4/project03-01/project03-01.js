/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Dua Hasan
      Date: 09/04/2024

      Filename: project03-01.js
*/

// Declare variable that retrieve all elements with the class "menuItem"
let menuItems = document.getElementsByClassName("menuItem");

// Loop through the menuItems collection
for (let i = 0; i < menuItems.length; i++ ) {
  menuItems[i].addEventListener("click",calcTotal);
}

// Function to calculate the total cost
function calcTotal() {

// Declare the orderTotal variable
let orderTotal = 0;

for ( i = 0; i < menuItems.length; i++) {
  if(menuItems[i].checked){
    orderTotal += (Number(menuItems[i].value) * 1)
  }
}
document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}



 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
  return "$" + value.toFixed(2);
}