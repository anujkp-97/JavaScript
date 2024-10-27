// 
 let myName = "anuj       "

// // console.log(myName.trim().length);

// console.log(myName.trim().length);

//console.log(myName.trueLength);



let myHeros = ['thor', 'spiderman', 'bhagatsingh']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    bhagatsingh: 'ahinsa',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects");
    
}


Array.prototype.heyAnuj = function(){
    console.log('Hey, Anuj you are who?');
    
}
// heroPower.hitesh()

myHeros.heyAnuj()
// heroPower.heyAnuj()
myHeros.hitesh()



const User = {
    name: "chai",
    email: "chai@example.com"
}


const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modetn syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`${this}`);

    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUserName.trueLength()
"anuj".trueLength()
"kumar      ".trueLength()