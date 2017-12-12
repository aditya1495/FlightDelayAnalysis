var app = angular.module('mainApp', []);
app.controller('MainController', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

  $scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
];
    console.log($scope.myData);
    $scope.details = angular.fromJson($scope.myData);
    console.log($scope.details);

});