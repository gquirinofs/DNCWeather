async function getAddressByCep() {
    const cep = document.querySelector('#cepValue').value;
    try {
        const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        const rua = document.querySelector('#rua').value;
        rua = data.logradouro;
        
    } catch (error) {
        alert(error.message);
    }
}