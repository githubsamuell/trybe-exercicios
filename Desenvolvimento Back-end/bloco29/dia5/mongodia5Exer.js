use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);

use("cinema");
db.movies.updateOne({title: "Batman"}, {$push: {category: "superhero"}});


use("cinema");
db.movies.updateOne({title: "Batman"}, {$push: {category: {$each: ["vilain", "comic-based"]}}});


use("cinema");
db.movies.updateOne({title: "Batman"}, {$pop: {category: -1}});


use("cinema");
db.movies.updateOne({title: "Batman"}, {$pull: {category: "adventure"}});


use("cinema");
db.movies.find();