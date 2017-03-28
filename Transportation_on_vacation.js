//which one is a good choice among these two -- switch case or if-else-if
function rentalCarCost(days) {
  if (days >= 7) {
    return (days * 40) - 50;
  } else if (days >= 3) {
    return (days * 40) - 20;
  } else {
    return (days * 40);
  }
}

//http://www.codewars.com/kata/transportation-on-vacation
