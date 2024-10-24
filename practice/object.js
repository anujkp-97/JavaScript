// practice object and see different ways to create an object

/*

*/

let user = {
    id : '123cf5',
    username: {
        firstname: 'Jakkie',
        lastname: 'Singh'
    },
    age: 23,
    isLogIn: false,
    address: {
        country: 'USA',
        state: 'California',
        street: 'Dalalstreet'
    }

}

// console.log(user);

// console.log(user.username);
// console.log(user.address);
// if(user.address.country == 'USA' && user.age >20) {
//         console.log('Current user is from America, age is above 20');
        
// }


let user2 = new Object()
user2.name = "Anuj"
user2.age = 24
user2.country = 'India'

console.log(user2);

console.log("firstname" in user2);      // checking the property exist or not

console.log(user2.hasOwnProperty("name"));

