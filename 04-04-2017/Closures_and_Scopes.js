function createFunctions(n) {
  var callbacks = [];
  function returnNumber (value) {
    return function () {
      return value;
    };
  }
  for (var i=0; i<n; i++) {
    callbacks.push(returnNumber(i));
  }
  return callbacks;
}

//http://www.codewars.com/kata/closures-and-scopes/train/javascript
