// Array Declaration

const myArr =[1,2,4,6,8,0]
//console.log(myArr);
//console.log(myArr[4]);

const arr =new Array("Ab","fe","ee","th")
//console.log(arr); 


//**************************** Arrays Methods ***********************************************

//console.log(arr.push(66));

//console.log(arr.pop());

const arr1 = arr.join();     // convert  to string array
//console.log(typeof arr1);

// slice  and splice method

const arrNew = [12,4,6,8,9,44,2];
console.log(" A " ,arrNew);                         // [12,4,6,8,9,44,2]

const new1 = arrNew.slice(1,4);
console.log(new1);                                  // [ 4, 6, 8]   
console.log(" B " ,arrNew);                        // [12,4,6,8,9,44,2]


const new2 = arrNew.splice(1,4);
console.log(new2);                              //  [ 4, 6, 8, 9 ]
console.log(" C " ,arrNew);                     // [ 12, 44, 2 ]

