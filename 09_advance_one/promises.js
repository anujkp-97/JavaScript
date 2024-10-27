// We are learning here about promises --- go mdn and read it

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        
        console.log('Async task is completed');
        resolve()
        
    }, 1000)
})

// consuming the promise

promiseOne.then(function(){
    console.log("Promise consumed!");
    
})

// second promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(' Async task 2');
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Promise 2 consumed!");
    
})

// third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){

        resolve({username: 'Chai', email: 'chai@example.com'})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user);
    
})


// promise four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: 'url', password: 'url@123'})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// consume

promiseFour.then( (user) => {
    console.log(user);

    return user.username
    
}).then((username) => {
    console.log(username);
    
} ).catch(function(err){
    console.log(err);
    
}).finally(() => console.log("The promise is either resolve or rejected!")
)

// console.log(userName);

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'javascript', password: 'javascript@123'})
        }
        else{
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
});

async function consePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log('Error: in promise 5');
        
    }
    
}

consePromiseFive()


// async function getAllUsers(){
//    try{
//         const response =  fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() 
//         console.log(data);
//    }catch(error){
//     console.log(error);
    
//    }
   
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch( (error) => console.log("Error in fetch data")
)