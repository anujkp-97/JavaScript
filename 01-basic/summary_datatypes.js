// Primitive -- 7 types

// String, Number, Boolean, null, undefined, Symbol(Value Unique), BigInt

// Reference (Non Primitive) -- Array, Objects, Functions

const heros =['shaktiman', 'nagraj', 'doga']
console.log(heros);

let person ={
    name: "Anuj", 
    age: 23,

}
console.log(person);

const myfunc = function(){
    console.log("Hello function");
    
}
myfunc()

console.log(typeof heros);
console.log(typeof myfunc);

// Return type of variables in JavaScript
/* 
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/




// JS is a dynamically type language

