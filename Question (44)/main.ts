//____________________________________________________________________________________
//                            * Question No 44 *
//____________________________________________________________________________________


function orderSandwich(items:string[]){
    console.log("You've ordered sandwich with following items:");
    
  items.forEach((item) => {
    console.log(`- ${item}`);
    
  });
  }
  orderSandwich(['turkey','avocado','bacon','lettuce'])
  orderSandwich(['ham','cheese'])
  orderSandwich(['roast beef','mayo','onions','tomato','pickles'])
  
  
  ////------------------------------------------------------------
  // Result 44 = You've ordered sandwich with following items:
  //              - turkey
  //              - avocado
  //              - bacon
  //              - lettuce
  //            You've ordered sandwich with following items:
  //              - ham
  //              - cheese
  //            You've ordered sandwich with following items:
  //              - roast beef
  //              - mayo
  //              - onions
  //              - tomato
  //              - pickles
  ////-----------------------------------------------------------