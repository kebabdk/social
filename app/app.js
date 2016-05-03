/**
 * Created by kebab on 27-04-2016.
 */
(function () {
    angular.module('TimeWaste', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider,$urlRouterProvider) {
            console.log("$stateProvider er init");
            $stateProvider
                .state('signUp', {
                    url: "/signup",
                    templateUrl: "app/signup/signup.html",
                    controller: "SignupController"
                })
                .state('editProfile',{
                    url:"/edit-profile",
                    templateUrl: "app/profile/edit-profile-view.html",
                    controller: "EditProfileController"
                })
                .state('cityList', {
                    url: "/citylist",
                    templateUrl: "app/weather/city-list-view.html",
                    controller: "CityListController"
                });
        }]);
}());
