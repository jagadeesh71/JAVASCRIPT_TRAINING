//I used internet to solve this as I am not good at using closures - If there is any other way we can do , please let me know.
function zero(funct) {
  return funct ? funct(0) : 0;
}
function one(funct) {
  return funct ? funct(1) : 1;
}
function two(funct) {
  return funct ? funct(2) : 2;
}
function three(funct) {
  return funct ? funct(3) : 3;
}
function four(funct) {
  return funct ? funct(4) : 4;
}
function five(funct) {
  return funct ? funct(5) : 5;
}
function six(funct) {
  return funct ? funct(6) : 6;
}
function seven(funct) {
  console.log(funct);
  return funct ? funct(7) : 7;
}
function eight(funct) {
  return funct ? funct(8) : 8;
}
function nine(funct) {
  return funct ? funct(9) : 9;
}

function plus(value2) {
    return function (value1) {
        return value1 + value2;
    }
}
function minus(value2) {
return function (value1) {
        return value1 - value2;
    }
}
function times(value2) {
return function (value1) {
        return value1 * value2;
    }
}
function dividedBy(value2) {
return function (value1) {
        return value1 / value2;
    }
}

//http://www.codewars.com/kata/calculating-with-functions/train/javascript
