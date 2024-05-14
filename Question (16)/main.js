//____________________________________________________________________________________
//                            * Question No 16 *
//____________________________________________________________________________________
var firstGuests = ['Arsalan', 'Osman', 'Ibrahim', 'Fahad'];
firstGuests.splice(0, 0, "Bilal");
firstGuests.splice(3, 0, "Ismail");
firstGuests.push("Wahaj");
var newguests = ["Wahaj", "Bilal", "Ismail"];
firstGuests.forEach(function (guest) { return console.log("Hello!", "".concat(guest), "I'm inviting you for dinner at my home."); });
console.log("\n", "I found a bigger table soo i'm inviting few more of my friends.", "our new guests are", "".concat(newguests));
console.log("\n");
////-----------------------------------------------------------------------------------------------------------------
// Result 16 = Hello! Bilal I'm inviting you for dinner at my home.
//             Hello! Arsalan I'm inviting you for dinner at my home.
//             Hello! Osman I'm inviting you for dinner at my home.
//             Hello! Ismail I'm inviting you for dinner at my home.
//             Hello! Ibrahim I'm inviting you for dinner at my home.
//             Hello! Fahad I'm inviting you for dinner at my home.
//             Hello! Wahaj I'm inviting you for dinner at my home.
//
//             I found a bigger table soo i'm inviting few more of my friends. our new guests are Wahaj,Bilal,Ismail
////------------------------------------------------------------------------------------------------------------------
