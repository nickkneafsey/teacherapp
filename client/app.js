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

  var getOneStudent = function(id) {
    return $http({
      method: 'GET',
      url: '/api/students/' + id
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
  };

  var getStudentsSchedule = function(id) {
    return $http({
      method: 'GET',
      url: '/api/students/schedule/' + id
    })
    .then(function(resp) {
      return resp.data;
    })
  }
  
  return {
    getAllStudents: getAllStudents,
    getOneStudent: getOneStudent,
    updateStudentPhoto: updateStudentPhoto,
    getStudentsSchedule: getStudentsSchedule
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
