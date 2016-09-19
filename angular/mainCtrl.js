angular.module('cv')

.controller('mainController', function ($scope, firebaseService) {
	$scope.controllerTest = "controller test";

	$scope.goats = firebaseService.getGoats();


});