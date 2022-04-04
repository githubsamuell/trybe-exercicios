use("class")
db.superheroes.find({}).limit(1);

use("class")
db.superheroes.find({"aspects.height": { $lt: 180}});

use("class")
db.superheroes.find({"aspects.height": { $lt: 180}}).count();

use("class")
db.superheroes.find({"aspects.height": { $lte: 180}}).count();

use("class")
db.superheroes.find({"aspects.height": { $gte: 200}}).limit(1);

use("class")
db.superheroes.find({"aspects.height": { $gte: 200}}).count();

use("class")
db.superheroes.find({"aspects.eyeColor": "green"});

use("class")
db.superheroes.find({"aspects.eyeColor": "blue"}).count();

use("class")
db.superheroes.find({"aspects.hairColor": { $in: ["No Hair", "Black"]}});

use("class")
db.superheroes.find({"aspects.hairColor": { $in: ["No Hair", "Black"]}}).count();

use("class")
db.superheroes.find({"aspects.hairColor": { $nin: ["No Hair", "Black"]}}).count();

use("class")
db.superheroes.find({"aspects.height": { $not: {$gt: 180}}});

use("class")
db.superheroes.find({$nor: [{race: "Human"}, {"aspects.height": {$gt: 180}}]});

use("class")
db.superheroes.find({$and:[{$or:[{"aspects.height":180}, {"aspects.height":200}]},{"publisher": "Marvel Comics"}]});

use("class")
db.superheroes.find({$and: [{"aspects.weight": {$gte: 80, $lte: 100}}, {$or: [{race: "Human"}, {race: "Mutant"}]}, {publisher: {$ne: "DC Comics"}}]});

use("class")
db.superheroes.countDocuments({race: {$exists: false}});

use("class")
db.superheroes.countDocuments({"aspects.hairColor": {$exists: true}})

use("class")
db.superheroes.deleteOne({publisher: "Sony Pictures"});

use("class")
db.superheroes.deleteMany({publisher: "George Lucas"});