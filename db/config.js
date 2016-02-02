// DB 
const low = require('lowdb');
const storage = require('lowdb/file-async');

const db = low('_data/db.json', { storage: storage });
db._.mixin(require('underscore-db'));

(function (db) {
    console.log(':: DB CONFIG :: movies');
//    console.log(db);
    
    var movies = db('movies');
    console.log(':: DB CONFIG :: movies size');
    console.log(movies.size());
    
    if (movies.size() == 0) {
        console.log(':: DB CONFIG :: init movies');
        
        db('movies').insert({
            "title" : "Seigneur des Anneaux : La Communauté de l'Anneau",
            "releaseYear" : "2001",
            "poster" : "img/posters/seigneurdesanneaux1.jpg",
//            "directors" : "Peter Jackson",
            "actors" : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
            "synopsis" : "Frodon le Hobbit hérite de l'Anneau Unique, un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu. Commence alors un vaste périple visant à la destruction de l'objet."
//            "saga" : "Le Seigneur des Anneaux"
        });
        db('movies').insert({
            "title" : "Seigneur des Anneaux : Les Deux Tours",
            "releaseYear" : "2002",
            "poster" : "img/posters/seigneurdesanneaux2.jpg",
//            "directors" : "Peter Jackson",
            "actors" : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
            "synopsis" : "Frodon Sacquet, le Hobbit, doit braver de terribles dangers pour tenter de détruire l'Anneau Unique, convoité par Sauron, le Seigneur des ténèbres. De leur côté, Gimli, Legolas et Aragorn doivent sauver Pippin et Merry, capturés par les Orques..."
//            "saga" : "Le Seigneur des Anneaux"
        });
        db('movies').insert({
            "title" : "Seigneur des Anneaux : Le Retour du Roi",
            "releaseYear" : "2003",
            "poster" : "img/posters/seigneurdesanneaux3.jpg",
//            "directors" : "Peter Jackson",
            "actors" : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
            "synopsis" : "Tandis que les ténèbres se répandent sur la Terre du Milieu, Aragorn se révèle être l'héritier caché des rois antiques. Quant à Frodon, toujours tenté par l'Anneau, il voyage à travers les contrées ennemies, se reposant sur Sam et Gollum..."
//            "saga" : "Le Seigneur des Anneaux"
        });
        db('movies').insert({
            "title" : "Batman Begins",
            "releaseYear" : "2005",
            "poster" : "img/posters/batman1.jpg",
//            "directors" : "Christopher Nolan",
            "actors" : "Christian Bale, Katie Holmes, Michael Caine",
            "synopsis" : "Comment un homme seul peut-il changer le monde ? Telle est la question qui hante Bruce Wayne depuis cette nuit tragique où ses parents furent abattus sous ses yeux, dans une ruelle de Gotham City. Torturé par un profond sentiment de colère et de culpabilité, le jeune héritier de cette richissime famille fuit Gotham pour un long et discret voyage à travers le monde. Le but de ses pérégrinations : sublimer sa soif de vengeance en trouvant de nouveaux moyens de lutter contre l'injustice."
//            "saga" : "Batman"
        });
        db('movies').insert({
            "title" : "The Dark Knight",
            "releaseYear" : "2008",
            "poster" : "img/posters/batman2.jpg",
//            "directors" : "Christopher Nolan",
            "actors" : "Christian Bale, Heath Ledger, Aaron Eckhart",
            "synopsis" : "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker."
//            "saga" : "Batman"
        });
    }
})(db);


(function (db) {
    console.log(':: DB CONFIG :: sagas');
//    console.log(db);
    
    var sagas = db('sagas');
    console.log(':: DB CONFIG :: sagas size');
    console.log(sagas.size());
    
    if (sagas.size() == 0) {
        console.log(':: DB CONFIG :: init sagas');
        
        db('sagas').insert({
            "title" : "Seigneur des Anneaux"
        });
        db('sagas').insert({
            "title" : "Batman"
        });
        db('sagas').insert({
            "title" : "Retour vers le Futur"
        });
        db('sagas').insert({
            "title" : "Matrix"
        });
    }
})(db);

(function (db) {
    console.log(':: DB CONFIG :: directors');
//    console.log(db);
    
    var directors = db('directors');
    console.log(':: DB CONFIG :: directors size');
    console.log(directors.size());
    
    if (directors.size() == 0) {
        console.log(':: DB CONFIG :: init directors');
        
        db('directors').insert({ "name" : "Peter Jackson" });
        db('directors').insert({ "name" : "Christopher Nolan" });
    }
})(db);

module.exports = db;