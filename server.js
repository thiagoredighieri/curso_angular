var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var contatos = [
	{id: 1, nome: "Bruno", telefone: "9999-2222", cpf: "78945612333", data: new Date(), estado: {codigo: 1, nome : "Acre"}},
	{id: 2, nome: "Sandra", telefone: "9999-3333", cpf: "78945612333", data: new Date(), estado: {codigo: 2, nome : "Alagoas"}},
	{id: 3, nome: "Mariana", telefone: "9999-9999", cpf: "78945612333", data: new Date(), estado: {codigo: 3, nome : "Amapa"}}
];
var estados = [
	{codigo: 1, nome: "Acre"},
	{codigo: 2, nome: "Alagoas"},
	{codigo: 3, nome: "Amapa"},
	{codigo: 4, nome: "Amazonas"},
	{codigo: 5, nome: "Bahia"}
	
];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.id == req.params.id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/estados', function(req, res) {
  res.json(estados);
});

app.listen(process.env.PORT || 3412);