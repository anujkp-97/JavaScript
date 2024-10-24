// important topic object and events, we learn object

// singleton -- construction method ke through -- using create

    // Object.create()

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name : "anuj",
    age: 18,
    [mySym] : "Key1",
    location: 'Jaipur',
    email: 'anuj@microsoft.com',
    isLoggedIn : false,
    lastLogIn: ['Monday', 'Saturday'],
    "fullName" : 'anuj pal'
}

jsUser.greeting = function(){
    console.log("Hello js user");
    
}
jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.fullName} `);
    
}

console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());







// console.log(typeof jsUser[mySym]);


// access

// console.log(jsUser.email);

// console.log(jsUser['email']);
// console.log(jsUser.fullName);


