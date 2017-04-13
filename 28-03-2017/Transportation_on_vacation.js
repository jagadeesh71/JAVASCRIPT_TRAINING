//which one is a good choice among these two -- switch case or if-else-if
function rentalCarCost(days) {
  var cost = days * 40, 
      discount;
  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  } else {
    discount = 0
  }
  return cost - discount;
}

//http://www.codewars.com/kata/transportation-on-vacation
