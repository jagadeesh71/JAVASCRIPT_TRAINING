
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
