'use strict';

angular.module('fotbollskalendernWebApp')
.factory('FavouritesService', function (localStorageService) {
	var favourites = localStorageService.get('favourites');
	var index = -1;
	return {
		isFavourite: function (teamName) {
			for (var i = 0; i < favourites.length; i++) {
				if (favourites[i].name === teamName) {
					index = i;
					return true;
				}
			}
			return false;
		},
		toggleFavourite: function (teamName, url) {
			if (this.isFavourite(teamName)) {
				favourites.splice(index, 1);
			} else {
				favourites.push({name: teamName, url: url});
			}
			localStorageService.set('favourites', favourites);
		},
		favourites: favourites
	};
});
