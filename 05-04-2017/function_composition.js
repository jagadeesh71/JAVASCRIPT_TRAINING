function compose(f,g) {
  return function (x){ 
    return f(g.apply(this, arguments));
  }
}

//http://www.codewars.com/kata/function-composition
