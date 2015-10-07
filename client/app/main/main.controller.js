'use strict';

angular.module('hintTestApp')
  .controller('MainCtrl', function ($scope, $http, Mandrill) {


  $scope.hintForm = [];

  $scope.sendMessage = function(){
    $scope.formStatus = "sending"; 

    var data = {
        'message': {
          //'html': $scope.hintForm,
          'html': '<strong>NAME:</strong> ' +$scope.hintForm.name + ' <br>' +
                  '<strong>PHONE:</strong> '+ $scope.hintForm.phone + ' <br>' +
                  '<strong>EMAIL:</strong> '+ $scope.hintForm.email + ' <br>' +
                  '<strong>HINTBOXES</strong>' + JSON.stringify($scope.hintForm.contact),
          'subject': 'New Hint Website Lead',
          'from_email': 'website@hintstack.com',
          'from_name': 'Hint Web',
          'to': [
            {
              name: 'Adam',
              email: 'info@hintstack.com',
              'type': 'to'
            }
          ],
          'headers': {
            'Reply-To': 'noreply@mail.com'
          }
        }
      };


      Mandrill.messages.send(data).success(function(response){
        // Succes handling
        $scope.formStatus = 'success';
      }).error(function(response){
        // Error handling
        $scope.formStatus = 'issue';
        console.log(response);
      });

  };

//     var g = {
//         html: "",
//         subject: "New Hint Website Lead!",
//         from_email: "info@hintstack.com",
//         from_name: "Hint Web",
//         to: [{
//             email: "info@hintstack.com",
//             name: "Hint",
//             type: "to"
//         }]
//     };

//     $scope.apiStatusClass = "", $scope.checkSetup = c.ping({
//         key: "J9ryPjJfxG74ozh7PdI31Q"
//     }, function(b, c, d, e) {
//         console.log("success", b), $scope.apiStatusClass = "alert alert-success"
//     }, function(b, c, d, e) {
//         return console.log("error", b), $scope.apiStatusClass = "alert alert-error", $scope.apiStatusContent = "Doesn't seem to be valid."
//     }), $scope.sendMessage = function() {
//         var b = angular.element(document.getElementById("contact-us"));
//         f.scrollToElement(b), $scope.formStatus = "sending", 
//         g.html = JSON.stringify($scope.azoform.contact), c.sendMessage({
//             key: "J9ryPjJfxG74ozh7PdI31Q",
//             message: g
//         }, function(b, c, d, e) {
//             console.log("success", b), 
//             $scope.apiStatusClass = "alert alert-success", 
//             $scope.formStatus = "success"
//         }, function(b, c, d, e) {
//             return console.log("error", b), 
//             $scope.apiStatusClass = "alert alert-error", 
//             $scope.apiStatusContent = "Doesn't seem to be valid."
//         })
//     }
// }]);


  });
