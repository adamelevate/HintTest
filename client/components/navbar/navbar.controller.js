'use strict';

angular.module('hintTestApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];


    console.log('hello');

    $scope.initScrollr = function () {
      $(function () {
          
        var height = $('header').height();
          var nav = $("#nav");
          $(window).bind("scroll", function(e) {
            if ($('body').scrollTop() > height-110) {
              nav.addClass("fix");
            }
            else {
              nav.removeClass("fix");
            }
            
          });
      });

    };

    $scope.initScrollr();

});