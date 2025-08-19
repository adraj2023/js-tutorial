 "use strict" // trate all JS code as newer version

//  alert(3 + 3);  // We are using node not browser so it not working

// =========== DataTypes ==============
//  ==> How to stroe and how to access according to this there is two type of DataTypes
// 1. Primitive  (call by value)
// 2. Non Primitive  (call by refrence)

// 1. Primitive  value

// 1. number => range 2 to power
// 2. bigint
// 3. string => "" or ''
// 4. boolean => true/fasle
// 5. null => standalone value (N/A)
// 6. Undefined => 
// 7. symbol => unique value

let fname = "Raj"; //string
let age = 29; //number
let isLoggedIn = true; // boolean
let state; //undefined
let city = null; //null

// console.log(typeof age);

// console.log(typeof null); // result is object

// console.log(typeof undefined); // result is undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId );



// 2. Non Primitive  (refrence)
// array
// objects
// functions

// const heros = ["shaktiman", "hatim", "doga"];
// let myObj = {
//     myName: "Raj",
//     age: 29
// }

const myFunction = function(){
    console.log("Hello World");    
}

console.log(typeof myFunction);
