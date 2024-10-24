// date

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


console.log(typeof myDate);     // object 

let anotherDate = new Date(2023, 1, 12)
// console.log(anotherDate.toDateString());

let createdDate = new Date("01-05-2024")
// console.log(createdDate.toLocaleDateString());

console.log(Math.round(Date.now()/1000));

console.log(anotherDate.getDate());







