(function() {
    'use strict';

    angular
        .module('app')
        .factory('travelFactory', travelFactory);

    travelFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function travelFactory($http, $q) {
        var service = {
            getCityInfo: getCityInfo,
            getWeather: getWeather
        };

        return service;

        function getCityInfo (search) {
          return $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + search +
          '&radius=50000&rankby=prominence&types=amusement_park|park&key=AIzaSyDVA3rYErSZKKg1fDsSesKfo5iKEQGg2b8')
            .then(function(response){
              return response.data;
            });
        }

        function getWeather (search) {
          return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + search + '&units=imperial&appid=2060249525974b403bdcf764400eead2')
            .then(function(response){
            return response.data;
            })
        }
      }
})();
