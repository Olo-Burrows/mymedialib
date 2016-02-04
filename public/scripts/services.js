"use strict";

mymedialibApp.service("MovieService", function($http) {
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

mymedialibApp.service("DirectorService", function($http) {
    var API_URI = '/server/api/directors';

    return {
        fetch: function() {
            return $http.get(API_URI);
        },

        fetchOne: function(id) {
            return $http.get(API_URI + '/' + id);
        },

        create: function(director) {
            return $http.post(API_URI, director);
        },

        update: function(director) {
            return $http.put(API_URI + '/' + director.id, director);
        },

        remove: function(id) {
            return $http.delete(API_URI + '/' + id);
        }
    };
});

mymedialibApp.service("SagaService", function($http) {
    var API_URI = '/server/api/sagas';

    return {
        fetch: function() {
            return $http.get(API_URI);
        },

        fetchOne: function(id) {
            return $http.get(API_URI + '/' + id);
        },

        create: function(saga) {
            return $http.post(API_URI, saga);
        },

        update: function(saga) {
            return $http.put(API_URI + '/' + saga.id, saga);
        },

        remove: function(id) {
            return $http.delete(API_URI + '/' + id);
        }
    };
});

mymedialibApp.service("SerieService", function($http) {
    var API_URI = '/server/api/series';

    return {
        fetch: function() {
            return $http.get(API_URI);
        },

        fetchOne: function(id) {
            return $http.get(API_URI + '/' + id);
        },

        create: function(serie) {
            return $http.post(API_URI, serie);
        },

        update: function(serie) {
            return $http.put(API_URI + '/' + serie.id, serie);
        },

        remove: function(id) {
            return $http.delete(API_URI + '/' + id);
        }
    };
});