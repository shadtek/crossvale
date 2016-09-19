angular.module('cv')

.service('firebaseService', function ($firebase, $firebaseObject, $firebaseArray) {
  var firebaseUrl = 'https://burrfamilyfarm.firebaseio.com/';

  this.getGoats = function() {
    return $firebaseArray(new Firebase(firebaseUrl + 'goats'));
  };

})