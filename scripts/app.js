(function(){

  var app = angular.module('app', [
    'ngRoute',
    'routes'
    ]);

  app.factory('Work', ['$http', '$q', function($http, $q){

    var work = $q.defer();

    $http.get('data/work.json').success(function (res) {
      work.resolve(res);
    });

    return work.promise;
  }]);

  app.controller('AppController', ['$http', '$scope', '$location', 'Work', function($http, $scope, $location, Work){

    Work.then(function (res) {
      $scope.app.items = res;
    });

    // Add active class to current menu items
    $scope.getClass = function(path) {
      if ($location.path().substr(0, path.length) == path) {
        return "active";
      } else {
        return "";
      }
    };

  }]);

})();