(function(){

  var app = angular.module('app', [
    'ngRoute',
    'routes',
    'ngAnimate',
    'hljs'
    ]);

  app.config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 2 spaces
      tabReplace: '  '
    });
  });

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

  app.controller('DetailsController', ['$scope', '$location', 'filterFilter', 'Work', function ($scope, $location, filterFilter, Work) {
    Work.then(function (res) {
      $scope.app.items = res;
      $scope.app.currentItem = filterFilter($scope.app.items, { 'route' : $location.$$path.substr(1) })[0];
    });

  }]);

  app.controller('DateController', ['$scope', function ($scope) {
    var date = new Date();
    $scope.currentDate = date.getDate();
  }]);

  app.directive('viewAnimations', function ($route) {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var animations = $route.current.animations;
        if (!animations) return;

        if (animations.enter) element.addClass(animations.enter);
        if (animations.leave) element.addClass(animations.leave);
      }
    };
  });

})();