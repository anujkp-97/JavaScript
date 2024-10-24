let score = 400
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(typeof score);      // number
// console.log(typeof balance); // object

// console.log(typeof balance.toString());  // string
// console.log(balance.toString().charAt(1));  // 0

// console.log(balance.toFixed(3));     // 200.000 precision value

const otherNum = 223.8799

// console.log(otherNum.toPrecision(3));    // 224

const hund = 10000000
// console.log(hund.toLocaleString('en-IN'));   // 1,00,00,000



// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));   // 4

console.log(Math.round(4.6))    // 5
console.log(Math.ceil(4.1));    // 5
console.log(Math.floor(4.8))    // 4
console.log(Math.pow(3,2));     // 9
console.log(Math.min(3,4,1,2,9));
console.log(Math.max(8,7,1,4,2));

console.log("+++++++++++++++++++++++++++++++++++++++");

console.log((Math.random()*10) +1);         // random gives value between 0 and 1
console.log(Math.round((Math.random()*10)) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)   














