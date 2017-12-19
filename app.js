var app = angular.module('mainApp', ["chart.js"]);
app.controller('MainController', function($scope, $http) {
    $scope.fetchData = function() {
        var url = "http://127.0.0.1:7799/flightFetch?origin=" + $scope.source + "&destination=" + $scope.destination;
        $http.get(url).then(function(response){
            $scope.flightData = response.data.FindFlightResult.flights;
            // for (i = 0; i < $scope.flightData.length; ++i) {
            // 	$scope.flightData[i].segments[0].departure_delay = Math.floor(Math.random() * 10) > 15 ? true : false;
            // 	$scope.flightData[i].segments[0].arrival_delay = Math.floor(Math.random() * 10) > 15 ? true : false;
            // }
        });
    }

    $scope.analyze = true;

    $scope.labels = [];
    $scope.delay_data = [[], []];
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
		    scales: {
		          yAxes: [
		          {
		            id: 'y-axis-1',
		            type: 'linear',
		            display: true,
		            position: 'left'
		          },
		          {
		            id: 'y-axis-2',
		            type: 'linear',
		            display: true,
		            position: 'right'
		          }
		        ]
		    }
		};
	$scope.series = ['Dep_delay', 'Arr_Delay'];

    $scope.getFlightInfoStatus = function(ident) {
    	console.log(ident);
    	var url = "http://127.0.0.1:7799/getFlightInfoStatus?ident=" + ident;
    	while ($scope.labels.length > 0) {
    		$scope.labels.pop();
    		$scope.delay_data[0].pop();
    		$scope.delay_data[1].pop();
    	}
    	$http.get(url).then(function(response){
    	    var vals = response.data.FlightInfoStatusResult.flights;
    	    for (i = 0; i < vals.length; ++i) {
    	    	$scope.labels.push(vals[i].estimated_departure_time.date);
    	    	$scope.delay_data[0].push(vals[i].departure_delay);
    	    	$scope.delay_data[1].push(vals[i].arrival_delay);
    	    }
    	    console.log($scope.delay_data[0]);
    	    console.log($scope.delay_data[1]);
    	    console.log($scope.labels);
    	});
    }
});