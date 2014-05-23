(function(){

  var app = angular.module('app', ['ngRoute']);

  app.controller('AppController', ['$scope', '$location', function($scope, $location){
    // this.title = "Ashton Harris";
    $scope.getClass = function(path) {
      if ($location.path().substr(0, path.length) == path) {
        return "active";
      } else {
        return "";
      }
    };
  }]);

  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        redirectTo: '/work'
      })
      .when('/work', {
        templateUrl : 'templates/work.html',
        controller: 'AppController'
      })
      .when('/about', {
        templateUrl : 'templates/about.html',
        controller: 'AppController'
      })
      .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller: 'AppController'
      })
      .otherwise({
        redirectTo: 'templates/404.html'
      });
  }]);

})();