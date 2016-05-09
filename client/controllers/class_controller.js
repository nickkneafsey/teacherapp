angular.module('teacherApp.classController', [])

.controller('classController', [
  '$scope',
  '$stateParams',
  'StudentFactory',
  'ClassesFactory',
function($scope, $stateParams, StudentFactory, ClassesFactory) {
  $scope.filter = "";
  $scope.class = {};
  $scope.students = [];
  $scope.unenrolledStudents = [];

  var getOneClass = function() {
    ClassesFactory.getOneClass($stateParams.id)
    .then(function(classes) {
      $scope.class = classes[0];
    });
  };

  var getStudentsInClass = function() {
    ClassesFactory.getStudentsInClass($stateParams.id)
    .then(function(students) {
      $scope.students = students;
    });
  };

  var getStudentsNotInClass = function() {
    StudentFactory.getStudentsNotInClass($stateParams.id)
    .then(function(studentsNotInClass) {
      $scope.unenrolledStudents = studentsNotInClass;
    });
  };

  $scope.addStudentToClass = function(studentId) {
    var data = {studentId: studentId};
    ClassesFactory.addStudentToClass(data, $stateParams.id)
    .then(function() {
      getStudentsInClass();
      getStudentsNotInClass();
    });
  }

  getOneClass();
  getStudentsInClass();
  getStudentsNotInClass();

}])