(function() {
    angular.module('catClicker',['ngRoute']).config(configuration);
            
    function configuration($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/addCat", {
            templateUrl: "createNewCat.html"
        });
    }
})();