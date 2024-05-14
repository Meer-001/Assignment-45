//____________________________________________________________________________________
//                            * Question No 32 *
//____________________________________________________________________________________


const current_users: string[] = ["ali", "usman", "bilal", "ibrahim", "rameez"];
let new_users: string[] = ["ismail", "ali", "bilal", "irfan", "ismail"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(
      `This username :${newUser}: is already used! Enter a new username.`
    );
  } else {
    console.log(`${newUser} is available. `);
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