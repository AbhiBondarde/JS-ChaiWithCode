// for of loop

const arr =["ak","ab","sp","NP","Dk"]
for (const str of arr) {
    // console.log(str);
}


// Map

const map = new  Map()
map.set("IN","India")
map.set("Fr","France")
map.set("INDO","Indonesia")
map.set("USA","United States of America")

//console.log(map);

for (const [key, value] of map) {
   // console.log(key," :- ",value);
}

// ***************************************************************************************************
// for in loop

const myarr =[55,7,8,5,3,23,222]
for (const key in myarr) {
  //  console.log(key);                   // Index value print 0,1,2,3,4,5,6
  //  console.log(myarr[key]);            // print value 55,7,8,5,3,23,222
}

// for in loop for object 
const course ={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    py:"Python"
} 

for (const key in course) {
  //  console.log(key);                   // key get i.e    js,cpp,rb,py
    console.log(course[key]);           // print value    JavaScript   
}

