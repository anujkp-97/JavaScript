

const userEmail = []

// if (userEmail) {
//     console.log("Got user Email");
    
// }
// else{
//     console.log("Don't have user Email");
    
// }


// === falsy value ===

// false, 0, -0, BigInt 0n, "", null, undefined, NaN,

// === truthy value ===

// "0", 'false', " ", [], {}, function(){}(empty function), 

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
        
// }

const empObj = {}

// if(Object.keys(empObj).length === 0){
//     console.log("Empty object");
    
// }


// ----> Nullish coalescing operator (??)

function add(){
    console.log("Error 404 Page");
    
}

let val1;

// val1 =  5 ?? 10

// val1 = 2 ?? add()

val1 = undefined ?? 10 ?? 20

console.log(val1);


// Ternary operator

// Condition ? true : false

const teaPrice = 70

// teaPrice >=80 ? console.log("Let's Purchase it!!") : console.log("Move forward!!");
 
