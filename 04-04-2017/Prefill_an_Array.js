
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
  
  
 if (n < 0 || typeof(n) === "boolean" || n % 1 !== 0) {
    throw new TypeError(n+' is invalid');
  } else {
    return pushElement();
  }
}

//http://www.codewars.com/kata/prefill-an-array/train/javascript
