angular.module('teacherApp.teachersController', [])
.controller('teachersController', ['$scope', 'TeachersFactory', function($scope, TeachersFactory) {
  $scope.teachers = [];
  var getAllTeachers = function() {
    TeachersFactory.getAllTeachers()
      .then(function(teachers) {
        $scope.teachers = teachers;
      })
  }
  getAllTeachers();
}]);