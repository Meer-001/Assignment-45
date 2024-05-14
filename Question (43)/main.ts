//____________________________________________________________________________________
//                            * Question No 43 *
//____________________________________________________________________________________


let magicians: string[] = ['David Copperfield','Dynamo','Penn and Teller'];

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
  });
  return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice());

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