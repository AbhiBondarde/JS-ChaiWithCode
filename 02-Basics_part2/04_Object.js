//  Cretae object using constructor 
//  to create singleton Object
const obj1 = new Object();
console.log(obj1);              // {} empty object

// Concat of object using assign()
const ob1={ 1:"a",2:"b"}
const ob2={ 3:"c",4:"d"}

const target = Object.assign({},ob1,ob2)

// spread operator to concatination 
const ob3 = {...ob1,...ob2}
// console.log(ob3);                          // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Keys and Value 

const user ={
    name:"abb",
    id:234,
    email : "ab@gmail.com"
}
let keys = Object.keys(user)
let values = Object.values(user)

console.log(keys);
console.log(values);

// check that particuler key present or not in an Object

console.log(user.hasOwnProperty("email"));         // true



//******************************************* Destructuring *******************************************

const course ={
    cousrseName:"JavaScript",
    price: 2999,
    courseInstructor:"Hitesh"
} 

//  simple way to print 
course.courseInstructor

// mostly use this way
const {courseInstructor} =course
const {courseInstructor:instructor} =course

console.log(courseInstructor);
console.log(instructor);