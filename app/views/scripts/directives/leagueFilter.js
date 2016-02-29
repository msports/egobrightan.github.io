'use strict';

angular.module('fotbollskalendernWebApp')
	.directive('leagueFilter', function (FilterService) {
		return {
			templateUrl: 'views/league-filter.html',
			restrict: 'E',
			link: function ($scope) {
				if (FilterService.getLeagueFilters() === null) {
					FilterService.setLeagueFilters([]);
				}
				$scope.filters = FilterService.getLeagueFilters();
				$scope.filterMatch = function (league) {
					if (FilterService.getLeagueFilters().indexOf(league) === -1) {
						FilterService.addLeague(league);
						$scope.filters.push(league);
					} else {
						FilterService.removeLeague(league);
						$scope.filters.splice($scope.filters.indexOf(league), 1);
					}
				};
			}
		};
	});
