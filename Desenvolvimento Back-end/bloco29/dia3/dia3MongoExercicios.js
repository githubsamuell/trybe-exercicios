use("cinema");
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure"
    ],
    imdbRating: 7.7,
    budget: 35,
    ratings: [
      85,
      100,
      102,
      105
    ],
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi"
    ],
    imdbRating: 6.6,
    budget: 10,
    ratings: [
      78,
      52,
      95,
      102
    ],
    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy"
    ],
    imdbRating: 7.4,
    ratings: [
      200,
      99,
      65
    ],
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  }
]);

use("cinema")
db.movies.find({}).pretty()

use("cinema")
db.movies.find({category: {$all: ["action", "adventure"]}}).pretty();

use("cinema")
db.movies.find({category: {$all: ["action"]}, imdbRating: {$gt: 7}}).pretty();

use("cinema")
db.movies.find({ratings: {$elemMatch: {$gt: 103}}}, {_id: 0, title: 1, ratings: 1}).pretty();

use("cinema")
db.movies.find({ratings: {$elemMatch: {$gte: 100, $lte: 105}}}, {_id: 0, title: 1, ratings: 1}).pretty();

use("cinema")
db.movies.find({ratings: {$elemMatch: {$gte: 64, $lte: 105, $mod: [9,0]}}}, {_id: 0, title: 1, ratings: 1}).pretty();

use("cinema")
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gt: 103 }
    },
    category: { $all: ["adventure"] }
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
    category: 1
  }
).pretty();


use("cinema")
db.movies.find(
  {
    category: {
      $size: 2
    }
  },
  {
    _id: 0,
    title: 1
      
  }
).pretty()

