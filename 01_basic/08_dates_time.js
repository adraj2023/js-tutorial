// Dates


let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 26)
// let myCreatedDate = new Date(2025, 0, 26, 10, 5)
let myCreatedDate = new Date("2025-09-28")

// console.log(myCreatedDate.toLocaleString());


let myTimeStap = Date.now()

// console.log(myTimeStap);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate.toLocaleString());

// console.log(newDate.getMonth() + 1); //in js month count start from 0 so we need to add 1 for exct value

// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})







