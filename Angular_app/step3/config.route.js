(function() {
    angular.module('catClicker').config(configuration);
    configuration.$inject = ['$routeProvider'];
    function configuration(routeProvider) {
        routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/addCat", {
            templateUrl: "addCat.html"
        })
    }
})();