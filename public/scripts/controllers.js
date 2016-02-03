"use strict";

mymedialibApp.controller("homeController", function ($scope) {

    $scope.user = 'Julien BOUYER';

});

mymedialibApp.controller("moviesController", function ($scope, $uibModal, MovieService) {

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
        MovieService.remove($scope.movies[index].id)
            .success(function (resp) {
                $scope.movies.splice(index, 1);
            });
    };

    $scope.newMovie = function () {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'partials/movie-form-modal.html',
            controller: 'movieFormController'
        });

        modalInstance.result.then(function (movie) {
            var newMovie = {};
            angular.copy(movie, newMovie);
            $scope.movies.push(newMovie);
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

mymedialibApp.controller("movieFormController", function ($scope, $uibModalInstance, MovieService) {

    $scope.showAlert = false;
    
    $scope.addMovie = function (movie) {
        MovieService.create(movie)
            .success(function () {
                $scope.close = {};
                $scope.showAlert = false;
                $uibModalInstance.close(movie);
//            })
//            .error(function (resp, statusCode) {
//                // Affichage d'un message d'erreur
//                $scope.errorTitle = 'Erreur ' + statusCode;
//                $scope.errorMessage = resp.error;
//                $scope.showAlert = true;
            });
    };
    
    $scope.close = function () {
        $scope.movie = {};
        $scope.showAlert = false;
        $uibModalInstance.dismiss('cancel');
    }
});


mymedialibApp.controller("seriesController", function ($scope, SerieService) {

    // display mode by default
    $scope.tableView = false;
    // icon by mode by default
    $scope.tableViewIcon = 'icon-th-list icon-white';


});