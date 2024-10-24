// for of loop ----- these loops are array specific
// for in loop ----- not for map iteration, use for_of loop

const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);                                    // It is like for-each loop of java
                                                            // of -- in :- in will give the value of index here
    
// }

const states = ["Maharashtra", "Tamil Nadu", "Karnataka", "Gujarat", "West Bengal"]

for(const state of states){
    // console.log(state);
    
}

// Maps

const map = new Map()           // Map objects are collection of key-value pairs
                                // Map is not Iterable
map.set('IN', "India")
map.set('UK', 'United Kingdom')
map.set('US', 'United States')

// console.log(map);

for(const key in map    ){
    console.log(key);                   // print nothing becz map are not iterable
    
}

for(const [key, value] of map){
   // console.log(key, ":- "+ value);
    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA6',
    'game3' : 'Cricket-worldcup'
}

// for(const [key, value] of myObject){
//     console.log(key, value);                         // object are not iterable like map
    
// }

for(const key in myObject){
    //console.log(key);
    //console.log(myObject[key]);                   //NFS
                                                            
}




