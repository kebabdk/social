(function () {
    angular.module('TimeWaste')
        .controller('CityListController', ['$scope', '$state', '$http',
            function ($scope, $state, $http) {

                console.log("CityListController er init");
                $scope.contry = 'denmark';
                $scope.weatherData = {};

                $scope.getCityList = function () {
                    $http.post('api/weather/citylist', {})
                        .success(function (response) {
                            console.log(JSON.stringify(response,undefined,2));
                            $scope.cityList = response.wdata;
                            console.log(JSON.stringify($scope.cityList,undefined,2));
                        })
                        .error(function (error) {
                            console.log(error);
                        })
                };
            }])
}());

