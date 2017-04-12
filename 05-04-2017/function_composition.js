function compose(f,g) {
  return function (x){ 
    return f(g.apply(this, arguments));
  }
}
