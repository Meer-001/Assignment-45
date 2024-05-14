//____________________________________________________________________________________
//                            * Question No 45 *
//____________________________________________________________________________________
function carInfo(manufacturer, model, options, features) {
    var car = { manufacturer: manufacturer, model: model };
    for (var key in options) {
        car[key] = options[key];
    }
    for (var key in features) {
        car[key] = features[key];
    }
    return car;
}
var car = carInfo('Tesla', 'Model S', { color: 'Red' }, { feature: 'Autopilot' });
console.log(car);
////------------------------------------------------------------
// Result 45 = {
//               manufacturer: 'Tesla',
//               model: 'Model S',
//               color: 'Red',
//               feature: 'Autopilot'
//            }
////-------------------------------------------------------------
