app.controller('AllLessonsController', ['$scope', '$http', function($scope, $http) {
  $scope.$parent.showNavbar = false;
  document.body.classList.remove('no-image')
  
  $http.get('../json_lessons/all_lessons.json').success(function(allLessonsData){
    $scope.allLessons = allLessonsData;
  });
}]);