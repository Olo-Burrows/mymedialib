"use strict";

mymedialibApp.filter('stars', function () {

    var STARS = {
        1: '\u2605',
        2: '\u2605\u2605',
        3: '\u2605\u2605\u2605',
        4: '\u2605\u2605\u2605\u2605',
        5: '\u2605\u2605\u2605\u2605\u2605'
    };

    return function (startCount) {
        return STARS[startCount];
    };
});


mymedialibApp.filter('poster', function () {
    return function (posterUrl) {
        if (!posterUrl) {
            return "img/posters/no-poster.jpg";
        } else {
            return posterUrl;
        }
    };
});

mymedialibApp.filter('director', function (DirectorService) {
    return function (id) {
        var name = "",
            director;

        director = DirectorService.fetchOne(id).success(function (director) {
            name = director.name;
        });
        return name;
    };
});