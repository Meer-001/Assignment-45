//____________________________________________________________________________________
//                            * Question No 18 *
//____________________________________________________________________________________


let places:string[]= ['Dubai','Paris','United State','Rome','Egypt','Pakistan'] //1• orignal stored location
console.log(places); //2• print your array in orignal order
console.log(places.slice().sort()); //3• alphabetical order (without modifying)
console.log(places); //4• verify orignal
console.log(places.slice().sort((a,b) => b.localeCompare(a))); //5• reverse alphabetical order (without modifying)
console.log(places); //6• verifying orignal (again)
console.log(places.reverse()); //7• Orignal order to reverse order
console.log(places.reverse()); //8• reverse again to orignal order
console.log(places.sort((a,b)=> b.localeCompare(a))); //9• sorted arrays in alphabetical and print them
console.log(places.sort((a,b)=> a.localeCompare(b))); //10• sorted in reverse alphabetical order
console.log(places); // orders are now changed



////-------------------------------------------------------------------------------
// Result 18 = [ 'Dubai', 'Paris', 'United State', 'Rome', 'Egypt', 'Pakistan' ]
//             [ 'Dubai', 'Egypt', 'Pakistan', 'Paris', 'Rome', 'United State' ]
//             [ 'Dubai', 'Paris', 'United State', 'Rome', 'Egypt', 'Pakistan' ]
//             [ 'United State', 'Rome', 'Paris', 'Pakistan', 'Egypt', 'Dubai' ]
//             [ 'Dubai', 'Paris', 'United State', 'Rome', 'Egypt', 'Pakistan' ]
//             [ 'Pakistan', 'Egypt', 'Rome', 'United State', 'Paris', 'Dubai' ]
//             [ 'Dubai', 'Paris', 'United State', 'Rome', 'Egypt', 'Pakistan' ]
//             [ 'United State', 'Rome', 'Paris', 'Pakistan', 'Egypt', 'Dubai' ]
//             [ 'Dubai', 'Egypt', 'Pakistan', 'Paris', 'Rome', 'United State' ]
//             [ 'Dubai', 'Egypt', 'Pakistan', 'Paris', 'Rome', 'United State' ]
////-------------------------------------------------------------------------------