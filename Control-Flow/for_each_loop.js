// for-each loop


const coding =['js', 'ruby', 'python', 'java', 'cpp', '.net']

// coding.forEach( function (item) {

// } )

// for(const c of coding){
//     console.log(coding);
    
// }


// coding.forEach( function (item){
//     console.log(item);                              // for-each loop
    
// } )


// arrow function

// coding.forEach( (item) => {
//         console.log(item);                             // for-each with arrow function
        
// } )


function printMe(item){
    console.log(item);
    
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
        // console.log(item, index, arr);
        
} )

const myCoding = [
    {
        langName: 'JavaScript',
        filename: 'js'
    },
    {
        langName: 'Java',
        filename: 'java'
    },
    {
        langName: 'Python',
        filename: 'python'
    }
]

// console.log(myCoding[0]);

myCoding.forEach( (item) =>{

    console.log(item.langName , ":- ", item.filename);                 // JavaScript, Java, Python
    //console.log(item.filename);                 // JavaScript, Java, Python
    
} )