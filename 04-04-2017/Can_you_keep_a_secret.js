function createSecretHolder(secret) {
    var secretObject = {
      secretValue: secret,
      getSecret: function () {
        return this.secretValue;
      },
      setSecret: function (setSecret) {
        this.secretValue = setSecret;
      }
    }
    return secretObject;
};

//http://www.codewars.com/kata/can-you-keep-a-secret/train/javascript
