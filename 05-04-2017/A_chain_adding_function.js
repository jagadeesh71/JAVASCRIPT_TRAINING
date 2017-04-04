var add = function(arg) {
    var a = 0;
    F =  function (arg){
        a = a + arg;
        console.log(a);
        return F;
    }
    return F(arg);
};

//http://www.codewars.com/kata/a-chain-adding-function/train/javascript
