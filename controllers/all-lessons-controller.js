app.controller('AllLessonsController', ['$scope', '$http', function($scope, $http) {
  $scope.$parent.showNavbar = false;
  $http.get('../json_lessons/all_lessons.json').success(function(allLessonsData){
    $scope.allLessons = allLessonsData;
  });
}]);