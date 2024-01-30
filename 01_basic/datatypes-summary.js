// primitive 

// 7 types : String , Number, Boolean, null, undefined, Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2733265327825n





// Referance (Non Primitive )

// Array, Objects, Functions


//Array
const heros = ["shaktiman", "naagraj", "doga"]


//object
let myObj = {
    name: "Angad",
    age: 21,
}


//Function
const myFunction = function(){
    console.log("Hello Duniya");

}


//++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myNameIs = "AngadMagar"

let anothername = myNameIs
anothername = "chaiaurcode"

console.log(myNameIs);
console.log(anothername);

let userOne = {
    email: "user123@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne




