//1.I have seen a different variant of doing this using apply at 14 instead of using two for loops. What it 
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

//2. here is the another variant of above problem using temperory array. Is it good way to do like this.
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
  items.length = 0;
  for (var index = 0; index < tempArray.length; index++) { 
     items.push(tempArray[index]);
  }
  return i;
}

//4. I have an approch to do this problem in a different way 

//here is my idea . I have taken a array which is like [1,2,3,4,5,6]

// 1 2 3 4 5 6   --> increment index = 1
// 1 2 3 4 5 6 2 --> 1 3 4 5 6 2 (pushing to last and splicing it )
// 1 3 4 5 6 2   --> increment index = 2
// 1 3 4 5 6 2 4 --> 1 3 5 6 2 4 (pushing to last and splicing it )
// 1 3 5 6 2 4   --> increment index = 3
// 1 3 5 6 2 4 6 --> 1 3 5 2 4 6 (pushing to last and splicing it)

function partitionOn(pred, items) {
  var i = 0;
  for(var index =0; index < items.length; index++) {    
    if(!pred(items[i])) {
      i++;
    } else {
       items.push(items[i]);
       items.splice(i, 1);
    }
  }
return i;
}


//http://www.codewars.com/kata/partition-on
