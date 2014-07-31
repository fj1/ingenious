app.controller('UserController', ['$scope', '$http', '$routeParams', 'localStorageService', function($scope, $http, $routeParams, localStorageService) {
  $scope.$parent.showNavbar = false;
  this.username = "";
  $scope.start = function() {
    $scope.go('/lessons');
    localStorageService.set('name', $scope.username);
  };
}]);