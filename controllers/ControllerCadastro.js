const axios = require('axios');

const cadastroController = {
    async criarCadastro(req, res) {
        try {

            const { nome, cpf, telefone } = req.body;

            if (!nome || !cpf || !telefone) {
                return res.status(400).json({ error: "Todos os campos são obrigatórios." });
            }


            const payload = {
                nome: nome,
                cpf: cpf,
                telefone: telefone
            };

            const response = await axios.post('http://localhost:3000/api/cadastro', payload);

            res.status(201).json(response.data);

        } catch (error) {
            if (error.response) {

                return res.status(error.response.status).json({ error: error.response.data });
            } else if (error.request) {

                return res.status(500).json({ error: "Nenhuma resposta do servidor." });
            } else {

                return res.status(500).json({ error: "Erro ao fazer a requisição." });
            }
        }
    }
};

module.exports = cadastroController;
