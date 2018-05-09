// Code your solution in this file!
function distanceFromHqInBlocks(inputValue) {
  let returnValue;

  
  if (inputValue >= 42) {
    returnValue = inputValue - 42;
  }
  else if (inputValue < 42) {
    returnValue = 42 - inputValue;
  }
//  else if (inputValue == 34) {
//    returnValue == 8;
//  }
  return returnValue;
}
