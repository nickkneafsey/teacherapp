angular.module('teacherApp.factories', [])

.factory('StudentFactory', ['$http', function($http) {
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

.factory('ClassesFactory', ['$http', function($http) {
  var getAllClasses = function() {
    return $http({
      method: 'GET',
      url: '/api/classes'
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  return {
    getAllClasses: getAllClasses
  }
}])