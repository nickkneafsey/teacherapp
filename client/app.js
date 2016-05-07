var teacherApp = angular.module('teacherApp', [
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
      .state('students', {
        url: '/students',
        templateUrl: './templates/students.html',
        controller: 'studentController'
      })
      .state('student', {
        url:'/students/:id',
        templateUrl:'', 
        controller:''
      })

}])

teacherApp.service("teacherOptions", [function() {
  
}])

teacherApp.controller('mainController', ['$scope', function($scope) {

}])

teacherApp.controller('teacherController', ['$scope', function($scope) {
  

}]);


teacherApp.controller('studentController', ['$scope', function($scope) {

}]);
