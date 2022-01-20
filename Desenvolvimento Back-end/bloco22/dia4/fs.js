const fs = require('fs').promises;

const getSimpsons = () => {
    fs.readFile('./simpson.json', 'utf-8')
    .then((file)=>  JSON.parse(file));
}

const writeSimpson = (newContentSimpson) => {
    fs.writeFile('./simpson.json', JSON.stringify(newContentSimpson));
}

module.exports = {
    getSimpsons,
    writeSimpson
};