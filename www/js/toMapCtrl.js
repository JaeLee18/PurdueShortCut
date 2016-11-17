var mod = angular.module('purdueSC.controllers.toMap', ['ionic']);

mod.controller('toMapCtrl', function($scope,
									 $stateParams,
									 ListService,
									 $ionicLoading,
									 NgMap){
	var mmap;
	NgMap.getMap().then(function(map){
    $scope.map = map;
  	})

	$scope.listId = $stateParams.listId;
	//console.info($scope.listId);

	$scope.list = ListService.getList(parseInt($scope.listId));
    $scope.desti = $scope.list.name;
	//console.log($scope.list);
	//console.log($scope.list.latitude);
	//console.log($scope.map);
	//var lat = $scope.list.latitude;
	//var lon = $scope.list.longtitude;
	//console.info(lat);
	//console.info(lon);
	

	$scope.getDirections = function (){
	//alert($scope.list.latitude);
 //   alert($scope.list.longtitude);
 
    var destination=[
    	$scope.list.latitude,
    	$scope.list.longtitude
    ];
    var source = [40.427719, -86.916953];
    launchnavigator.navigate(destination,source);
  }


			/*var lt;
			navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.currentLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                console.log(JSON.stringify($scope.currentLocation)); 
                $scope.jsonString = JSON.stringify($scope.currentLocation);
                
                $scope.parsed = JSON.parse($scope.jsonString);
                console.info($scope.parsed);
                lt = $scope.parsed.lat;
                ln = $scope.parsed.lng;
                console.info(lt);
                alert(lt);
                var destination={
                	lt,ln
                };
                var source=[40.427719, -86.916953];
                launchnavigator.navigate(destination,source);             
            },

            function(error) {                    
                alert('Unable to get location: ' + error.message);
            }, options);
*/
			
  
		

});