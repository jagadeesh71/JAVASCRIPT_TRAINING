//This program is not yet completed I am WORKING on it.

function partitionOn(pred, items) {
  var i = 0,tempArray=[];
  for (var index = 0; index < items.length; index++) {
    if (pred(items[index])) {
      tempArray.push(items[index]);
    } else {
      tempArray.splice(i,0,items[index]);
      i++;
    }
  }
  items = tempArray;
  return i;
}


//http://www.codewars.com/kata/partition-on