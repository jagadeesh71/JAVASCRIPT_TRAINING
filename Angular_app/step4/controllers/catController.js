(function () {
    angular.module('catClicker').controller('catController', catController);
    catController.$inject = ['httpService','$scope'];
    function catController(httpService, scope) {
        var vm = this,
            isEdited = false,
            idTracker;
        vm.isDuplicate = false;
        
        var loadCatsData = function () {
            httpService.getCatsData().then(function (result) {
                vm.catList = result.data;
                idTracker = vm.catList.length;
                vm.getCatDetails(vm.catList[0]);
            });
        };
        
        loadCatsData();
        
        
        vm.getCatDetails = function (catData) {
            vm.catData = [];
            vm.catData = vm.catList.filter(function (cat) {
                return cat.id === catData.id ;
            })[0];
            vm.catData.isClicked = true;
            vm.selectedCat = vm.catData.id;
        }
        
        vm.incrementCount = function (catReference) {
            catReference.clickCount++;
        }
        
        scope.setFile = function (files, type) {
            vm.catObj.src = files[0].name;
            scope.$apply();
        }
        
        vm.initializeCatObject = function() {
            vm.catObj = {
                name: '',
                description: '',
                src: ''
            };
            isEdited = false;
        }
        
        vm.editCatDetails = function (data) {
            vm.catObj = {
                name: data.name,
                description: data.description,
                src: data.src,
                id: data.id,
                votes: data.votes,
                clickCount: data.clickCount,
                isClicked: data.isClicked
            };
            isEdited = true;
        }
        
        vm.duplicateNameExists = function (data) {
            var result;
            if(data.name && !isEdited) {
                result = vm.catList.filter(function (cat) {
                    return cat.name === data.name;
                });
            } else {
                result = vm.catList.filter(function (cat) {
                    return cat.name === data.name && cat.id != data.id;
                });
            }
            vm.isDuplicate = (result.length !== 0);
        }
        
        vm.saveCatDetails = function(data) {
            if (!isEdited) {
                if (data.src.indexOf('http') == -1) {          
                    //only supporting online http urls or local images in the images folder
                    data.src = './images/' + data.src;
                }
                data.votes = 0;
                data.clickCount = 0;
                data.id = ++idTracker;
                data.isClicked = false;
                vm.catList.push(data);
            } else {
                if (data.src.indexOf('http') == -1 && data.src.indexOf('/images') == -1) {   
                    //only supporting online urls or local images in the images folder
                    data.src = './images/' + data.src;
                }

                vm.catList.forEach( function(cat) {
                    if (cat.id == data.id) {
                        cat.name = data.name;
                        cat.description = data.description;
                        cat.src = data.src;
                    }
                });
            }
            vm.getCatDetails(data);
        }
        
        vm.deleteCat = function(catData) {
            var index = vm.catList.findIndex(function (cat) {
                return cat.id === catData.id;
            });
            vm.catList.splice(index,1);
            if (vm.catList.length) {
               vm.getCatDetails(vm.catList[0]); 
            }
        }
        
    }
    
})();