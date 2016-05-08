angular.module('teacherApp.mainController', [])

.controller('mainController', ['$scope', 'StudentFactory', function($scope, StudentFactory) {
  $scope.students = [];
  var getAllStudents = function() {
    StudentFactory.getAllStudents()
      .then(function(students) {
        $scope.students = students;
      })
  }
  getAllStudents();
}]);