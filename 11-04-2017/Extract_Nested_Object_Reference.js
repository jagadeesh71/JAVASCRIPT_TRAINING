// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  var objProperties = string.split('.'),
      finalObj = this[objProperties[0]];
  for (var i = 1; i < objProperties.length; i++) {
    finalObj = finalObj[objProperties[i]];
    if(!finalObj) { 
      return finalObj;
    }
  }
  return finalObj;
}

//http://www.codewars.com/kata/extract-nested-object-reference/train/javascript
