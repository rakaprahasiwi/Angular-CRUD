angular.module("CrudDemoApp.controllers", []).
controller("MainController", function ($scope, PlayerService) {
    $scope.message = "Controller";

    PlayerService.GetPlayersFromDB().then(function (d) {
        $scope.listPlayers = d.data.list;
    })

    $scope.DeletePlayer = function (id, index) {
        $scope.listPlayers.splice(index,1);
        PlayerService.DeletePlayer(id);
    }
}).
controller("AddPlayerController", function ($scope, PlayerService) {
    $scope.message = "Add Player";

    $scope.AddPlayer = function ()
    {
        PlayerService.AddPlayer($scope.player);
    }
}).
controller("EditPlayerController", function ($scope, PlayerService, $routeParams) {
    $scope.message = "Edit Player";

    var id = $routeParams.id;

    PlayerService.GetPlayersByID(id).then(function (d) {
        $scope.player = d.data.player;
    })

    $scope.UpdatePlayer = function ()
    {
        PlayerService.UpdatePlayer($scope.player);
    }
}).
factory("PlayerService", ["$http", function ($http) {
    var fac = {};

    fac.GetPlayersFromDB = function () {
        return $http.get("/Player/GetPlayers");
    }

    fac.GetPlayersByID = function (id) {
        return $http.get("/Player/GetPlayerById", { params: {id:id} });
    }

    fac.AddPlayer = function (player) {
        $http.post("/Player/AddPlayer", player).success(function(response){
            alert(response.status);
            window.location.href = "CrudDemoApp.html#/";
        })
    }

    fac.UpdatePlayer = function (player) {
        $http.post("/Player/UpdatePlayer", player).success(function (response) {
            alert(response.status);
            window.location.href = "CrudDemoApp.html#/";
        })
    }

    fac.DeletePlayer = function (id) {
        $http.post("/Player/DeletePlayer", { id: id }).success(function (response) {
            alert(response.status);
        })
    }

    return fac;
}])