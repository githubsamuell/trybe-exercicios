const fs = require('fs');

const rescue = require('express-rescue');

const simpsonsFunc = require('./fs')

const express = require('express');
const app = express();

const bodyparse = require('body-parser');


app.use(bodyparse.json());

app.use(function (err, req, res, next) {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
  });

app.get('/ping', (_req, res) => 
res.json({ "message": 'pong' })
);

app.get('/helo', (req, res) => {
const { name } = req.body;
res.status(200).json({ "message":`Hello, ${name}!`})
});

app.post('/greetings', (req, res) => {
const { name, age } = req.body;
if (age>17) {
    res.status(200).json({ message:`Hello, ${name}!`});
}
    res.status(401).json({ message: 'unathourized'});
});

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.status(200).json({ "message": `Hello, seu nome é ${name} e voce tem ${age} anos de idade`})
})
app.get('/simpson', rescue(async (req, res) => {
    const simpsons = await simpsonsFunc.getSimpsons();
    res.status(200).json(simpsons);
}))

app.get('/simpson/:id', rescue(async (req, res) => {
    const simpsons = await simpsonsFunc.getSimpsons();
    const { id } = req.params.id;
    const simpson = simpsons.find(({ s }) =>s.id === id );
    if (!simpson) {
        res.status(404).json({ message: 'Simpson nao existe'})
    }
    return res.status(202).json(simpson);
}))

app.listen(3006, () => console.log('Rodando na porta 3006 do host!'));