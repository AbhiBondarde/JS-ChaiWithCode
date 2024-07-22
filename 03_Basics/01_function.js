// create Fuction
function f1(){
    // console.log("Hello");
}

// print function
f1();    

function addTwoNum (num1, num2){
    return (num1+num2);    
}

// console.log("Reslut :" , addTwoNum(12,5));


function loginUserMessgae(userName){
    // if(userName === undefined){
    //     console.log("Please Enter the Name");
    //     return
    // }
    if(! userName){
        console.log("Please Enter the Name");
        return
    }
    return `${userName} logged in `
}

// console.log(loginUserMessgae("Hitesh"));



//********************************* Pass the object into function 2 way
// 1)Create object then pass reference of object 



function handleObject(user){
    console.log(`Username is ${user.userName} and Price is ${user.price}`);
} 

// handleObject();

function createUser() {
    const user= {
        userName:"abhii",
        price : 399
    }
    handleObject(user);
}

// Directly pass the object  into the function

handleObject({
    userName:"ak",
    price:499
})


//********************************* Pass the Array into function 2 way *******************************************
// 1)Create Array then pass  

const arr1= [12,7,55,72,5,333]


function findFromAray (arr1){
    return arr1[3]
}

console.log(findFromAray(arr1))


function findValue(v)
{
    return v[2]
}

console.log(findValue([2,3,45,6,7,88,9,990,87654]));


//********************************* Pass the Function into function ***********************************

function f1(name){
    return name
}

function f2(){
    console.log(f1("abhi"));
}

f2();