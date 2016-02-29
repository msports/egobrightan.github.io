'use strict';

angular.module('fotbollskalendernWebApp')
    .factory('DataService', function ($http, $q) {
        var apiKey = '2ecca4360cd746d5a4808ba2b8e1fa96';
        return {
            getDataFromUrl: function(url){
                var gameResult = $q.defer();
                $http.get(url, { headers: { 'X-Auth-Token': apiKey }}).then(function(result){
                    gameResult.resolve(result.data);
                });

                return gameResult.promise;
            }
        };
    });
