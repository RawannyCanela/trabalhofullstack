exports.createCadastro = async (req, res) => {
    try {
        const {id, nome, cpf, telefone} = req.body;

        const novaPessoa = await Cadastro.create({
            id,
            nome,
            cpf,
            telefone,
        });

        res.status(201).json(novoCadastro);
    }catch(error) {
        console.error(error)
        res.status(500).json({error: 'Erro ao criar Cadastro', details: error.message});
    }
};