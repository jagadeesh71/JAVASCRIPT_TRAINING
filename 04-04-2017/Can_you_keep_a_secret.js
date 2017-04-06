function createSecretHolder(secret) {
    var secretObject = {
      getSecret: function () {
        return this.secret;
      },
      setSecret: function (setSecret) {
        this.secret = setSecret;
      }
    }
    return secretObject;
};

//http://www.codewars.com/kata/can-you-keep-a-secret/train/javascript
