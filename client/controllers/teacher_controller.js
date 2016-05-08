angular.module('teacherApp.teacherController', [])

.controller('teacherController', [
  '$scope',
  '$stateParams',
  'TeachersFactory',
function($scope, $stateParams, TeachersFactory) {
  $scope.teacher = {};
  $scope.classes = [];

  var getOneTeacher = function() {
    TeachersFactory.getOneTeacher($stateParams.id).then(function(teacher) {
      $scope.teacher = teacher[0];
    });
  };

  var getTeachersClasses = function() {
    TeachersFactory.getTeachersClasses($stateParams.id).then(function(classes) {
      $scope.classes = classes;
    });
  };

  getOneTeacher();
  getTeachersClasses();

}])