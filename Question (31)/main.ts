//____________________________________________________________________________________
//                            * Question No 31 *
//____________________________________________________________________________________


let userName: string[] = ["Ali", "Bilal", "Rafay"];
userName.pop();
userName.pop();
userName.pop();
if (userName.length === 0) {
  console.log("We need to find some users!");
} else {
  userName.forEach((username) =>
    console.log(`Hello ${username}! Thank you for logging in again`)
  );
}

////-----------------------------------------------------------------
// Result 31 = We need to find some users!
////-----------------------------------------------------------------