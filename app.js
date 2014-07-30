var app = angular.module('myApp', ['ngRoute']);

app.controller('AppController', ['$scope', '$location', function($scope, $location) {
  // allows us to decide which pages to show navbar
  $scope.showNavbar = true;

  $scope.go = function(path){
    console.log("Going to: ", path)
    $location.path(path);
  };
}]);

// for angular routes
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'public/views/greeting.html',
      controller: 'AppController'
    })
    .when('/user', {
      templateUrl: 'public/views/user.html',
      controller: 'UserController'
    })
    .when('/lessons', {
      templateUrl: 'public/views/all_lessons.html',
      controller: 'AllLessonsController'
    })
    .when('/lessons/:id', {
      templateUrl: 'public/views/lesson_view.html',
      controller: 'LessonsController'
    })
});








