const marval= ["thor","stark","Caption Amreica","Hulk"]
const loacl_hero= ["Shaktiman","suparman","Spiderman"]
// Concat()
const all_heros = marval.concat(loacl_hero);
    //console.log(all_heros);

// Spread operator
    const all_new =[...marval,...loacl_hero];
  //  console.log(all_new);


// flat method

const arr =[1,2,3,[4,5,6],7,8,[3,5,7,[56,88,89]]]

const arr1 =arr.flat(2)
//console.log(arr1)


// convert into Array

let score =100;
let score1=1300;
let score2=300;
let score3=500;

console.log(Array.of(score,score1,score2,score3));    //[ 100, 1300, 300, 500 ]



console.log(Array.from({name:"Abhi"}));