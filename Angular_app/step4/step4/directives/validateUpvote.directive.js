(function () {

    validateUpvote.$inject = ['upVoteService'];

    angular.module('catClicker')
        .directive('validateUpvote', validateUpvote);

    function validateUpvote(upVoteService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, mCtrl) {
                function myValidation(value) {
                    var cat = scope.$eval(attr.validateUpvote);
                    var prevValue = upVoteService.getUpvoted(cat.id);
                    if (prevValue) {
                        mCtrl.$setViewValue(prevValue);
                        mCtrl.$render();
                    } else {
                        upVoteService.setUpvoted(cat.id, mCtrl.$viewValue);
                    }
                }
                mCtrl.$parsers.push(myValidation);
            }
        }
    }

})();