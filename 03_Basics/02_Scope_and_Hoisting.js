function f1(){
        const name="abhi"

        function f2(){
            const fullName="Bond"
        //    console.log(name) 
        }
    //  console.log(fullName);   
      f2()  
}
// console.log(name);
f1()



// +++++++++++++++++++++++++ Hoisting +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(one(2))

function one(num){
    return num+1
}


 console.log(addTwo(4))

const addTwo = (num) =>{
    return num+2
} 


 