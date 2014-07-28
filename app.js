var app = angular.module('myApp', ['ngRoute']);

app.controller('AppController', ['$scope', '$location', function($scope, $location) {
  angular.element(document).ready(function(){});
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
    .when('/lessons', {
      templateUrl: 'public/views/all_lessons.html',
      controller: 'AllLessonsController'
    })
    .when('/lessons/:id', {
      templateUrl: 'public/views/lesson_view.html',
      controller: 'LessonsController'
    })
});

app.controller('AllLessonsController', ['$scope', '$http', function($scope, $http) {
  $http.get('./json_lessons/all_lessons.json').success(function(allLessonsData){
    $scope.allLessons = allLessonsData;
  });
}]);

app.controller('LessonsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.currentLesson = 1;
  $scope.nextLesson = function() {
    $scope.currentLesson++;
  };
  $scope.previousLesson = function() {
    $scope.currentLesson--;
  };
  // console.log("the $routeParams.id is " + $routeParams.id);
  $http.get('/json_lessons/' + $routeParams.id + '.json', { cache: false }).success(function(lessonData){
    $scope.lessons = lessonData;
  });
}]);








