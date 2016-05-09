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
  };

  var getStudentsNotInClass = function(id) {
    return $http({
      method: 'GET',
      url: '/api/students/notenrolled/' +id 
    }).then(function(resp) {
      return resp.data;
    })
  }
  
  return {
    getAllStudents: getAllStudents,
    getOneStudent: getOneStudent,
    updateStudentPhoto: updateStudentPhoto,
    getStudentsSchedule: getStudentsSchedule,
    getStudentsNotInClass: getStudentsNotInClass
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
  };

  var getOneClass = function(id) {
    return $http({
      method: 'GET',
      url: '/api/classes/' + id
    })
    .then(function(resp) {
      return resp.data;
    })
  };

  var getStudentsInClass = function(id) {
    return $http({
      method: 'GET',
      url: '/api/classes/' + id + '/students'
    })
    .then(function(resp) {
      return resp.data;
    })
  };

  addStudentToClass = function(data, id) {
    return $http({
      method: 'POST',
      url: '/api/classes/' + id,
      data: data
    }).then(function(resp) {
      return resp.data;
    })
  }

  return {
    getAllClasses: getAllClasses,
    getOneClass: getOneClass,
    getStudentsInClass: getStudentsInClass,
    addStudentToClass: addStudentToClass
  }
}])

.factory('TeachersFactory', ['$http', function($http) {
  var getAllTeachers = function() {
    return $http({
      method: 'GET',
      url: '/api/teachers'
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  var getOneTeacher = function(id) {
    return $http({
      method: 'GET',
      url: '/api/teachers/' + id
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  var getTeachersClasses = function(id) {
    return $http({
      method: 'GET',
      url: '/api/teachers/' + id +'/classes'
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  var updateTeacherPhoto = function(id, data) {
    return $http({
      method: 'PUT',
      url: '/api/teachers/' + id,
      data: data,
      headers: {
        'Content-Type': undefined
      },
      transformRequest: angular.identity
    })
  };

  return {
    getAllTeachers: getAllTeachers,
    getOneTeacher: getOneTeacher,
    getTeachersClasses: getTeachersClasses,
    updateTeacherPhoto: updateTeacherPhoto
  }
}])