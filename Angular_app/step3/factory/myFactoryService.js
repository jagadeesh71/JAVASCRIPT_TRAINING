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
        
        return {
            setData: setData,
            getData: getData
        };
    }
})();