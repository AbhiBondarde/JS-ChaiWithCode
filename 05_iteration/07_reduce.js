// Accumulator -> Empty Variable =>  intial value assign to accumulator 
// currentvalue ->whatever value of array is going on
// initialvalue ->

const array1 =[1,2,3,4,5]
// Output  =>     0+1+2+3+4 =10
const initial_value =0;

// Using Normal Function 
const myTotalNew = array1.reduce(function (accumulator,currentValue) {
    console.log(`acc : ${accumulator} and curVal : ${currentValue} `);
    return accumulator + currentValue   
   },0)
   console.log(myTotalNew);


// Using Arrow Function
const  myTotal = array1.reduce( (accumulator, currentValue) => { 
    return accumulator + currentValue }, initial_value )
    // console.log(myTotal);



