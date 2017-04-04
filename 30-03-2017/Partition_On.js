//I have seen a different variant of doing this using apply at 14 instead of using two for loops. What it 
//will exactly do and for what purpose we can use apply.
function partitionOn(pred, items) {
  var evenNumbers = items.filter(pred);
  var oddNumbers = items.filter(function (number) {
    return !pred(number);
  });
  items.length = 0;
  for(var item = 0; item < oddNumbers.length; item++) {
    items.push(oddNumbers[item]);
  }
  for(var index = 0; index < oddNumbers.length; index++) {
    items.push(evenNumbers[index]);
  }
  //items.push.apply(items, oddNumbers.concat(evenNumbers));
  return oddNumbers.length;
}


//In line 9 AND 12 ,I declared variables item and index with the keyword var right? my quesition is will the scope of item and index be 
//available through out the function or just for the for loop??

//http://www.codewars.com/kata/partition-on
