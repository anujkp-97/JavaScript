// control flow

const isLoggedIn = false

// if (isLoggedIn) {
//    console.log("Yes, I am in.");
   
// }

// if( 2 === "2"){                         // === :- this check strictly check the equality, like typeof data
//     console.log("Executed..");
    
// }

// const age = 19

// if (age >= "18") {
//     console.log("Eligible to vote!!");
    
// }else{
//     console.log("Not eligible to vote");
    
// }



// =====shorthand notation========

const balance = 1000

// if(balance >100) console.log("test");
// else console.log("not test");

const loggedIn = true
const debitCard = true
const loginGmail = true
const loginFacebook = false


// if (loggedIn && debitCard) {
//     console.log("Allow to buy anything...");
    
// }

// if(loginGmail || loginFacebook){
//     console.log("Login Successfully!!");
    
// }

const age = "April"

switch (age) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("not match ");
        
        break;
}
