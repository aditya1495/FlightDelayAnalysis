/**
* angular_wrapper Module
*
* Description
*/

var app = angular.module('myApp', []);

app.controller('ItemListController', function($scope, $http, $timeout){
  $scope.items = [];
  $scope.searchResults = [];
  $scope.ok = false;
  
  var retrieveItems = function () {
    
    $http.get('/api/items')
      .success(function (items) {
        $scope.items = items;
        $timeout(retrieveItems, 15000);
      }
    );
  };

  var queryFetch = function(){
    $scope.ok = true;
    $scope.val = 'Nhi chala';
    console.log('Ok ok');
    $http.get('some/url/by/python')
    .then(function(response) {
      $scope.searchResults = response.data;
    });
  };
});


