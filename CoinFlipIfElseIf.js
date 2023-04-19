let heads=0;
let tails=0;
while(heads!=11 && tails!=11){
    let coin = Math.floor(Math.random()*2)
    if(coin == 1){
        heads++
    }
    else{
        tails++;
    }
}
if(heads>tails){
    console.log("heads win!"+ heads)
}
else{
    console.log("tails win! "+tails)
}