angular.module('teacherApp.classController', [])

.controller('classController', ['$scope', '$stateParams', 'ClassesFactory', function($scope, $stateParams, ClassesFactory) {
  $scope.class = {};
  $scope.students = [];

  var getOneClass = function() {
    ClassesFactory.getOneClass($stateParams.id)
    .then(function(classes) {
      $scope.class = classes[0];
    })
  };

  var getStudentsInClass = function() {
    ClassesFactory.getStudentsInClass($stateParams.id)
    .then(function(students) {
      $scope.students = students;
    })
  }

  getOneClass();
  getStudentsInClass();

}])