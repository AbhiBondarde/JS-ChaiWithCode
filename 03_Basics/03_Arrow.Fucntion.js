const user ={
    userName:"ABhi",
    city:"Nashik",

    welcome :function ()
    {
        console.log(`${this.userName},Welocme `);
        // console.log(this)
    }

}
// user.welcome()

// function chai()
// {
//     let userName="sfsfsfs"
//    console.log(this.userName); 
// }

// const chai =function(){
//     let userName="sfsfsfs"
//     console.log(this.userName); 
// }

 
// ***************************  Arrow Function ***************************

const chai = () => {
    let userName="chaiii"
    console.log(this);
}

// chai()

const addTwo = (num1, num2) => {
        return num1+num2
}

console.log(addTwo(224,6));

// Implicitly Return  Arrow Function
// no return keword, no {} curley braces
// compulsory use () paranthesis
const square = (num) => (num*num)
console.log(square(5));


// USe object in arrow function
// compulsory object use inside ()parenthesis
const anyFunction = () => ({pincode:43433})

console.log(anyFunction());