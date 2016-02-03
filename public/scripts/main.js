"use strict";

//var mymedialibApp = angular.module('mymedialibApp', ['$strap.directives']);
var mymedialibApp = angular.module('mymedialibApp', [ 'ngRoute', 'ui.bootstrap' ]);

mymedialibApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .when('/movies', {
            templateUrl: 'partials/movies.html',
            controller: 'moviesController'
        })
        .when('/series', {
            templateUrl: 'partials/series.html',
            controller: 'seriesController'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editMovieController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});