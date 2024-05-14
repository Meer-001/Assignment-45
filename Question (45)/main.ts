//____________________________________________________________________________________
//                            * Question No 45 *
//____________________________________________________________________________________


function carInfo(manufacturer: string, model: string, options: { [key: string]: string }, features: { [key: string]: string }) {
    const car: { [key: string]: string } = { manufacturer, model };
    for (const key in options) {
      car[key] = options[key];
    }
    for (const key in features) {
      car[key] = features[key];
    }
    return car;
  }
  
  const car = carInfo('Tesla', 'Model S', { color: 'Red' }, { feature: 'Autopilot' });
  console.log(car);
  
  
  ////------------------------------------------------------------
  // Result 45 = {
  //               manufacturer: 'Tesla',
  //               model: 'Model S',
  //               color: 'Red',
  //               feature: 'Autopilot'
  //            }
  ////-------------------------------------------------------------