//____________________________________________________________________________________
//                            * Question No 30 *
//____________________________________________________________________________________


let userNames = ["Admin", "Ali", "Rameez", "Rafay", "Bilal"];
for (let username of userNames) {
  if (username === "Admin") {
    console.log(`Hello Admin! Would you like to see a status report?`);
  } else {
    console.log(`Hello ${username},thank you for logging in again`);
  }
}

////-----------------------------------------------------------------
// Result 29 = Hello Admin! Would you like to see a status report?
//             Hello Ali,thank you for logging in again
//             Hello Rameez,thank you for logging in again
//             Hello Rafay,thank you for logging in again
//             Hello Bilal,thank you for logging in again
////-----------------------------------------------------------------
