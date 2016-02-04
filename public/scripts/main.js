"use strict";

//var mymedialibApp = angular.module('mymedialibApp', ['$strap.directives']);
var mymedialibApp = angular.module('mymedialibApp', [ 'ngRoute', 'ui.bootstrap' ]);

mymedialibApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .when('/movies', {
            templateUrl: 'templates/movies.html',
            controller: 'moviesController'
        })
        .when('/series', {
            templateUrl: 'templates/series.html',
            controller: 'seriesController'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'templates/edit.html',
            controller: 'editMovieController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});