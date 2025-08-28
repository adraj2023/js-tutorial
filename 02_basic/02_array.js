const marvelHeros = ["Thor", "IronMan", "SpiderMan"]

const dc_heros = ["SuperMan", "BatMan", "Flash"]


// marvelHeros.push(dc_heros); () // update a value in old values
// console.log(marvelHeros);
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);


const all_heros = marvelHeros.concat(dc_heros) // Give new array and value
// console.log(marvelHeros)
// console.log(all_heros);


// ==== Spread (easy to use for multiple value)=======

const all_new_heros = [...marvelHeros, ...dc_heros]
// console.log(all_new_heros);


// nested array

const nested_array = [1, 2, 3,[4, 5, 6], 7, [6, 8,[4, 5,[6, 7, [3, 5, 7]]]]]

const usable_nested_array = nested_array.flat(Infinity) //(use also number for how many dept you want to flat in place of infinity)
// console.log(usable_nested_array);


// console.log(Array.isArray("Raj")) // ask is array or not

// To convert in to array
// console.log(Array.from("Raj")) 

// console.log(Array.from({name: "raj"})) // is nopt able to convert direct in to array for object we need to clearify

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



