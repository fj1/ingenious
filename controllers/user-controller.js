app.controller('UserController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.$parent.showNavbar = false;
  this.username = "";
}]);