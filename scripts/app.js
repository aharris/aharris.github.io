(function(){

  var app = angular.module('app', [
    'ngRoute',
    'routes'
    ]);

  app.controller('AppController', ['$scope', '$location', function($scope, $location){

    $scope.getClass = function(path) {
      if ($location.path().substr(0, path.length) == path) {
        return "active";
      } else {
        return "";
      }
    };

  }]);

  app.controller('workController', ['$http', function ($http) {
    var work = this;

    work.items = [];

    $http.get('data/work.json').success(function (data) {
      work.items = data;
    });
  }]);



})();