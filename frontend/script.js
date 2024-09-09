document.getElementById('formCadastro').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    try {
        const response = await fetch('/Cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, cpf, telefone }),
        });

        const responseData = await response.json();
        document.getElementById('message').innerText = responseData.message;
        document.getElementById('formCadastro').reset();

    } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
        document.getElementById('message').innerText = 'Erro ao enviar o formulário. Tente novamente mais tarde.';
    }
});
