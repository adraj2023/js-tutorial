let score = "28"

console.log(typeof score);
console.log(typeof (score));

let scoreInNumber = Number(score); // Convert any string to number
console.log(typeof scoreInNumber);


let value = "28abs"
let valueInNumber = Number(value);
console.log(typeof valueInNumber); //Note this
console.log(valueInNumber); //Note this

let nanValue = null
let nanValueNumber = Number(nanValue);
console.log(typeof nanValueNumber);
console.log(nanValueNumber);

let undefinedValue = undefined
let undefinedNumber = Number(undefinedValue);
console.log(typeof undefinedNumber);
console.log(undefinedNumber);





