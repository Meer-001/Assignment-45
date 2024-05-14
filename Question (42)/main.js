//____________________________________________________________________________________
//                            * Question No 42 *
//____________________________________________________________________________________
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ['David Copperfield', ' Dynamo', 'Penn and Teller'];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
////------------------------------------------------
// Result 42 = David Copperfield
//             Dynamo
//             Penn and Teller
//             The Great David Copperfield
//             The Great  Dynamo
//             The Great Penn and Teller
////---------------------------------------------------
