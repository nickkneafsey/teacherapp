angular.module('teacherApp.singleStudentController', [])
.controller('singleStudentController', [
  '$scope',
  'StudentFactory',
  '$stateParams',
  '$document',
  function($scope, StudentFactory, $stateParams, $document) {
  
  $scope.student = {};
  $scope.classes = [];

  var getStudent = function() {
    StudentFactory.getOneStudent($stateParams.id).then(function(student) {
      $scope.student = student[0];
    })
  };

  var getStudentsSchedule = function() {
    StudentFactory.getStudentsSchedule($stateParams.id).then(function(classes) {
      $scope.classes = classes;
    })
  };

  $scope.updatePhoto = function() {
    var file = document.getElementById('file').files[0];
    var data = new FormData();
    data.append('studentPhoto', file)
    StudentFactory.updateStudentPhoto($stateParams.id, data).then(function() {
      getStudent();
    })
  }

  getStudent();
  getStudentsSchedule();
}]);