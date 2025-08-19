// 1. Stack memory
    // ========= all type of Primitive data type =========
    // in primitive we have copy of this data type 

// 2. Heap memory
    // ========= all type of Non Primitive data type =========
    // in Non primitive we have original refrence of this data type 

//====== 1. Stack memory ======
let myYoutubename = "rajkoradiya"

let anotherName = myYoutubename
anotherName = "harshvaghani"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne  
// console.log(userTwo.email);

userTwo.email = "test@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

    