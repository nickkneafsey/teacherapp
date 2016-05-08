var teacherApp = angular.module('teacherApp', [
  'teacherApp.factories',
  'teacherApp.mainController', 
  'teacherApp.studentsController',
  'teacherApp.teachersController',
  'teacherApp.teacherController',
  'teacherApp.classController',
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
      .state('teachers', {
        url: '/teachers',
        templateUrl: './templates/teachers.html',
        controller: 'teachersController'
      })
      .state('teacher', {
        url: '/teachers/:id',
        templateUrl: './templates/teacher.html',
        controller: 'teacherController'
      })
      .state('classes', {
        url: '/classes',
        templateUrl: './templates/classes.html',
        controller: 'classesController'
      })
      .state('class', {
        url: '/classes/:id',
        templateUrl: './templates/class.html',
        controller: 'classController'
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
