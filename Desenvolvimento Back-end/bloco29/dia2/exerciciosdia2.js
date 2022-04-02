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