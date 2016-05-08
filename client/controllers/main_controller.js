angular.module('teacherApp.mainController', [])

.controller('mainController', [
  '$scope',
  'StudentFactory',
  'TeachersFactory',
  'ClassesFactory',
function($scope, StudentFactory, TeachersFactory, ClassesFactory) {
  
  $scope.students = [];
  $scope.teachers = [];
  $scope.classes = [];
  var getAllStudents = function() {
    StudentFactory.getAllStudents()
      .then(function(students) {
        $scope.students = students;
      })
  };

  var getAllTeachers = function() {
    TeachersFactory.getAllTeachers()
      .then(function(teachers) {
        $scope.teachers = teachers;
      })
  };

  getAllClasses = function() {
    ClassesFactory.getAllClasses()
      .then(function(classes) {
        $scope.classes = classes;
      })
  }


  getAllStudents();
  getAllTeachers();
  getAllClasses();
}]);