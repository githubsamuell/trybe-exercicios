use("class")
db.superheroes.find({}).limit(1);

use("class")
db.superheroes.find({"aspects.height": { $lt: 180}});