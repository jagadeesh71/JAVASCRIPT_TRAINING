
function prefill(n, v) {
  var index = 1,arrayList = [],
    pushElement = function () {
      if (index <= parseInt(n, 10)) {
        arrayList.push(v);
        index++;
        return arrayList = pushElement();
      } else {
        return arrayList;
      }
    };
  
  
  if (n === 0) {
    return arrayList;
  } else if (n < 0 || typeof(n) === "boolean" || n % 1 !== 0) { // shall i use regular expression for all these validations ??
    throw new TypeError(n+' is invalid');
  } else {
    return pushElement();
  }
}

//http://www.codewars.com/kata/prefill-an-array/train/javascript
