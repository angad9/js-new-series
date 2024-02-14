const userEmail = "angad@.io"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy value 
// false , 0 , -0, BibInt 0n, "", null, undefined, NaN

//truthy values 
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nulish Coalesing Operator (??): null undefined 

let val1;
val1 = 5 ?? 10

console.log(val1);