// array
const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr);

const myHero = ["Ramji", "Hanumandada", "Mahadev"]

const myArr2 =new Array(1, 2, 3, 4, 5)

// console.log(myArr2[1])


// Array method

myArr.push(6) // Add value in array at last
myArr.pop() // Remove value in array at last
myArr.unshift(6) //Add value in array at first positon
myArr.shift() //Remove value in array at first positon
// console.log(myArr);

// console.log(myArr.includes(9)); // find value and give ans in boolean 
// console.log(myArr.indexOf(2)); // index of value


const newArr = myArr.join()

// console.log(typeof myArr); 
// console.log(typeof newArr); // convert this in to string 


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // start from index 1 and last is not include

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // start from index 1 and include last index but it manuplate main array (Remove this range from array)
console.log("C", myArr);
console.log(myn2);












