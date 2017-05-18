(function() {
    angular.module('catClicker').config(configuration);
            
    function configuration($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: './views/catList.html'
        })
        .when('/addCat', {
            templateUrl: './views/createNewCat.html'
        });
    }
})();