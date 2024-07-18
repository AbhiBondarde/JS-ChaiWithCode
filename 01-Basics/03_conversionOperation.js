//  1) Convert into Number

let score =undefined;

let valueIntoNumber =Number(score);
                     
//console.log(typeof valueIntoNumber);    //number

//console.log(valueIntoNumber)   

// "33"->33
// "333ada" ->NaN
// true ->1
// false ->0
// null ->0
// undefined -> NaN


// 2)Convert into Boolean Conversion

let isLogin ="dd";

let boolean =Boolean(isLogin)
console.log(boolean)
//1 ->true, 0->false
//""->false ,"ab"-> true


// 3) Convert into String conversion

let someNum=33;

let stringNum =String(someNum)

console.log(stringNum)
console.log(typeof stringNum)
