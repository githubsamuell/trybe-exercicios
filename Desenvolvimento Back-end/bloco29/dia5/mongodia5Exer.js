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
db.movies.updateOne({title: "Batman"}, {$pop: {category: 1}});

use("cinema");
db.movies.updateOne({title: "Batman"}, {$addToSet: {category: "action"}});


use("cinema");
db.movies.updateOne({title:"Batman", title: "Home Alone"}, {$push: {category: "90 s"}});


use("cinema");
db.movies.updateOne({title: "Home Alone"}, {$addToSet: {cast: {$each: [{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}]}}});

use("cinema");
db.movies.updateOne({title: "Batman"}, {$addToSet: {cast: {$each: [{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}]}}});



use("cinema");
db.movies.find().pretty();