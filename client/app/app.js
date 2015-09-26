'use strict';

angular.module('hintTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angular-mandrill',
  'duScroll'
])
.value('duScrollDuration', 2000)
.config(function(MandrillProvider) {
  MandrillProvider.setApiKey('IxwTSi75tHSbFHI-JVSQYQ');
})
	// .factory('Mandrill', function($resource) {
	//   var Mandrill;
	//   return Mandrill = $resource('https://mandrillapp.com/api/1.0/:category/:call.json', {}, {
	//     sendMessage: {
	//       method: "POST",
	//       isArray: true,
	//       params: {
	//         category: "messages",
	//         call: "send"
	//       }
	//     },
	//     ping: {
	//       method: "POST",
	//       params: {
	//         category: "users",
	//         call: "ping"
	//       }
	//     }
	//   });
	// })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
      
    $locationProvider.html5Mode(true);
  });
