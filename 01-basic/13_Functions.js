// Lecture - 1 function

function sayMyName(){
    console.log("A")
    console.log("n")
    console.log("u")
    console.log("j")
}

// sayMyName()

// function addTwo(a, b){
//     console.log(a + b);
    
// }   

function addTwo(a, b){
   let result = a + b;
   
   return result;
}   

// const res = addTwo(2, 3);
// console.log(res);

function loginusermessage(username) {
    if (username === undefined){
            console.log("Please enter user-name!");
            return;            
    }
    return `${username} just logged in`
}


// console.log(loginusermessage("Anuj"));

// =========================== Lecture-2 ==============================

function cartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(cartPrice(200,300,500,700, 1000));


function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject({
    username: "Anuj",
    price :499
})

const myArray =[200, 400, 300, 600]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myArray));

// console.log(returnSecondValue(myArray));

// Lecture - 3 , Scope

// if(true){
    
//         let a = 10          // scope is within the curly-braces
//         const b = 20        // scope within curly-braces
//         var c = 30          // scope outside the braces, do not use this 
// }

// console.log(a);
// console.log(b);
// console.log(c);


// let a = 300

// if(true){
//     let a = 200
//     // console.log(a);
    
// }

// console.log(a);


function one(){
    const username = "anuj"

    function two(){
            const website = "youtube"
            console.log(username);
            
    }
    // console.log(website);

    two()
    
}

one()


if(true){
    username = "anu"

    if(username === "anu"){
        const website = "google"

        console.log(username + "@" + website + ".com");
        
    }
}


// ================ interesting ==============


function addone(num){
    return num + 1;
}

console.log(addone(4));

// console.log(addtwo(5));         // error here initilization before.

const addtwo = function addtwo(num){
    return num + 2;
}






