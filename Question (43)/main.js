//____________________________________________________________________________________
//                            * Question No 43 *
//____________________________________________________________________________________
var magicians = ['David Copperfield', 'Dynamo', 'Penn and Teller'];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians);
////-------------------------------------
// Result 43 = Original magicians:
//             David Copperfield
//             Dynamo
//             Penn and Teller
//      Great magicians:
//      David Copperfield the Great
//      Dynamo the Great
//      Penn and Teller the Great  
////-------------------------------------
