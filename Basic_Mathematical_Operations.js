function basicOp(operation, value1, value2) {
  var listOfOperations = {
      '+': value1 + value2,
      '-': value1 - value2,
      '*': value1 * value2,
      '/': value1 / value2
  }
  return listOfOperations[operation];
}

//http://www.codewars.com/kata/basic-mathematical-operations
