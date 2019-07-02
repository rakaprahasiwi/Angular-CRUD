var app = angular.module("CrudDemoApp", ["CrudDemoApp.controllers", "ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
    when("/",
    {
        templateUrl: "/Partials/PlayerList.html",
        controller: "MainController"
    }).
    when("/AddPlayer",
    {
        templateUrl: "/Partials/AddPlayer.html",
        controller: "AddPlayerController"
    }).
    when("/EditPlayer/:id",
    {
        templateUrl: "/Partials/EditPlayer.html",
        controller: "EditPlayerController"
    }).
    otherwise({ redirectTo: "/" });
}])