'use strict';

angular.module('hintTestApp')
  .controller('MainCtrl', function ($scope, $http, Mandrill) {


  $scope.iconForm = [];

  $scope.sendMessage = function(){
    $scope.formStatus = "sending"; 

    var data = {
        'message': {
          //'html': $scope.iconForm,
          'html': '<strong>NAME:</strong> ' +$scope.iconForm.name + ' <br>' +
                  '<strong>PHONE:</strong> '+ $scope.iconForm.phone + ' <br>' +
                  '<strong>EMAIL:</strong> '+ $scope.iconForm.email,
          'subject': 'New Icon Lead',
          'from_email': 'info@iconthermostat.com',
          'from_name': 'Icon Web',
          'to': [
            {
              'name': 'Adam Lorentzen',
              'email': 'adamelevate@gmail.com',
              'type': 'to'
            }
          ],
          'headers': {
            'Reply-To': 'noreply@iconthermostat.com'
          }
        }
      };

      var welcome = {
        'message': {
          //'html': ,
          'subject': 'Your Icon Reservation',
          'from_email': 'noreply@iconthermostat.com',
          'from_name': 'Icon Thermostat',
          'to': [
            {
              'name': $scope.iconForm.name,
              'email': $scope.iconForm.email,
              'type': 'to'
            }
          ],
          'headers': {
            'Reply-To': 'noreply@iconthermostat.com'
          }
        }
      };


      Mandrill.messages.send(data).success(function(response){
        // Succes handling
        $scope.formStatus = 'success';
      }).error(function(response){
        // Error handling
        $scope.formStatus = 'issue';
        //console.log(response);
      });

      Mandrill.messages.send(welcome).success(function(response){
        // Succes handling
        //$scope.formStatus = 'success';
      }).error(function(response){
        // Error handling
        //$scope.formStatus = 'issue';
        console.log(response);
      });

  };



  });
