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

use("class")
db.movies.updateOne({title: "Batman"}, {$inc: {imdbRating: 2}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Home Alone"}, {$inc: {budget: 5}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Batman"}, {$mul: {imdbRating: 4}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Batman"}, {$rename: {budget: "estimatedBudget"}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Home Alone"}, {$min: {budget: 5}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Godzilla"}, {$set: {imdbRating: {$max:8.6}, "category.1": "thriller"}})

use("class")
db.movies.find();

use("class")
db.movies.updateOne({title: "Home Alone"}, {$currentDate: {lastUpdated: {$type: "timestamp"}}})

use("class")
db.movies.find();

use("class")
db.movies.updateMany({}, {$set: {sequels: 0}})

use("class")
db.movies.find();

use("class")
db.movies.updateMany({}, {$unset: {budget: "", estimatedBudget: ""}})

use("class")
db.movies.find();

use("class")
db.movies.updateMany({$or: [{title:"Batman"},{title:"Home Alone"}]},{$max: {imdbRating: 17}})

use("class")
db.movies.find();