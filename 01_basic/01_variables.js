const accountId = 144553 //this is constant value and vairi
let accountEmail = "magarangad2@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 //not allowed

accountEmail = "magar2@gmail.com"
accountPassword = "2563526"
accountCity = "Hyd"

console.log(accountId);

/*
Prefer not to use var
beacause of issue in block scope and functional acope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
