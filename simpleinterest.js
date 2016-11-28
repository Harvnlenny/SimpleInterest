$(function() {

 var principle = Number(prompt("Enter the principle."));

 if (isNaN(principle)) {
    parseInt(prompt("You did not enter a number. Please Enter the principle as a number."))
 }
 var interest = Number(prompt("Enter the rate of interest."));
 var time = Number(prompt("Enter the number of years."));
 var investment = Number(principle*(1 + (interest / 100 * time)));
 document.write('After ' + time + ' years at ' + interest + '%, the investment will be worth $' + investment +'.')

 })