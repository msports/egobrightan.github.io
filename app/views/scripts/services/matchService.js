'use strict';

angular.module('fotbollskalendernWebApp').factory('MatchService', function ($http, $q, Leagues) {

	var apiKey = '2ecca4360cd746d5a4808ba2b8e1fa96';
    var requests = [];
    Leagues.forEach(function (league) {
        requests.push($http.get(league.url + 'fixtures', {
					headers: { 'X-Auth-Token': apiKey },
				}));
    });
    var all = $q.all(requests);

    return {
        getGamesByDate: function (date) {
            var games = [];
            var gameResult = $q.defer();
            all.then(function (results) {
                results.forEach(function (result, index) {
                    var allGames = result.data.fixtures;
                    var iterator = index;
                    allGames.forEach(function (game) {
                        if (game.date.indexOf(date) === 0) {
							games.push({
								game: game,
								league: Leagues[iterator].name
							});
						}
                    });
                });
                gameResult.resolve(games);
            });

            return gameResult.promise;
        },
        getGameByUrl: function (url) {
            var gameResult = $q.defer();
			$http.get(url, { headers: { 'X-Auth-Token': apiKey }}).then(function(result){
				gameResult.resolve(result.data);
			});

            return gameResult.promise;
        }
    };
});
