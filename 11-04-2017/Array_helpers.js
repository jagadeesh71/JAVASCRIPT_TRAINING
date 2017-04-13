Array.prototype.square = function () {
  return this.map(function (num) {
    return Math.pow(num, 2);
  });
}

Array.prototype.cube = function () {
  return this.map(function (num) {
    return Math.pow(num, 3);
  });
}

Array.prototype.sum = function () {
  return this.reduce(function (total, number) {
    return total + number;
  },0)
}

Array.prototype.average = function () {
  var totalSum = this.sum();
  return totalSum/this.length;
}

Array.prototype.even = function () {
  return this.filter(function (number) {
    return number % 2 === 0;
  });
}

Array.prototype.odd = function () {
  return this.filter(function (number) {
    return number % 2 !== 0;
  });
}
