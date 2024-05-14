//____________________________________________________________________________________
//                            * Question No 30 *
//____________________________________________________________________________________
var userNames = ["Admin", "Ali", "Rameez", "Rafay", "Bilal"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var username = userNames_1[_i];
    if (username === "Admin") {
        console.log("Hello Admin! Would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ",thank you for logging in again"));
    }
}
////-----------------------------------------------------------------
// Result 29 = Hello Admin! Would you like to see a status report?
//             Hello Ali,thank you for logging in again
//             Hello Rameez,thank you for logging in again
//             Hello Rafay,thank you for logging in again
//             Hello Bilal,thank you for logging in again
////-----------------------------------------------------------------
