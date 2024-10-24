// we will learn about THIS keyword and arrow functions && immediately invoked function


(function code(){

    // named IIFE
    console.log(`DB connect`);
    
})();

( (name) =>{
    console.log(`Welcome ${name}`);
    
}

)('ANuj')



const user = {
    username: "Hitesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username},  welcome to website`);
        console.log(this);
        
    }
}


// user.welcomeMessage()

// user.username = "Anuj"
// user.price = 1299
// user.welcomeMessage()


console.log(this);      // current context is empty {}

// +++++++++++++++++++++++++++++++ arrow function() +++++++++++++++++++++++++

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);                  
    
// }
// chai()


// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
    
// }

// arrow function is this

const chai = () => {
    let username = "Hitesh"
    console.log(this);
    
}

chai()

// const addThree = (num1, num2) => {
//     return num1 + num2;                         // arrow function
// }


// const addThree = (num1, num2) => num1 + num2                        // arrow function
const addThree = (num1, num2) => (num1 + num2 )                      // arrow function


// console.log(addThree(3,4));
