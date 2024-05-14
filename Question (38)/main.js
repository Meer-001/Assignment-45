////____________________________________________________________________________________
//                            * Question No 38 *
//______________________________________________________________________________________
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi', 'Pakistan');
describe_city('Lahore', 'Pakistan');
describe_city('New York', 'USA');
////--------------------------------------
// Result 38 = Karachi is in Pakistan.
//             Lahore is in Pakistan.
//             New York is in USA.
////-------------------------------------
