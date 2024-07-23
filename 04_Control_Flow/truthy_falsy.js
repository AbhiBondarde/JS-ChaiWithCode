//Falsy value :
    //false ,0,-0, BigInt 0n ,"",null,NaN ,undefined


// truthy value :
    // [],"0",'false'," ",{}object , function(){} 



const email = "h@abhi.in"
if(email){
   // console.log("Got User Email");
} else {
    console.log("Don't have User email");
}

// Check how to find empty array
const arr =[2]
if(arr.length === 0){
   // console.log("Array is empty");
} 

// how to check Object is empty or Not
const user ={}
if(Object.keys(user).length===0){
   // console.log("Object is empty");
}
// **********************************************************************************************************

//  Nullish Coalescing Operator (??): This operator working on 1)null , 2)undefined  keyword

let value1 ;

// value1 = null ?? 10;                //10

value1 = undefined ?? 15            // 15

console.log(value1);


// Ternary Operator
//  Syntax : Condition ? true : false

const price =100;

(price <=80) ? console.log("less than 80 "): console.log("More than 80 ") 
