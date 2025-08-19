const myName = "Raj" // This way we can delcare string
const repoCount = 50

// console.log(myName + myCount + " Phone"); //(concatinate (adding string))

// console.log(`My name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String ('raj-pk') //(Another way to declare string)

// console.log(gameName);
// For this go and watch output in chorme console
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(2));  // Find which character at index 2
// console.log(gameName.indexOf('k')); // Find index for the character

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-6, 2)
// console.log(anotherString);

// const newStringOne = "    RajKoradiya     "

// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove unwanted spaces

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));


const url ="https://raj.com/raj koradiya"

console.log(url.replaceAll(' ', '_'))

console.log(url.includes("raj"));
console.log(url.includes("harsh"));

// ==== split =====
const str = "The quick brown dog.";

const strCopy = str.split(" ");
console.log(strCopy);

const words = str.split(" ");
console.log(words[3]);

const chars = str.split("");
console.log(chars[8]);


 
