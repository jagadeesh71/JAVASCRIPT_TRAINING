
function prefill(n, v) {
  var i = 1,arrayList = [],
      pushElement = function () {
      if (i <= parseInt(n, 10)) {
        arrayList.push(v);
        i++;
        return arrayList = pushElement();
      } else {
        return arrayList;
      }
    };
  if (n === 0) {
    return arrayList;
  } else if (isNaN(n) || n < 0 || typeof(n) === "boolean" || n % 1 !== 0) {
    throw new TypeError(n+' is invalid');
  } else {
    return pushElement();
  }
}

//http://www.codewars.com/kata/prefill-an-array/train/javascript
