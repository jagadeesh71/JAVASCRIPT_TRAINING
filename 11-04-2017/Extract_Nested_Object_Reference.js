// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  var objProperties = string.split('.'),
      value = this;
  for (var i = 0; i < objProperties.length; i++) {
    value = value[objProperties[i]];
    if(!value) { 
      return value;
    }
  }
  return value;
}

//http://www.codewars.com/kata/extract-nested-object-reference/train/javascript
