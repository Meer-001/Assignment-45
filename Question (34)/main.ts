//____________________________________________________________________________________
//                            * Question No 34 *
//____________________________________________________________________________________

// Pizzas: Think of at least three kinds of your favorite pizza. 
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//  such as I really love pizza!

let pizzas = ['BBQ Chicken','Pepperoni','Hawaiian'];
pizzas.forEach((pizza) => {
  console.log(`I really enjoying eating ${pizza} pizza`);
  
})
console.log('I absolutely love pizza and could eat it every day!');
console.log('My fav pizza are BBQ Chicken, Pepperoni and Hawaiian.');
console.log('I love the smoky flavor of BBQ Chicken, the spicy kick of Pepperoni and the sweetness of Hawaiian');


////----------------------------------------------------------------------------------------------------------------
// Result 34 = I really enjoying eating BBQ Chicken pizza
//             I really enjoying eating Pepperoni pizza
//             I really enjoying eating Hawaiian pizza
//             I absolutely love pizza and could eat it every day!
//             My fav pizza are BBQ Chicken, Pepperoni and Hawaiian.
//             I love the smoky flavor of BBQ Chicken, the spicy kick of Pepperoni and the sweetness of Hawaiian
////----------------------------------------------------------------------------------------------------------------
