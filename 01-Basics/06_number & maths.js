// Numbers 
const num1 = 345
//console.log(num1)

// toFixed()  give number of digits after decmial 
const num = new Number(100)
//console.log(num)

//console.log(num.toFixed(3)) // 100.000

//Precision(),range 1-21
 // work before decimal point ,take digit from before decimal 
const othrNum=2213.56567
//console.log(othrNum.toPrecision(4));  //2214


const num2=1000000
//console.log(num2.toLocaleString())





// *************************************  MATHS ********************************************************


// console.log(Math.abs(-6))  
// console.log(Math.round(66.5));
// console.log(Math.ceil(3.12));  // Take upper value always 
// console.log(Math.floor(3.82)); // Take lower value always

// console.log(Math.pow(2,5))
//  console.log(Math.min(22,4,77,9,1));
//  console.log(Math.max(22,4,77,9,1));
   
console.log(Math.random());   // Value lie between 0 to 1
console.log((Math.random()*10)+1)  // vlaue start from 1 to 9 in decimal format
console.log(Math.floor(Math.random()*10)+1);  // value in 1 to 10 

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );