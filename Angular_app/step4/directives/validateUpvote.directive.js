(function () {

    validateUpvote.$inject = ['$cookies', 'myFactoryService'];

    angular.module('catClicker').directive('validateUpvote', validateUpvote);

    function validateUpvote($cookies, facService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, parentCtrl) {
                function myValidation(value) {
                    var cat = scope.$eval(attr.validateUpvote);
                    var prevValue = $cookies.get(cat.id);
                    
                    var catObject = scope.$parent.catCtrl.catList.find(function(catObj) {
                        return catObj.id == cat.id;
                    });
                    
                    if (prevValue) {
                        catObject.votes = parseInt(prevValue, 10);
                        facService.setData(scope.$parent.catCtrl.catList);
                        parentCtrl.$setViewValue(prevValue);
                        parentCtrl.$render();
                    } else {
                        catObject.votes = parseInt(parentCtrl.$viewValue, 10);
                        facService.setData(scope.$parent.catCtrl.catList);
                        $cookies.put(cat.id, parseInt(parentCtrl.$viewValue,10));
                        parentCtrl.$render();
                    }
                }
                parentCtrl.$parsers.push(myValidation);
            }
        }
    }
    
    
    checkValidity.$inject = ['imageUrlCheckService', '$q'];

    angular.module('catClicker').directive('checkValidity', checkValidity);
    
    function checkValidity (urlCheckService, q) {
        return {
          restrict: 'A',
          require: 'ngModel',
          link: function (scope, elem, attr, ctrl) {
              
              var cat = scope.$eval(attr.checkValidity);

              ctrl.$asyncValidators.urlValidation = function () {
                  return urlCheckService.isValidUrl(cat.src).then(function(isValid) {
                      if (!isValid) {
                          return q.reject();
                      }
                      return true;
                  });
              }
          }
       }
    }
    

})();