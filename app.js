var app = angular.module('mainApp', []);
app.controller('MainController', function($scope, $http) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.myData = null;
    $scope.details = null;
    $scope.source = null;
    $scope.destination = null;
    console.log("Teally??");

    $scope.fetchData = function() {
        var url = "http://127.0.0.1:7799/flightFetch?origin=" + $scope.source + "&destination=" + $scope.destination;
        $http.get(url).then(function(response){
            console.log(response.data);
            $scope.myData = response.data.FindFlightResult.flights;
            console.log($scope.myData);
            $scope.details = angular.fromJson($scope.myData);
        });
    }
});