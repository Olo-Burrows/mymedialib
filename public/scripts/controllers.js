"use strict";

mymedialibApp.controller("homeController", function ($scope) {

    $scope.user = 'Julien BOUYER';

});

mymedialibApp.controller("moviesController", function ($scope, MovieService) {

    // display mode by default
    $scope.tableView = false;
    // icon by mode by default
    $scope.tableViewIcon = 'icon-th-list icon-white';

    // function called when changing view mode
    $scope.toogleView = function () {
        $scope.tableView = !$scope.tableView;

        if ($scope.tableView === false) {
            $scope.tableViewIcon = 'icon-th-list icon-white';
        } else {
            $scope.tableViewIcon = 'icon-th icon-white';
        }
    };

    MovieService.fetch().success(function (movies) {
        $scope.movies = movies;
    });


    $scope.deleteMovie = function (index) {
        MovieService.remove($scope.movies[index]._id)
            .success(function (resp) {
                $scope.movies.splice(index, 1);
            });
    };

});

mymedialibApp.controller('editMovieController', function ($scope, MovieService, $routeParams, $location) {

    var movieId = $routeParams.id;

    MovieService.fetchOne(movieId).success(function (movie) {
        $scope.movie = movie;
    });

    $scope.updateMovie = function (movie) {
        MovieService.update(movie)
            .success(function () {
                $location.path('/movies');
            })
            .error(function (resp, statusCode) {
                // Affichage d'un message d'erreur
                $scope.errorTitle = 'Erreur ' + statusCode;
                $scope.errorMessage = resp.error;
                $scope.showAlert = true;
                console.log(resp);
            });
    };
});

mymedialibApp.controller("movieFormController", function ($scope, MovieService) {

    $scope.showAlert = false;

    $scope.addMovie = function (movie) {
        MovieService.create(movie)
            .success(function () {
                var newMovie = {};
                angular.copy(movie, newMovie);
                $scope.movies.push(newMovie);
                $scope.movie = {};
                $scope.showAlert = false;
                $scope.dismiss();
            })
            .error(function (resp, statusCode) {
                // Affichage d'un message d'erreur
                $scope.errorTitle = 'Erreur ' + statusCode;
                $scope.errorMessage = resp.error;
                $scope.showAlert = true;
            });
    };
});


mymedialibApp.controller("seriesController", function ($scope, SerieService) {

    // display mode by default
    $scope.tableView = false;
    // icon by mode by default
    $scope.tableViewIcon = 'icon-th-list icon-white';

    
});