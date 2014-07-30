app.controller('LessonsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.currentLesson = 1;
  $scope.$parent.showNavbar = false;
  // $scope.centerText = "text-align: center";
  $scope.nextLesson = function() {
    $scope.currentLesson++;
  };
  $scope.previousLesson = function() {
    $scope.currentLesson--;
  };
  $http.get('../json_lessons/' + $routeParams.id + '.json', { cache: false }).success(function(lessonData){
    $scope.lessons = lessonData;
  });
}]);