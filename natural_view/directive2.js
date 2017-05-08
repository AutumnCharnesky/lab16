var app = angular.module('newMod');

  app.directive('newContent', function() {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'content.html'
    }
  })
