// ================= Conversions ==========
let score = "28"

// console.log(typeof score);
// console.log(typeof (score));

let scoreInNumber = Number(score); // Convert any string to number
// console.log(typeof scoreInNumber);


let value = "28abs"
let valueInNumber = Number(value);
// console.log(typeof valueInNumber); //Note this
// console.log(valueInNumber); //Note this

let nanValue = null
let nanValueNumber = Number(nanValue);
// console.log(typeof nanValueNumber);
// console.log(nanValueNumber);

let undefinedValue = undefined
let undefinedNumber = Number(undefinedValue);
// console.log(typeof undefinedNumber);
// console.log(undefinedNumber);

let booleanValue = true
let booleanInNumber = Number(booleanValue);
// console.log(typeof booleanInNumber);
// console.log(booleanInNumber);


let isLoggedIn = 1;

let booleanLoggeIn = Boolean(isLoggedIn);
// console.log(booleanLoggeIn);

// 1 => true, 0 => false
// "" => false
// "Raj" => true

let someNumber = 22
let stringNumber = String (someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ============== Orations ==============
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3); //(2 power 3)
// console.log(2%3); //(modul)

// let str1 = "Hello";
// let str2 = " Raj"
// let str3 = str1 + str2;

// console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");




