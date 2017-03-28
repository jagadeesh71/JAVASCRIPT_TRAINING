//I completed the task in two ways , could you please tell which one is efficient ??

function basicOp(operation, value1, value2) {
  var listOfOperations = {
      '+': value1 + value2,
      '-': value1 - value2,
      '*': value1 * value2,
      '/': value1 / value2
  }
  return listOfOperations[operation];
}

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
          break;
      case '-':
          return value1 -value2;
          break;
      case '*':
          return value1 * value2;
          break;
      case '/':
          return value1 / value2;
          break;
      default:
          return 0;
  }
}

//http://www.codewars.com/kata/basic-mathematical-operations
