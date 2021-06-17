let numberInput = document.getElementById("number-input");
let numberOutput = document.getElementById("number-output");
let numberButton = document.getElementById("number-button");

let romanSymbols = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

function convertToRoman(input, output) {
let num = input.value;
let symbolArray = [];
 
 function romanNumbers(symbol, value) {
  let t = Math.floor(num/value);
  let i = 1;
  while (i <= t){
    symbolArray.push(symbol);
    i++;
    }
  num -= value*t;
}
for (let property in romanSymbols){
  romanNumbers(property, romanSymbols[property]);
}
output.innerHTML = symbolArray.join("");
}
