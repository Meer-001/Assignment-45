//____________________________________________________________________________________
//                            * Question No 33 *
//____________________________________________________________________________________


let ordinalNumbers:number[] = [1,2,3,4,5,6,7,8,9];
ordinalNumbers.forEach(ord_number => {
    let suffix = 'th';
    if(ord_number === 1){
        suffix = 'st';
    }else if(ord_number === 2){
        suffix = 'nd';
    }else if(ord_number === 3){
        suffix = 'rd';
    }else if(ord_number > 2 && ord_number <= 10){
        suffix = 'th';
    }

console.log(`${ord_number}${suffix}`);
})

////------------------------------
// Result 33 = 1st
//             2nd
//             3rd
//             4th
//             5th
//             6th
//             7th
//             8th
//             9th
////-------------------------------