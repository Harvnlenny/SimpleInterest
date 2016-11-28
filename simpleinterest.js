$(function() {

 var principle = Number(prompt("Enter the principle."));


 if (isNaN(principle)) {
    parseInt(prompt("You did not enter a number. Please enter the principle as a number."))
 }
 var interest = Number(prompt("Enter the rate of interest."));

 if (isNaN(interest)) {
    parseInt(prompt("You did not enter a number. Please enter the rate of interest as a number."))
 }
 var time = Number(prompt("Enter the number of years."));

 if (isNaN(time)) {
    parseInt(prompt("You did not enter a number. Please enter the number of years as a number."))
 }
 var investment = Number(principle*(1 + (interest / 100 * time)));
 document.write('After ' + time + ' years at ' + interest + '%, the investment will be worth $' + investment +'.')

 })