// for loop

for (let i = 0; i < 10 ; i++) {
    const element = i;
    //console.log(element);
}

// 1 to 5 table print 

for (let i = 1; i <=20; i++) {
   // console.log(`Table for  ${i}`);
    for (let j = 1; j <=10 ; j++) {
//    console.log(i + "*" + j +" = " + i*j);
    }
1   
}


//  Array 
const myArr =["falsh","spiderMan","Antman","IronMan"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}


//  break and continue

// for (let i = 1; i <=10; i++) {
//     if(i == 5){
//         console.log("Detected 5");
//         break                                // 5 print after 5 can't print 
//     }
//     console.log(i);
// }


for (let i = 1; i <=10; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue                            // never print 5 
    }
    console.log(i);
}





















