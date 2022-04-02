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