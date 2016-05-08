angular.module('teacherApp.classesController', [])

.controller('classesController', ['$scope', 'ClassesFactory', function($scope, ClassesFactory) {
  $scope.classes = [];
  var getAllClasses = function() {
    ClassesFactory.getAllClasses()
     .then(function(classes) {
      $scope.classes = classes;
     })
  }
  getAllClasses();
}])