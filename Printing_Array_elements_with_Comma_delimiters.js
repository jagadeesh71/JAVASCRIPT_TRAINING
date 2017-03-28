function printArray(array) {
  var outputString;
  for(var index = 0; index < array.length; index++) {
    if (!outputString) {
      outputString = array[index];
    } else {
      outputString += ';' + array[index];
    }
  }
  return outputString;
}

//http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
