var app = angular.module('app', []);

app.controller('me', function($scope) {
	$scope.officialName = 'Chan Wei Zhang';
	$scope.traditional = "陳韋彰(Traditional)";
	$scope.simplified = "陈伟彰(Simplified)";
	$scope.alias = 'Clyde';
	$scope.citizenship = 'Singaporean';
	$scope.status = 'National Service';
	$scope.dob = '25th July';
    $scope.age = (new Date().getFullYear()) - 1993;
});