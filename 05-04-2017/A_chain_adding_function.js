var add = function(integer) {
    var startingValue = 0;
    F =  function (intergerValue){
        startingValue += intergerValue;
        console.log(startingValue);
        return F;
    }
    return F(integer);
};

//http://www.codewars.com/kata/a-chain-adding-function/train/javascript
