const pwFinder = (start, end) => {
  let pwCount = 0;
  for(let i = start; i <= end; i++){
    let doublePresent = false;
    let increasing = true;
    // parse num into string
    // loop over digits in string, comparing them
    const iStr = i.toString();
    for(let j = 1; j < 6; j++){
      // if we find a decreasing seriese of digits,
      // set increasing value to false
      if(iStr[j] < iStr[j-1]) increasing = false;
      if(iStr[j] === iStr[j-1]) doublePresent = true;
      if(j === 5 && increasing === true && doublePresent === true) pwCount ++
    }
  }
  
  return pwCount;
}

console.log(pwFinder(134792,675810))