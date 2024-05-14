//____________________________________________________________________________________
//                            * Question No 24 *
//____________________________________________________________________________________


let num1 = 10;
let num2 = 20;

console.log("Is num1 is equal to num2 ?");
console.log(num1 == num2); //false

console.log("Is num1 is not equal to num2 ?");
console.log(num1 != num2, "\n"); //true

//Greater than
console.log("Is num1 is greater than num 2 ?");
console.log(num1 > num2); //false
//Less than
console.log("Is num1 is less than num2 ?");
console.log(num1 < num2, "\n"); //true

//Greater than and equal to
console.log("Is num1 is greater than or equal to 5?");
console.log(num1 >= 5); //true
console.log("Is num2 is less than or equal to 10");
console.log(num2 <= 10, "\n"); //false

// Testing and operator and or operator
let num3 = 15;

console.log("Is num3 is not equal to 5 and greater than 10?");
console.log(num3 != 10 && num3 > 10); //true

console.log("Is num3 is equal to 10 or less than 10?");
console.log(num3 == 10 || num3 < 10, "\n"); //false

//•Testing whether an item is in array

let items = ["apples", "mangoes", "banana"];

console.log("Is apples include in my array?");
console.log(items.includes("apples")); //true

//•Testing whether an item is not in my array

console.log("Is apples not includes in my array?");
console.log(!items.includes("apples")); //false



////---------------------------------------------------------------------
// Result 24 = Is num1 is equal to num2 ?
//             false
//             Is num1 is not equal to num2 ? 
//             true 
//
//             Is num1 is greater than num 2 ?
//             false
//             Is num1 is less than num2 ?
//             true
//
//             Is num1 is greater than or equal to 5?
//             true
//             Is num2 is less than or equal to 10
//             false
//
//             Is num3 is not equal to 5 and greater than 10?
//             true
//             Is num3 is equal to 10 or less than 10?
//             false
//
//             Is apples include in my array?
//             true
//             Is apples not includes in my array?
//             false
////---------------------------------------------------------------------