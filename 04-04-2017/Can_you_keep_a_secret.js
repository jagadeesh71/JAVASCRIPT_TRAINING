//using a separate variable 
function createSecretHolder(secret) {
    var storeValue = secret,
        secretObject = {
      getSecret: function () {
        return storeValue;
      },
      setSecret: function (setSecret) {
        storeValue = setSecret;
      }
    }
    return secretObject;
};

//without using separate variable
function createSecretHolder(secret) {
    var secretObject = {
      getSecret: function () {
        return secret;
      },
      setSecret: function (setSecret) {
        secret = setSecret;
      }
    }
    return secretObject;
};

//http://www.codewars.com/kata/can-you-keep-a-secret/train/javascript
