(function () {
    angular.module('catClicker').service('httpService', httpService);
    httpService.$inject = ['$q','$http']
    function httpService(q, http) {
        var vm = this;
        
        vm.getCatsData = function () {
            var defer = q.defer();
            http.get('./result.json').success(function (result) {
                defer.resolve(result);
            });
            return defer.promise;
        };
        
        vm.createCat = function () {
            
        }
    }
})();