//____________________________________________________________________________________
//                            * Question No 17 *
//____________________________________________________________________________________
var firstGuests = ['Arsalan', 'Osman', 'Ibrahim', 'Fahad'];
console.log("My bigger dinner table wont arrived, now i only have space for 2 guest");
firstGuests.pop();
firstGuests.pop();
firstGuests.forEach(function (guest) { return console.log("".concat(guest), "I'm sorry i cant invite you to dinner."); });
var remaining_guest = ["Wahaj", "Fahad"];
remaining_guest.forEach(function (guest) { return console.log("".concat(guest), "you're still invited for the dinner at my home"); });
remaining_guest.pop();
remaining_guest.pop();
console.log('\n', "Again change in plan!!");
console.log("My final remaining guest", remaining_guest);
console.log("\n");
////-----------------------------------------------------------------------------------
// Result 17 = My bigger dinner table wont arrived, now i only have space for 2 guest
//             Arsalan I'm sorry i cant invite you to dinner.      
//             Osman I'm sorry i cant invite you to dinner.        
//             Wahaj you're still invited for the dinner at my home
//             Fahad you're still invited for the dinner at my home
//
//             Again change in plan!!
//             My final remaining guest []
////-----------------------------------------------------------------------------------
