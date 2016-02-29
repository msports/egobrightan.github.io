'use strict';

angular.module('fotbollskalendernWebApp')
    .directive('gamesList', function () {
        return {
            templateUrl: 'scripts/directives/games-list.html',
            restrict: 'E',
            scope: {
                games: '=',
                action: '=',
                includeDate: '=',
                day: '=',
                allDays: '='
            }
        };

    });
