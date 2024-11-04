let num1;
let num2;
let num3;
let num4;
let isValid = true;

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

while (isValid){
  // Assign Random Numbers
    num1 = getRandomInt(0,25);
    num2 = getRandomInt(0,25);
    num3 = getRandomInt(0,25);
    num4 = getRandomInt(0,25);
  // Check Conditions
    const isDiv5 = (num1 % 5) + (num2 % 5) + (num3 % 5) + (num4 % 5) == 0;
    const isFOverL = num1>num4;
    const isTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2;
    const isOver25 = !(num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25);
    const isUnique = num1 != num2 && num1 != num3 && num1 != num4 && num2 != num3 && num2 != num4 && num3 != num4;
    const isSum50 = num1 + num2 + num3 + num4 == 50;
  // Condition to Exit Loop
    isValid = !(isSum50 && isTwoOdd && isOver25 && isUnique && isDiv5 && isFOverL);
}

aChain = ((num1 - num2) * num3) % num4;

document.querySelector('h2').innerHTML = `<h2>Num1 = ${num1} <br>Num2 = ${num2} <br> Num3 = ${num3} <br> Num4 = ${num4} 
  <br> Arithmetic Chain = ${aChain}</h2>`;
console.log(`Num 1 = ${num1}, Num 2 = ${num2}, Num 3 = ${num3}, Num 4 = ${num4}`);

// Part 2
const tripTotal = 1500;
const fuelBudget = 175;
const fuelCost = 3; // Dollars Per Gallon
let speed1 = 55 // Miles per Hour
let speed2 = 60 // Miles per Hour
let speed3 = 75 // Miles per Hour
let fuelEfficiency1 = 30 // Miles per Gallon
let fuelEfficiency2 = 28 // Miles per Gallon
let fuelEfficiency3 = 23 // Miles per Gallon

let gallons;
let time;
let budget

function TripCalculator(speed, fuelEfficiency){
  time = Math.floor(tripTotal/speed);
  gallons = Math.floor(tripTotal/fuelEfficiency);
  budget = (fuelCost*gallons)<=fuelBudget;
}

TripCalculator(speed1,fuelEfficiency1);
document.querySelector('.a').innerHTML = `<h3>Going 55 Miles per Hour<br>Gallons of Fuel for the Entire Trip = ${gallons}
  <br> It is within our budget = ${budget}
  <br> The trip will take ${time} hours.</h3>`;

TripCalculator(speed2,fuelEfficiency2);
document.querySelector('.b').innerHTML = `<h3>Going 60 Miles per Hour<br>Gallons of Fuel for the Entire Trip = ${gallons}
  <br> It is within our budget = ${budget}
  <br> The trip will take ${time} hours.</h3>`;

TripCalculator(speed3,fuelEfficiency3);
document.querySelector('.c').innerHTML = `<h3>Going 75 Miles per Hour<br>Gallons of Fuel for the Entire Trip = ${gallons}
  <br> It is within our budget = ${budget}
  <br> The trip will take ${time} hours.</h3>`;