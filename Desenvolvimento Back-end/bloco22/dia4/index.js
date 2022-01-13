const express = require('express')

const bodyparse = require('body-parser')

const app = express();

app.use(bodyparse.json())

app.use(function (err, req, res, next) {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
  });

app.get('/ping', (_req, res) => {
res.json({ message: 'pong' })
});

app.post('/helo', (req, res) => {
const { name } = req.body;
res.send({ message:`Hello, ${name}!`})
});

app.post('/greetings', (req, res) => {
const { name, age } = req.body;
if (age>17) {
    res.status(200).json({ message:`Hello, ${name}!`});
}
    res.status(401).json({ message: 'unathourized'});
});

app.listen(3005, () => console.log('Rodando na porta 3005 do host!'));