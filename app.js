var app = angular.module('mainApp', []);
app.controller('MainController', function($scope, $http) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.fetchData = function() {
        var url = "http://127.0.0.1:7799/flightFetch?origin=" + $scope.source + "&destination=" + $scope.destination;
        $http.get(url).then(function(response){
            $scope.flightData = response.data.FindFlightResult.flights;
        });
    }
});