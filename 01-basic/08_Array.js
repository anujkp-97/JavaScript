// array sikhte ha chalo
// array copy operation create shallow copies

const myArr = [0,1,2,3,4,5]
const heros = ['Shaktiman', 'Naga', 'Bhemo']

const arr = new Array(1,2,3,4)
// console.log(arr);

// console.log(heros);



console.log(myArr);

// ========================================== methods of array ======================================

// myArr.push(6)
// myArr.push(7)
// console.log(myArr.length);
// myArr.pop()

// myArr.unshift(9)     // add element at start of an array by shifting, not optimized approach
// myArr.shift()       // delete element from the start


// console.log(myArr.includes(5));          return type is boolean  
// console.log(myArr.indexOf(1));

const newArr = myArr.join()         // It change the return type of an array

// console.log(newArr);
// console.log(typeof newArr);         // string



console.log(myArr);


// slice() and splice()

console.log("A ", myArr);

const nAr = myArr.slice(1,4)
console.log(nAr);

console.log("B ", myArr);

console.log("====================splice============================");

// original array manipulate by splice

const aBr = myArr.splice(0,3)
console.log(aBr);               // 0,1,2

console.log("C ", myArr)       // 3,4,5






