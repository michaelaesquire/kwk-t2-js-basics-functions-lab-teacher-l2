// Code your solution in this file!
function distanceFromHqInBlocks(inputValue) {
  let returnValue;
  if (inputValue >= 42) {
    returnValue = inputValue - 42;
  }
  else if (inputValue < 42) {
    returnValue = 42 - inputValue;
  }
  return returnValue;
}

function distanceFromHqInFeet (someValue) {
  let returnValue;
  returnValue = distanceFromHqInBlocks(someValue)*264;
  return returnValue;
}

function distanceTravelledInFeet(someValue) {
  let returnValue;
  returnValue = 1;
  return returnValue;

}
