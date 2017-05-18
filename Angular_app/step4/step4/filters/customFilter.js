(function () {
    angular.module('catClicker').filter('myCustomFilter', myCustomFilter);

    function myCustomFilter() {
        return function(catList, searchValue) {
            var result = catList;
            if(searchValue) {
                result = catList.filter(function (cat){
                    return (cat.name.indexOf(searchValue) != -1)
                });
            }
            return result;
        }
    }
})();