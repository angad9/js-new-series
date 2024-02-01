// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Angad",
    "full name": "Angad Magar",
    [mySym]: "mykey1",
    age: 21,
    location: "pune",
    email: "magaranga2@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "magarangad232@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "angadpatil@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
