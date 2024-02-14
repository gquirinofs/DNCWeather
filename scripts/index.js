async function getAddressByCep() { // Consulta o CEP e apresenta o resultado
    const cep = document.querySelector('#cepValue').value;
    try {
        const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        const rua = data.logradouro;
        const bairro = data.bairro;
        const localidade = `${data.localidade}/${data.uf}`;
        document.querySelector('#rua').innerHTML = rua;
        document.querySelector('#bairro').innerHTML = bairro;
        document.querySelector('#uf').innerHTML = localidade;
    } catch (error) {
        alert("O CEP não deve conter: \n\n 1. Caracteres especiais; \n 2. Espaço entre os números; \n\n Tente novamente! ");
    }
}

// Previnir a atualização da página

document.querySelector('#subButton').addEventListener("click", function(e){
    e.preventDefault()
});