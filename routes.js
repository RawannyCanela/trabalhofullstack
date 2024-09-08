const express = require('express');
const ControllerCadastro = require('./controllers/ControllerCadastro');
const router = express.Router();

router.post('/Cadastro', ControllerCadastro.createCadastro);
router.post('/Cadastro/cpf/:cpf', ControllerCadastro.createCPF);
router.post('/Cadastro/telefone/:telefone', ControllerCadastro.createTelefone);
router.get('/Cadastro', ControllerCadastro.getAllCadastro);
router.get('/Cadastro', ControllerCadastro.getCadastroById);
router.put('/Cadastro', ControllerCadastro.updateCadastro);
router.delete('/Cadastro', ControllerCadastro.deleteCadastro);

module.exports = router;