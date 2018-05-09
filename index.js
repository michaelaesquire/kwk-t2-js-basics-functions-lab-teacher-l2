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

function distanceTravelledInFeet(start,end) {
  let returnValue;
  let change = end - start;
  returnValue = Math.abs(change*264);
  return returnValue;
}

function calculatesFarePrice(start,end){
  let returnValue;
  let distance = distanceTravelledInFeet(start,end);
  if (distance <= 400) {
    returnValue = 0;
  }
  else if (distance > 400 && distance < 2000) {
    let costDistance = distance - 400;
    returnValue = costDistance*0.02;
  }
  else if (distance > 2000 && distance < 2500) {
    returnValue = 25;
  }
  else if (distance > 2500 ) {
    
  }
  return returnValue;
}
