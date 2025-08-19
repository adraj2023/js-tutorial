// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// ======= Avoid this type of comparison ======
// console.log(null > 0);
// console.log(null == 0); // check only value
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);
// ===============================

//  The equality check == and comparisons < < >= <= work differently.
// Comparision convert null to a number treating it as 0
//  that's why (3) null >= 0 is true and (1) null > 0 is false

// === (triple equal) check value and data type also

console.log("2" == 2); // check value only (so convesrion allow and result true)
console.log("2" === 2); // check value and data type (so result is false)
