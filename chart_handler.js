var app = angular.module("chartApp", ["chart.js"]);

//var statOnAirlines = {"count":{"Virgin America":4647.0,"Hawaiian Airlines Inc.":6408.0,"Frontier Airlines Inc.":6735.0,"Spirit Air Lines":8632.0,"Alaska Airlines Inc.":13151.0,"JetBlue Airways":20482.0,"American Eagle Airlines Inc.":27568.0,"US Airways Inc.":32478.0,"United Air Lines Inc.":37363.0,"American Airlines Inc.":43074.0,"Skywest Airlines Inc.":46655.0,"Atlantic Southeast Airlines":48084.0,"Delta Air Lines Inc.":63676.0,"Southwest Airlines Co.":98060.0},"max":{"Virgin America":397.0,"Hawaiian Airlines Inc.":1003.0,"Frontier Airlines Inc.":696.0,"Spirit Air Lines":557.0,"Alaska Airlines Inc.":444.0,"JetBlue Airways":500.0,"American Eagle Airlines Inc.":780.0,"US Airways Inc.":638.0,"United Air Lines Inc.":886.0,"American Airlines Inc.":1988.0,"Skywest Airlines Inc.":931.0,"Atlantic Southeast Airlines":726.0,"Delta Air Lines Inc.":1184.0,"Southwest Airlines Co.":604.0},"mean":{"Virgin America":6.8962771681,"Hawaiian Airlines Inc.":1.3119538077,"Frontier Airlines Inc.":17.9107646622,"Spirit Air Lines":13.0731000927,"Alaska Airlines Inc.":3.0720857729,"JetBlue Airways":9.9883312177,"American Eagle Airlines Inc.":15.9958647707,"US Airways Inc.":5.1750107765,"United Air Lines Inc.":13.8855552284,"American Airlines Inc.":10.5483354228,"Skywest Airlines Inc.":11.9999571321,"Atlantic Southeast Airlines":9.6788952666,"Delta Air Lines Inc.":5.8882153402,"Southwest Airlines Co.":9.4534264736},"min":{"Virgin America":-20.0,"Hawaiian Airlines Inc.":-26.0,"Frontier Airlines Inc.":-32.0,"Spirit Air Lines":-28.0,"Alaska Airlines Inc.":-47.0,"JetBlue Airways":-27.0,"American Eagle Airlines Inc.":-29.0,"US Airways Inc.":-26.0,"United Air Lines Inc.":-40.0,"American Airlines Inc.":-29.0,"Skywest Airlines Inc.":-48.0,"Atlantic Southeast Airlines":-33.0,"Delta Air Lines Inc.":-26.0,"Southwest Airlines Co.":-15.0}};
var diffForm = [{"count":4647.0,"max":397.0,"mean":6.8962771681,"min":-20.0},{"count":6408.0,"max":1003.0,"mean":1.3119538077,"min":-26.0},{"count":6735.0,"max":696.0,"mean":17.9107646622,"min":-32.0},{"count":8632.0,"max":557.0,"mean":13.0731000927,"min":-28.0},{"count":13151.0,"max":444.0,"mean":3.0720857729,"min":-47.0},{"count":20482.0,"max":500.0,"mean":9.9883312177,"min":-27.0},{"count":27568.0,"max":780.0,"mean":15.9958647707,"min":-29.0},{"count":32478.0,"max":638.0,"mean":5.1750107765,"min":-26.0},{"count":37363.0,"max":886.0,"mean":13.8855552284,"min":-40.0},{"count":43074.0,"max":1988.0,"mean":10.5483354228,"min":-29.0},{"count":46655.0,"max":931.0,"mean":11.9999571321,"min":-48.0},{"count":48084.0,"max":726.0,"mean":9.6788952666,"min":-33.0},{"count":63676.0,"max":1184.0,"mean":5.8882153402,"min":-26.0},{"count":98060.0,"max":604.0,"mean":9.4534264736,"min":-15.0}];

app.controller("BarCtrl", function ($scope, $http) {
  $scope.labels = ['Virgin America', 'Hawaiian Airlines Inc.', 'Frontier Airlines Inc.','Spirit Air Lines', 'Alaska Airlines Inc.','JetBlue Airways','American Eagle Airlines Inc.','US Airways Inc.','United Air Lines Inc.', 'American Airlines Inc.',
   'Skywest Airlines Inc.', 'Atlantic Southeast Airlines', 'Delta Air Lines Inc.', 'Southwest Airlines Co.'];
   $scope.totalCount = 457013.0;
  $scope.series1 = ['min_delay'];
  $scope.series2 = ['max_delay'];

  $scope.min_delay = [];
  $scope.max_delay = [];

  for (i = 0; i < diffForm.length; ++i) {
  	$scope.min_delay.push(diffForm[i].min);
  }
  for (i = 0; i < diffForm.length; ++i) {
  	$scope.max_delay.push(diffForm[i].max);
  }
});

// app.controller("LineCtrl", function ($scope) {
//   $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
//   $scope.series = ['Series A', 'Series B'];
//   $scope.data = [
//     [65, 59, 80, 81, 56, 55, 40],
//     [28, 48, 55, 19, 86, 27, 90]
//   ];
// });

app.controller("PieChartCtrl", function($scope){  
  $scope.labels = ['Virgin America', 'Hawaiian Airlines Inc.', 'Frontier Airlines Inc.','Spirit Air Lines', 'Alaska Airlines Inc.','JetBlue Airways','American Eagle Airlines Inc.','US Airways Inc.','United Air Lines Inc.', 'American Airlines Inc.',
   'Skywest Airlines Inc.', 'Atlantic Southeast Airlines', 'Delta Air Lines Inc.', 'Southwest Airlines Co.'];
    // $scope.totalCount = 457013.0;
    $scope.countPercent = [];

  for (i = 0; i < diffForm.length; ++i) {
    $scope.countPercent.push((diffForm[i].count)*7);
  }
  
});