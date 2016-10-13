/// <reference path="C:\Users\dimitris\documents\visual studio 2015\Projects\MovieFinder\MovieFinder\App.js" />


app.controller('MainController', function ($scope, RandomMovie) {
    $scope.dataLoaded = true;
    $scope.FindRand = function () {
        $scope.dataLoaded = false;
        RandomMovie.GetRandomMovie()
        .then(function (movie) {
            if (movie.Response === "False" || movie.Type !== "movie") {
                $scope.retry();
            } else {
                $scope.dataLoaded = true;
                $scope.movie = movie;
            }
        });
    };
    $scope.retry = function () {
        $scope.FindRand();
    };
});