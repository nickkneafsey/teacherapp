var teacherApp = angular.module('teacherApp', [
  'teacherApp.factories',
  'teacherApp.mainController', 
  'teacherApp.studentsController',
  'teacherApp.teachersController',
  'teacherApp.classesController',
  'teacherApp.singleStudentController',
  'ngMaterial',
  'ui.router'
]);

teacherApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './templates/main.html',
        controller: 'mainController'
      })
      .state('classes', {
        url: '/classes',
        templateUrl: './templates/classes.html',
        controller: 'classesController'
      })
      .state('students', {
        url: '/students',
        templateUrl: './templates/students.html',
        controller: 'studentsController'
      })
      .state('student', {
        url:'/students/:id',
        templateUrl:'./templates/student.html', 
        controller:'singleStudentController'
      })

}])
