let num1;
let num2;
let num3;
let num4;

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

while (isValid){
    num1 = getRandomInt(0,25);
    num2 = getRandomInt(0,25);
    num3 = getRandomInt(0,25);
    num4 = getRandomInt(0,25);
    const isDiv5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
    const isFOverL = num1>num4;
    const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
    const isOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
    const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
    const isValid = isSum50 && isTwoOdd && isOver25 && isUnique && isDiv5 && isFOverL;
}
document.body.innerHTML = `<h2>Num 1 = ${num1}, Num 2 = ${num2}, Num 3 = ${num3}, Num 4 = ${num4}</h2>`;
