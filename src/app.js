const express = require('express');
const app = express();


app.use(express.json());


// Lista de pessoas
let pessoa = [
    {
        id: 1,
        nome: "joão",
        cpf: "123456789",
        dataNascimento: "02/02/2002"
    }
];


// Lista de passaportes
let passaport = [
    {
        id_passaport: 1,
        numero: "852741",
        dataEmissao: "20/02/2026",
        dataValidade: "30/12/2040",
        id_Pessoa: 1
    }
];


// Rota inicial
app.get('/', (req, res) => {
    res.send('Cadastro!');
});


// Consultar pessoas
app.get('/pessoa', (req, res) => {
    res.json(pessoa);
});


// Consultar passaportes
app.get('/passaport', (req, res) => {
    res.json(passaport);
});


// Cadastrar pessoa
app.post('/pessoa', (req, res) => {


    let pessoaNova = req.body;


    pessoaNova.id = pessoa.length + 1;


    pessoa.push(pessoaNova);


    res.json(pessoaNova);
});


module.exports = app;