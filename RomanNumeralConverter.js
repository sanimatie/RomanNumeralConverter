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

function convertToRoman(num) {
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
return symbolArray.join("");
}
