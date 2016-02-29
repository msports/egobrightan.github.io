'use strict';

angular.module('fotbollskalendernWebApp')
.factory('FilterService', function (localStorageService) {
	return {
		setLeagueFilters: function (filters) {
			localStorageService.set('savedFilter', filters);
		},
		getLeagueFilters: function () {
			return localStorageService.get('savedFilter');
		},
		addLeague: function (league) {
			var newFilter = localStorageService.get('savedFilter');
			newFilter.push(league);
			this.setLeagueFilters(newFilter);
		},
		removeLeague: function (league) {
			var newFilter = localStorageService.get('savedFilter');
			newFilter.splice(newFilter.indexOf(league), 1);
			this.setLeagueFilters(newFilter);
		}
	};
});
