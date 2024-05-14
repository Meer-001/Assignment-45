//____________________________________________________________________________________
//                            * Question No 32 *
//____________________________________________________________________________________
var current_users = ["ali", "usman", "bilal", "ibrahim", "rameez"];
var new_users = ["ismail", "ali", "bilal", "irfan", "ismail"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("This username :".concat(newUser, ": is already used! Enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available. "));
    }
});
////-----------------------------------------------------------------------
// Result 32 = We need to find some users!
//             ismail is available. 
//             This username :ali: is already used! Enter a new username.
//             This username :bilal: is already used! Enter a new username.
//             irfan is available.
//             ismail is available.
////------------------------------------------------------------------------
