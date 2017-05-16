(function() {
    angular.module('catClicker').controller('createCatController', createCat);
    createCat.$inject = ['myFactoryService','$scope'];
    function createCat(factoryServ, scope) {
        var vm = this,
            idTracker;
        vm.isDuplicate = false;
        
        factoryServ.getCatList().then(function (result) {
            vm.catsList = result;
        });
        
        vm.initializeCatObject = function() {
            vm.catObj = {
                name: '',
                description: '',
                src: ''
            };
        }
        
        vm.initializeCatObject();
        
        scope.setFile = function (files, type) {
            vm.catObj.src = files[0].name;
            scope.$apply();
        }
        
        vm.saveCatDetails = function(data) {
            idTracker = vm.catsList[vm.catsList.length - 1].id;
            if (data.src.indexOf('http') == -1) {          
                //only supporting online http urls or local images in the images folder
                data.src = './images/' + data.src;
            }
            data.votes = 0;
            data.clickCount = 0;
            data.id = idTracker + 1;
            idTracker++;
            data.isClicked = false;
            vm.catsList.push(data);
            factoryServ.setData(vm.catsList);
            vm.initializeCatObject();
        }
        
        
        vm.duplicateNameExists = function (data) {
            var result;
            result = vm.catsList.filter(function (cat) {
                return cat.name === data.name;
            });
            vm.isDuplicate = (result.length !== 0);
        }
    }
})();