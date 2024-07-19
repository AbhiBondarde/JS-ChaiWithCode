// Date

let myDate = new Date()

// console.log(myDate);                        // 2024-07-19T04:57:12.511Z         
// console.log(myDate.toString());             //Fri Jul 19 2024 10:27:12 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());         //Fri Jul 19 2024
// console.log(myDate.toLocaleString());       // 19/7/2024, 10:27:12 am
// console.log(myDate.toLocaleDateString());   // 19/7/2024

// Custom Date
let myCrateDate = new Date(1994,0,11)

// console.log(myCrateDate.toDateString())         //  Tue Jan 11 1994




// ********************************* Time Stamp **************************************

let time = Date.now();

console.log(time);                      // time in mili-second
console.log(myCrateDate.getTime());     


