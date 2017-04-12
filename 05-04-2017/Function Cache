function cache(complexFunction) {
  var storedArguments = {},
      key;
  return function() {
      key = JSON.stringify(arguments);
      if (!storedArguments.hasOwnProperty(key)) {
          storedArguments[key] = complexFunction.apply(this, arguments);
        }
        return storedArguments[key];
    }
}

//http://www.codewars.com/kata/function-cache/train/javascript
