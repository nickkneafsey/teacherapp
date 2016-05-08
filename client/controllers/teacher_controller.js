angular.module('teacherApp.teacherController', [])

.controller('teacherController', [
  '$scope',
  '$stateParams',
  'TeachersFactory',
function($scope, $stateParams, TeachersFactory) {
  $scope.teacher = {};

  var getOneTeacher = function() {
    TeachersFactory.getOneTeacher($stateParams.id).then(function(teacher) {
      $scope.teacher = teacher[0];
    })
  }
  getOneTeacher();

}])