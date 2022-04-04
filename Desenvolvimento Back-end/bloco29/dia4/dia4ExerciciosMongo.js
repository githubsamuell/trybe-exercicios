use("class")
db.movies.insertMany([{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}])

use("class")
db.movies.countDocuments();

use("class")
db.movies.updateOne({title: "Batman"}, {$set: {imdbRating: 7.7}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Godzilla"}, {$set: {budget: 1}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Home Alone"}, {$set: {budget: 15, imdbRating: 5.5}})

use("class")
db.movies.find();