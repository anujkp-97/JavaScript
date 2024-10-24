const accountId = 12345
var accountEmail = "anuj.mbd@gmail.com"
let accountPassword = "anuj123"
accountCity = "Delhi"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
console.log("Changed value")

accountEmail = "anuj@gmail.com"
accountPassword = "aaaaaaaaa"
accountCity = "Noida"

console.table([accountEmail, accountPassword, accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
