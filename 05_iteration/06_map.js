const myarr = [1,2,3,4,5,7,6,8,9,10]

const nums = myarr.map((num) => { return num +10 } )
//console.log(nums);

myarr.forEach( (item) => {
  //  console.log(item+20);
})


// Chaning Method  => multiple method we can write

const updatedArray = myarr
                    .map( (num) => num*10 )
                    .map( (num) => num+1 )
                    .filter((num)=> num >40 )    
console.log(updatedArray);


