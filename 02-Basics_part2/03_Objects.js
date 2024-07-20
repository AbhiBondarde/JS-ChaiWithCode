// Object create using constructor through  
// create Singleton Object 
    //Object.create()


// Object can create using Literals
// key : value pair use 

// Create Symbol
const mySymbol = Symbol("keeeey");
// console.log(typeof mySymbol);         // Symbol


const JS_user={
    name:"Abhi",
    "FullName":"Abhi Patil",
    age :28,   
    city:"ANagar",
    isLogin: false,
    lastLoginDay:["Mon","Sat"],
    [mySymbol]:"aaaaa"
}

// console.log(JS_user);
// console.log(JS_user.lastLoginDay);
// console.log(JS_user.FullName);
// console.log(JS_user[mySymbol]);    // print symbol 
// console.log(JS_user.city);
// console.log(JS_user["city"]);

JS_user.FullName ="Suraj Patil"
// when u freeze object we can't  change in object 
// Object.freeze(JS_user)

// Create Function Using Object Reference i.e JS_user
JS_user.greeting =function(){
    console.log("Hello ");
}

JS_user.greeting2 =function(){
    console.log(`Hello  ${this.FullName} `);
}

console.log(JS_user.greeting());
console.log(JS_user.greeting2());
