(function(){

  var app = angular.module('app', ['ngRoute']);

  app.controller('AppController', function(){
    // this.title = "Ashton Harris";
  });

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