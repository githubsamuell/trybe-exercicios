const express = require('express');
const app = express();
const port = 3000;
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const User = require('./model/User');

app.get('/user', rescue(async (req, res) => {
    const { firstName, lastName, password, email} = req.body;

    if(!(firstName && lastName && password && email)) {
        return res.status(400).json({erro: true, message: 'nao pode haver campos vazios'})
    }

    if(password.length < 6) {
        return res.status(400).json({
            "error": true,
            "message": "O campo 'password' deve ter pelo menos 6 caracteres"
        })
    }
    const newUser = { firstName, lastName, password, email};
    return res.status(200).json({...req.body});
}))

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({message: "erro ao processar requis"})
})

app.listen(port, () => console.log(`Online na porta ${port}`));