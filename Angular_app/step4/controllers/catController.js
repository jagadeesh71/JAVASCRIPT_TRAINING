(function () {
    angular.module('catClicker').controller('catController', catController);
    catController.$inject = ['myFactoryService', '$scope'];
    function catController(facService, scope, cookies) {
        var vm = this;
        vm.isDuplicate = false;
        
        var loadCatsData = function () {
            facService.getCatList().then(function (result) {
                vm.catList = result;
                vm.getFirstCatDetails(vm.catList[0]);
            });
        };
        
        loadCatsData();
        
        vm.getFirstCatDetails = function (catData) {
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
        
        vm.loadCatDetails = function (data) {
            vm.catObj = {
                name: data.name,
                description: data.description,
                src: data.src,
                id: data.id,
                votes: data.votes,
                clickCount: data.clickCount,
                isClicked: data.isClicked
            };
            $('#editCatDetails').modal('toggle');
        }
        
        vm.duplicateNameExists = function (data) {
            var result;
            result = vm.catList.filter(function (cat) {
                return cat.name === data.name && cat.id != data.id;
            });
            vm.isDuplicate = (result.length !== 0);
        }
        
        vm.editCatDetails = function(data) {
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
            facService.setData(vm.catList);
            vm.getFirstCatDetails(data);
        }
        
        vm.deleteCat = function(catData) {
            var index = vm.catList.findIndex(function (cat) {
                return cat.id === catData.id;
            });
            vm.catList.splice(index,1);
            if (vm.catList.length) {
               vm.getFirstCatDetails(vm.catList[0]); 
            }
        }
        
    }
    
})();