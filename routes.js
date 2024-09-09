const express = require('express');
const ControllerCadastro = require('./controllers/ControllerCadastro');
const router = express.Router();

router.post('/Cadastro', ControllerCadastro.createCadastro);
router.post('/Cadastro/cpf/:cpf', ControllerCadastro.createCPF);
router.post('/Cadastro/telefone/:telefone', ControllerCadastro.createTelefone);
router.get('/Cadastro', ControllerCadastro.getAllCadastro);
router.get('/Cadastro/:id', ControllerCadastro.getCadastroById);
router.put('/Cadastro/:id', ControllerCadastro.updateCadastro); 
router.delete('/Cadastro/:id', ControllerCadastro.deleteCadastro); 

module.exports = router;
