var app = angular.module('myApp', ['ngRoute', 'LocalStorageModule']);

app.controller('AppController', ['$scope', '$location', '$rootScope', '$http', 'localStorageService', function($scope, $location, $rootScope, $http, localStorageService) {
  // allows us to decide which pages to show navbar
  $scope.showNavbar = true;
  $scope.go = function(path){
    console.log("Going to: ", path)
    $location.path(path);
  };
  $scope.goIfNameSet = function() {
    var name = localStorageService.get('name');
    if (name) {
      $scope.go('/lessons');
    } else {
      $scope.go('/user');
    }
  };
  $http.get('../json_lessons/all_lessons.json', { cache: false }).success(function(allLessonsData){
    $rootScope.allLessonsData = allLessonsData;
  });
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
      controller: 'LessonController'
    })
});








