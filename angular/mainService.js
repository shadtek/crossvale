angular.module('cv')

.service('dataService', function () {

	this.testService = function() {
		var serviceTest = "service test"
		return serviceTest;
	}

});