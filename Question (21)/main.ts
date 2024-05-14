//____________________________________________________________________________________
//                            * Question No 21 *
//____________________________________________________________________________________


interface mylaptopSpecification {
    name: string;
    processor: string;
    installedRam: number;
    windows: string;
  }
  
  let mylaptopSpecification = {
    name: "HP probook",
    processor: "Intel(R) Core(TM) i7-2760QM CPU @ 2.40GHz   2.40 GHz",
    installedRam: 8,
    window: "10 Pro",
  };
  
  console.log("My Laptop Specifications", mylaptopSpecification);
  console.log("\n");



////-------------------------------------------------------------------------------
// Result 21 = My Laptop Specifications {
//             name: 'HP probook',
//             processor: 'Intel(R) Core(TM) i7-2760QM CPU @ 2.40GHz   2.40 GHz',
//             installedRam: 8,
//             window: '10 Pro'
//                                      }
////-------------------------------------------------------------------------------