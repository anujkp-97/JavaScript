// array part-2

const marvel_heros = ['thor', 'ironman', 'spiderman']

const dc_heros = ['superman', 'flash', 'batman']

marvel_heros.push(dc_heros)


// console.log(marvel_heros);

// console.log(marvel_heros[3][2]);

const newArray = marvel_heros.concat(dc_heros)     

// console.log(marvel_heros);           // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(newArray);

const allHeros = [...marvel_heros, ...dc_heros]

// console.log(allHeros);

const num_array = [1,2,3,[4,5,6],[7,8,[9,10]]]

const new_num_array = num_array.flat(Infinity)

// console.log(new_num_array);

// console.log(new_num_array[4]);       // 5    
// console.log(num_array[4]);           // [7,8,[9,10]]

console.log(Array.isArray("Anuj"));
console.log(Array.from("anuj"));
console.log(Array.from({name: "anuj"}));        // empty array

let score = 100
let player = 12
let coach = 2

console.log(Array.of(score, player, coach));









