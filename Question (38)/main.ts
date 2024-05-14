////____________________________________________________________________________________
//                            * Question No 38 *
//______________________________________________________________________________________


function describe_city(city:string , country:string = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
    
}
describe_city('Karachi','Pakistan')
describe_city('Lahore','Pakistan')
describe_city('New York','USA')

////--------------------------------------
// Result 38 = Karachi is in Pakistan.
//             Lahore is in Pakistan.
//             New York is in USA.
////-------------------------------------