(function () {
    angular.module('catClicker').controller('catController', catController);
    catController.$inject = ['myFactoryService', '$scope'];
    function catController(facService, scope, $cookies) {
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
        
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    vm.catObj.absolutePath =  e.target.result;
                    scope.$apply();
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        
        scope.setFile = function (input, type) {
            vm.catObj.src = input.files[0].name;
            readURL(input);
            scope.$apply();
        }
        
        vm.loadCatDetails = function (data) {
            vm.catObj = {
                name: data.name,
                description: data.description,
                src: data.src,
                id: data.id,
                votes: data.votes,
                clickCount: data.clickCount,
                isClicked: data.isClicked,
                absolutePath: data.absolutePath
            };
            $('#editCatDetails').modal('toggle');
        }
        
        vm.duplicateNameExists = function (data) {
            var result;
            result = vm.catList.filter(function (cat) {
                return cat.name.toLowerCase() === data.name && data.name.toLowerCase() && cat.id != data.id;
            });
            vm.isDuplicate = (result.length !== 0);
        }
        
        vm.updateCatDetails = function(data) {
            vm.catList.forEach( function(cat) {
                if (cat.id == data.id) {
                    cat.name = data.name;
                    cat.description = data.description;
                    cat.src = data.src;
                    cat.absolutePath = data.absolutePath;
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
            facService.setData(vm.catList);
            if (vm.catList.length) {
               vm.getFirstCatDetails(vm.catList[0]); 
            }
        }
       
        vm.upVote = function() {
            
        }
    }
    
})();