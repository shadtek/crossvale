angular.module('cv')

.controller('mainController', function ($scope, dataService, firebaseService) {
	$scope.controllerTest = "controller test";
	
	$scope.serviceTest = dataService.testService();

	$scope.goats = firebaseService.getGoats();


});