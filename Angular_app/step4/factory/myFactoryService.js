(function () {
    angular.module('catClicker').factory('myFactoryService', myFactoryService);
    
    myFactoryService.$inject = ['$q','$http'];
    function myFactoryService(q, http) {
        
        var listOfCats = [];
        
        function setData (catList) {
            listOfCats = angular.copy(catList);
        }
        
        function getData () {
            return listOfCats;
        }
        
        function getCatList() {
            var defer = q.defer();
            if(!listOfCats.length) {
                http.get('./result.json').success(function (result) {
                    setData(result.data);
                    defer.resolve(listOfCats);
                });
            } else {
                defer.resolve(listOfCats);
            }
            return defer.promise;
        }
        
        getCatList();
        
        return {
            setData: setData,
            getData: getData,
            getCatList: getCatList
        };
    }
})();