/// <reference path="C:\Users\dimitris\documents\visual studio 2015\Projects\MovieFinder\MovieFinder\App.js" />


app.controller('MainController', function ($scope, $interval, $http, RandomMovie) {
    $scope.dataLoaded = true;
    // Find a Random Movie
    $scope.FindRand = function () {
        $scope.dataLoaded = false;
        RandomMovie.GetRandomMovie()
        .then(function (movie) {
            if (movie.Response === "False" || movie.Poster === "N/A" || movie.Type !== "movie" || movie.imdbRating === "N/A" || movie.Plot === "N/A") {
                $scope.retry();
            } else {
                $scope.dataLoaded = true;
                $scope.movie = movie;
            }
        });
    };
    //Keep trying to find a viable movie
    $scope.retry = function () {
        $scope.FindRand();
    };
    // Show trivia while waiting 
    $interval(function () {
        if ($scope.dataLoaded === false) {
            $http.get("/json/trivia.json").success(function (data) {
                var keys = Object.keys(data);
                var i = Math.floor(Math.random() * 9);
                $scope.trivia = data[i].title;
            })
        }
    }, 5000);


});