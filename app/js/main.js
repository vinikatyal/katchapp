(function () {

  'use strict';
  var app = angular.module("KatchApp", []);
  app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  });
  

}());