(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['travelFactory'];

    /* @ngInject */
    function homeController(travelFactory) {
        var vm = this;

        vm.fetch = function() {
          console.log('fetch was called')
          travelFactory
            .getWeather(vm.search)
            .then(function weatherdata(weatherInfo) {
              console.log('Weather was called', weatherInfo)
              vm.weather = weatherInfo;
              var lat = weatherInfo.coord.lat;
              var lon = weatherInfo.coord.lon;

              travelFactory
                .getCityInfo(lat + ',' + lon)
                .then(function(cityInfo) {
                vm.parks = cityInfo.results;
                console.log(vm.parks)
                });
            });
        }
    }
})();
