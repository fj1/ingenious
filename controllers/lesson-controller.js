app.controller('LessonController', ['$scope', '$http', '$routeParams', '$rootScope', function($scope, $http, $routeParams, $rootScope) {
  $scope.currentSlide = 1;
  $scope.$parent.showNavbar = false;
  // $scope.centerText = "text-align: center";

  // replace lightbulb background image
  document.body.classList.add('no-image')

  $scope.nextLesson = function() {
    $scope.currentSlide++;
  };
  $scope.previousLesson = function() {
    $scope.currentSlide--;
  };

  $scope.lessonData = undefined;
  for (var i in $rootScope.allLessonsData) {
    if ($rootScope.allLessonsData[i].id == $routeParams.id) {
      $scope.lessonData = $rootScope.allLessonsData[i];
    }
  }
  $scope.lessonLength = $scope.lessonData.length;

  $http.get('json_lessons/' + $routeParams.id + '.json', { cache: false }).success(function(lessonData){
    $scope.lessons = lessonData;
  });
}]);