$(function() {

 var principle = Number(prompt("Enter the principle."));
 var interest = Number(prompt("Enter the rate of interest."));
 var time = Number(prompt("Enter the number of years."))
 var investment = parseInt(principle*(1 + (interest * time)));
 console.log('After ' + time + ' years at ' + interest + '%, the investment will be worth $' + investment +'.')
 
 })