var app = angular.module('newMod');

  app.directive('sidebar', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'content2.html'
    }

  });
