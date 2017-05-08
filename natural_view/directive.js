var app = angular.module('newMod', []);


  app.directive('header', function() {
    return {
      restrict: 'C',
      replace: true,
      template: '<h1>new header</h1>'
    }
  })
