var add = function(integer) {
    var sum = 0,
    summate =  function (intergerValue){
        sum += intergerValue;
        return summate;
    }
    summate.valueOf = function () {
        return sum;
    }
    return summate(integer);
};

//http://www.codewars.com/kata/a-chain-adding-function/train/javascript
