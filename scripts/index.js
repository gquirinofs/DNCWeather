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

async function getTemperature() { // Consulta a temperatura e apresenta o resultado
    const latitude = document.querySelector('#lat').value;
    const longitude = document.querySelector('#long').value;
    try {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
        const data = await response.json();
        console.log(data);
        const temperature = data.current.temperature_2m;
        document.querySelector('#meteoDisplay').innerHTML = `Previsão de tempo de acordo com a região: ${temperature}ºC`;
    } catch (error) {
        alert("Utilize o Google maps para obter a latitude e longitude.");
    }
}

function getInfo(){
    getAddressByCep();
    getTemperature();
}

// Previnir a atualização da página

document.querySelector('#subButton').addEventListener("click", function(e){
    e.preventDefault()
});