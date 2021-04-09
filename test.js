class Test{
    constructor(x)
    {
     this.x=x
     console.log("inside constructor--"+x)
    }
   
    checkPositiveOrNot()
    {
     
        if(this.x>=0)
        {
            console.log(" positve")

        }
        else{
            console.log("negative")

        }
    }
}