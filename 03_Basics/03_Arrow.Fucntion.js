function chai()
{
   //console.log(this); 
}

// chai()


const user ={
    userName:"ABhi",
    city:"Nashik",

    welcome :function ()
    {
        console.log(`${user.userName},Welocme `);
        console.log(this)
    }

}
user.welcome()

