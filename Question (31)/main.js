//____________________________________________________________________________________
//                            * Question No 31 *
//____________________________________________________________________________________
var userName = ["Ali", "Bilal", "Rafay"];
userName.pop();
userName.pop();
userName.pop();
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    userName.forEach(function (username) {
        return console.log("Hello ".concat(username, "! Thank you for logging in again"));
    });
}
////-----------------------------------------------------------------
// Result 31 = We need to find some users!
////-----------------------------------------------------------------
