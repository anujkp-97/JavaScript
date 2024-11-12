const fruits = ['banana', 'kela', 'anar', 'chiku']
// console.log(fruits); // 'mango'

// console.log(fruits.reverse());

const sbji = ['bhindi', 'loki', 'pyaaz']

const fruits_sbji = fruits.concat(sbji)

// console.log(fruits_sbji);

// console.log(fruits_sbji.sort());

const iterator = fruits_sbji.keys()

// for (const key  of iterator){
//     console.log(` ${key}: ${fruits_sbji[key]}`);
    
// }

// console.log(Array.from([1,2,3], (x) => x +x));

const set = new Set('foo', 'age', 'foo', 'hive')

// console.log(Array.from(set));

Array.from(set)
