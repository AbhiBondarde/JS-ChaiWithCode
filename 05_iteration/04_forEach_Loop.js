const coding =["java","ruby","python","Js","C++","GoLang"]

// apply for-each loop
// here there is no function name only give () and {}
// in ()round braces give varible name to hold the value 

coding.forEach( function (value) {
    // console.log(value);
})

// arrow funtion
coding.forEach( (item) => {
    console.log(item);
} ) 


const objectArray = [ 
    {
        userName:"ab123",
        city:"Pune"
    },
    {
        userName:"SP@13",
        city:"Nagar"
    },
    {
        userName:"Pk@AI",
        city:"Nashik"
    },
    {
        userName:"DK123@AI",
        city:"Mumbai"
    }
]

objectArray.forEach( (userDetails) => {
            console.log(userDetails.userName);
})