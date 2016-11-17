var mod = angular.module('purdueSC.controllers.list', []);

mod.controller('listCtrl', function(
              $scope, $stateParams, ListService, NgMap){
    $scope.listId = $stateParams.listid;
    $scope.search = {
    	'name':''
    };
    $scope.listService = ListService;

  	

});