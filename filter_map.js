// reduce in this lecture, map, loops


// const coding =['js', 'ruby', 'python', 'java', 'cpp', '.net']

// const values = coding.forEach( (item) => {
//     // console.log(item);                           // this loop does not return the value
//     return item;
    
// })

// console.log(values);


const myNum =[1,2,3,4,5,6,7,8,9]

// const newNum = myNum.filter( (num) => num>4 )           // filter = forEach with return value
// console.log(newNum);                                     // [5,6,7,8,9]


const newNum = []

// myNum.forEach( (num) => {

//     if(num >4){
//        newNum.push(num)
//     }

// } )     

// console.log(newNum);



//  ===================== filters ==============

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 20024},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1995, edition: 2005},
    {title: 'Book Three', genre: 'Sci-Fi', publish: 2002, edition: 2010},
    {title: 'Book Four', genre: 'Fantasy', publish: 2010, edition: 2015},
    {title: 'Book Five', genre: 'Mystery', publish: 1999, edition: 2008},
    {title: 'Book Six', genre: 'History', publish: 1988, edition: 1992},
    {title: 'Book Seven', genre: 'Self-Help', publish: 2005, edition: 2009},
    {title: 'Book Eight', genre: 'Horror', publish: 2015, edition: 2020},
    {title: 'Book Nine', genre: 'History', publish: 1990, edition: 1995},
    {title: 'Book Ten', genre: 'Fantasy', publish: 2020, edition: 2022}
];

// let userBooks = books.filter( (bk) => bk.genre ==='History' )

//  userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000  && bk.genre === 'Fantasy'
// } )


// console.log(userBooks);

// next chapter ==============================================================
const nums = [1,2,3,4,5,6]

// const newNums = nums.map( (num) => num+10)
// console.log(newNums);


const newNums = nums.map( (num) => num*10)
                    .map( (num) => num+1)
                    .map( (num)=> num *2 )                              // chaining with map and filter
                    .filter( (num) => num > 60 )   

//console.log(newNums);

// next chapter =========================reduce -- used in shopping cart =====================================

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);


const number = [1,2,3]

// myTotal = number.reduce( function (acc, curr) {
//     console.log(acc, curr);
    
//     return acc + curr;
// }, 0 )

//     short of above code

// myTotal = number.reduce( (acc, curr) => (acc + curr), 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js course',
        price : 999
    },
    {
        itemName: 'MERN course',
        price : 2999
    },
    {
        itemName: 'DSA course',
        price : 1999
    }

]


const price = shoppingCart.reduce( (acc, item) => (acc + item.price) , 0)

console.log(price);

