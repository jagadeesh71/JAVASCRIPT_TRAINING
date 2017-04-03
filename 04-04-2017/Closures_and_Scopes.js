function createFunctions(n) {
  var callbacks = [];
  function returnActualNumber (value) {
    return function () {
      return value;
    };
  }
  for (var i=0; i<n; i++) {
    callbacks.push(returnActualNumber(i));
  }
  return callbacks;
}

//http://www.codewars.com/kata/closures-and-scopes/train/javascript
