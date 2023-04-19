let year = 2015;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log(year + " this is leap year")
        }
        else{
            console.log(year +"this is not a leap year")
        }
    }
    else{
        console.log(year+ " This is leap year")
    }
}
else{
    console.log(year+ " This is not a leap year")
}