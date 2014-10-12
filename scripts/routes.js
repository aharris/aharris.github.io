(function(){

  var routes = angular.module('routes', []);

  routes.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'templates/home.html',
        controller: 'AppController',
        animations: {
          enter: 'fade',
          leave: 'fade'
        }
      })
      .when('/work', {
        templateUrl : 'templates/work.html',
        controller: 'AppController',
        animations: {
          enter: 'enter-bottom',
          leave: 'leave-bottom'
        }
      })
      .when('/about', {
        templateUrl : 'templates/about.html',
        controller: 'AppController'
      })
      .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller: 'AppController'
      })
      .when('/:workRoute', {
        templateUrl : 'templates/work_details.html',
        controller: 'AppController'
      })
      .otherwise({
        redirectTo: 'templates/404.html'
      });
  }]);

})();