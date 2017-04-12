function compose() {
  var functionList = arguments;
  return function (value) {
    for(var i = functionList.length - 1; i >= 0; i--) {
      value = functionList[i](value);
    }
    return value;
  }
}

//http://www.codewars.com/kata/function-composition-1/train/javascript
