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
        templateUrl:'./templates/student.html', 
        controller:'singleStudentController'
      })

}])

teacherApp.factory("StudentFactory", ['$http', function($http) {
  var getAllStudents = function() {
    return $http({
      method: 'GET',
      url: '/api/students'
    })
    .then(function(resp) {
      return resp.data;
    })
  };

  var updateStudentPhoto = function(id, data) {
    return $http({
      method: 'PUT',
      url: '/api/students/' + id,
      data: data,
      headers: {
        'Content-Type': undefined
      },
      transformRequest: angular.identity
    })
  }
  
  return {
    getAllStudents: getAllStudents,
    updateStudentPhoto: updateStudentPhoto
  }

}])

teacherApp.controller('mainController', ['$scope', 'StudentFactory', function($scope, StudentFactory) {
  $scope.students = [];
  var getAllStudents = function() {
    StudentFactory.getAllStudents()
      .then(function(students) {
        $scope.students = students;
      })
  }
  getAllStudents();
}]);

teacherApp.controller('teacherController', ['$scope', function($scope) {
  
}]);


teacherApp.controller('studentController', ['$scope', function($scope) {

}]);

teacherApp.controller('singleStudentController', ['$scope', 'StudentFactory', '$stateParams', '$document', function($scope, StudentFactory, $stateParams, $document) {
  $scope.students = [];
  var getAllStudents = function() {
    StudentFactory.getAllStudents()
      .then(function(students) {
        $scope.students = students;
      })
  }
  getAllStudents();
  console.log($stateParams);
  $scope.updatePhoto = function() {
    var file = document.getElementById('file').files[0];
    //file.name = file.name.replace(/ /gi, '+')
    var data = new FormData();
    data.append('studentPhoto', file)
    StudentFactory.updateStudentPhoto($stateParams.id, data).then(function() {
      getAllStudents();
    })
  }
}]);
