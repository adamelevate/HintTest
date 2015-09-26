'use strict';

angular.module('hintTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reservations', {
        url: '/reservations',
        templateUrl: 'app/reservations/reservations.html',
        controller: 'ReservationsCtrl'
      });
  });