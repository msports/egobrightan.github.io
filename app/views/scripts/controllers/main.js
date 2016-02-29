'use strict';

/**
* @ngdoc function
* @name fotbollskalendernWebApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the fotbollskalendernWebApp
*/

angular.module('fotbollskalendernWebApp')
.controller('MainCtrl', function ($scope, $location, MatchService) {
	var gamesFromDay = function (date) {
		MatchService.getGamesByDate(date).then(function (result) {
			$scope.allDays.push({
				date: date,
				games: result
			});
		});
	};

	$scope.allDays = [];
	var days = 7;
	var today = new Date();
	$scope.gameIsPassed = (today.getHours() + 2);
	$scope.now = today.getHours();
	var options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	};

	for (var i = 0; i < days; i++) {
		gamesFromDay(today.toLocaleDateString('sv-SE', options));
		today.setDate(today.getDate() + 1);
	}

	$scope.matchInfo = function (game) {
		$location.path('match').search('url', game._links.self.href);
	};
});
