angular.module('cv')

.controller('mainController', function ($scope, firebaseService) {
	$scope.controllerTest = "controller test";

	$scope.goats = firebaseService.getGoats();

	$scope.cart = [];

	// Adds and item to the shopping cart
	$scope.addCart = function(item){
		$scope.cart.push(item);
	    console.log("Added to cart");
	};


});