const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
const cadastroData = [];

app.use(express.static('frontend'));

const validarCPF = (cpf) => {
    return /^\d{11}$/.test(cpf);
};

app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de cadastro!');
});

app.post('/cadastro', (req, res) => {
    const { nome, cpf, telefone } = req.body;

    if (!nome || !cpf || !telefone) {
        return res.status(400).json({ message: 'Nome, CPF e Telefone são obrigatórios' });
    }

    if (!validarCPF(cpf)) {
        return res.status(400).json({ message: 'CPF inválido' });
    }

    const cpfExistente = cadastroData.find(c => c.cpf === cpf);
    if (cpfExistente) {
        return res.status(409).json({ message: 'CPF já cadastrado' });
    }

    const novoCadastro = { nome, cpf, telefone };
    cadastroData.push(novoCadastro);

    res.status(201).json({ message: 'Cadastro realizado com sucesso', data: novoCadastro });
});

app.get('/cadastro/:cpf', (req, res) => {
    const { cpf } = req.params;

    const cadastro = cadastroData.find(c => c.cpf === cpf);

    if (cadastro) {
        res.json(cadastro);
    } else {
        res.status(404).send('Cadastro não encontrado');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
