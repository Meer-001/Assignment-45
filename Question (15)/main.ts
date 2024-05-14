//____________________________________________________________________________________
//                            * Question No 15 *
//____________________________________________________________________________________


let firstGuests = ['Arsalan','Osman','Ibrahim','Fahad'];

let is_not_comming = firstGuests[0]
let newperson = "Irfan"
firstGuests.splice(0,1,newperson)

console.log("\n",`${is_not_comming}`,'is not comming','And his place is taken by',`${newperson}`,"\n");
firstGuests.forEach(guest => console.log("Hello!",`${guest}`,"I'm inviting you for dinner at my home."));
console.log("\n");



////---------------------------------------------------------------------
// Result 15 = Hello! Irfan I'm inviting you for dinner at my home.    
//             Hello! Osman I'm inviting you for dinner at my home.    
//             Hello! Ibrahim I'm inviting you for dinner at my home.  
//             Hello! Fahad I'm inviting you for dinner at my home.   
////---------------------------------------------------------------------