const pwFinder = (start, end) => {
  let pwCount = 0;
  for(let i = start; i <= end; i++){
    let doublePresent = false;
    let increasing = true;
    // parse num into string
    // loop over digits in string, comparing them
    const iStr = i.toString();

    // added obj to track matching digits
    const matchingDigitObj = {};
    for(let j = 1; j < 6; j++){
      // if we find a decreasing seriese of digits,
      // set increasing value to false
      if(iStr[j] < iStr[j-1]) increasing = false;

      // check if we find a match with digit at previous index
      if(iStr[j] === iStr[j-1]) {
        // if digit exists in matchobj already, increment count
        if(matchingDigitObj[iStr[j]]) {
          matchingDigitObj[iStr[j]] ++
        } else {
          // if not, set key with value of 2
          matchingDigitObj[iStr[j]] = 2;
        }

      }
      // if we're at final digit in pw and nums so far have been increasing
      if(j === 5 && increasing === true) {
        // check matching obj to see if we have a series of 2 matching digits
        for(let key in matchingDigitObj){
          if(matchingDigitObj[key] === 2){
            doublePresent = true;
          }
        }
        // if we found a double in our matching obj, increase pwCount
        if(doublePresent === true) {
          pwCount++
        }
      } 
    }
  }
  
  return pwCount;
}

// console.log(pwFinder(134792,675810))