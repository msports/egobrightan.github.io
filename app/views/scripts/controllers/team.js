'use strict';

angular.module('fotbollskalendernWebApp')
.controller('TeamCtrl', function ($scope, $location, DataService, FavouritesService) {
	var url = $location.search().url;
	$scope.url = url;
	$scope.games = {};
	$scope.isFavourite = false;
	var teamInformation = {};

	DataService.getDataFromUrl(url).then(function (data) {
		teamInformation = data;
		DataService.getDataFromUrl(teamInformation._links.fixtures.href).then(function (games) {
			$scope.games = games.fixtures;
			$scope.teamInformation = teamInformation;
			$scope.isFavourite = FavouritesService.isFavourite(teamInformation.name);
		});
	});

	$scope.addToFavourites = function (teamName, url) {
		$scope.isFavourite = !$scope.isFavourite;
		FavouritesService.toggleFavourite(teamName, url);
	};

	$scope.matchInfo = function (game) {
		$location.path('match').search('url', game._links.self.href);
	};
});
