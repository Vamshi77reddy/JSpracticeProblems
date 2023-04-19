function coinFlip(numTimes) {
  
    // Instead of a while loop, use a counting loop that will 
    // have a definite end point
    for(var i = 0; i < numTimes; i++){
  
      // Get a random number from 0 to 1
      var coin = Math.floor(Math.random() * 10);
  
      // Test to see if it is even or odd by checking to see if
      // it is divisible by 2 with no remainder.
  coin<0.5
      console.log("The coin was " + (coin ? "heads " : " tails"));
    }
  }
  
  coinFlip(10);