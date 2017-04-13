function isSantaClausable(obj) {
  return (typeof obj['sayHoHoHo'] === 'function' && typeof obj['distributeGifts'] === 'function' && typeof obj['goDownTheChimney'] === 'function');
}

//http://www.codewars.com/kata/santaclausable-interface/train/javascript
