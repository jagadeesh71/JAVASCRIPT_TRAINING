function construct(Class) {
  var obj = Object.create(Class.prototype),
      args= [].slice.call(arguments, 1);
  Class.apply(obj, args);
  return obj;
}

//http://www.codewars.com/kata/new-with-apply/train/javascript
