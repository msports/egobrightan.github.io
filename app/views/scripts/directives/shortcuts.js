'use strict';

angular.module('fotbollskalendernWebApp')
.directive('shortcuts', function ($location, Leagues, localStorageService, FavouritesService) {
	return {
		restrict: 'A',
		link: function ($scope) {
			if (FavouritesService.favourites === null) {
				localStorageService.set('favourites', [{name: 'FC Barcelona', url: 'http://api.football-data.org/v1/teams/81'}]);
			}
			$scope.leagues = Leagues;
			$scope.favourites = FavouritesService.favourites;
			console.log($scope.favourites);

			$scope.viewMatch = function (url) {
				$location.path('team').search('url', url);
			};

			$scope.viewLeague = function (league) {
				var obj = Leagues.filter(function (obj) {
					return obj.name === league;
				})[0];
				$location.path('league').search('url', obj.url);
			};
		}
	};
});
