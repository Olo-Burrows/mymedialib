"use strict";

mymedialibApp.service("Movie", function($http) {
    var API_URI = '/server/api/movies';

    return {

        fetch: function() {
            return $http.get(API_URI);
        },

        fetchOne: function(id) {
            return $http.get(API_URI + '/' + id);
        },

        create: function(movie) {
            return $http.post(API_URI, movie);
        },

        update: function(movie) {
            return $http.put(API_URI + '/' + movie.id, movie);
        },

        remove: function(id) {
            return $http.delete(API_URI + '/' + id);
        }

    };

});