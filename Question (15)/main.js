//____________________________________________________________________________________
//                            * Question No 15 *
//____________________________________________________________________________________
var firstGuests = ['Arsalan', 'Osman', 'Ibrahim', 'Fahad'];
var is_not_comming = firstGuests[0];
var newperson = "Irfan";
firstGuests.splice(0, 1, newperson);
console.log("\n", "".concat(is_not_comming), 'is not comming', 'And his place is taken by', "".concat(newperson), "\n");
firstGuests.forEach(function (guest) { return console.log("Hello!", "".concat(guest), "I'm inviting you for dinner at my home."); });
console.log("\n");
////---------------------------------------------------------------------
// Result 15 = Hello! Irfan I'm inviting you for dinner at my home.    
//             Hello! Osman I'm inviting you for dinner at my home.    
//             Hello! Ibrahim I'm inviting you for dinner at my home.  
//             Hello! Fahad I'm inviting you for dinner at my home.   
////---------------------------------------------------------------------
