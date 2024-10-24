//  In JavaScript, an object is a collection of key-value pairs where each key (or property) is associated with a value. 


// singletion

// const tinderUser = new Object()     // singelton object


const tinderUser = {}

tinderUser.id = "12acB"
tinderUser.name = "Pratap Singh"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regular_user = {
    email: "someIndia@gmail.com",
    fullname: {
        userfullname : {
            firstname: 'Some',
            lastname: 'Singh'
        }
    }
}

// console.log(regular_user.fullname.userfullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




