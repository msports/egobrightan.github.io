'use strict';

/**
 * @ngdoc function
 * @name fotbollskalendernWebApp.controller:MatchctrlCtrl
 * @description
 * # MatchctrlCtrl
 * Controller of the fotbollskalendernWebApp
 */
angular.module('fotbollskalendernWebApp')
  .controller('MatchCtrl', function ($scope, $location, DataService) {
      $scope.match = {};
      var url = $location.search().url;
      DataService.getDataFromUrl(url).then(function(data){
         $scope.match = data;
      });

      $scope.teamInfo = function (game, isHomeTeam) {
          if(isHomeTeam){
              $location.path('team').search('url', game._links.homeTeam.href);
          }
          else{
              $location.path('team').search('url', game._links.awayTeam.href);
          }
      };

  });
