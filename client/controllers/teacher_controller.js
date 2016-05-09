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

  $scope.updatePhoto = function() {
    var file = document.getElementById('file').files[0];
    var data = new FormData();
    data.append('teacherPhoto', file)
    TeachersFactory.updateTeacherPhoto($stateParams.id, data).then(function() {
      getOneTeacher();
    });
  }

  getOneTeacher();
  getTeachersClasses();

}])