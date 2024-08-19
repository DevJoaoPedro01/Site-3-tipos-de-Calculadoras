function calculadoraBasica() {
    let resultado = 0;
    let valorCampo1 = parseFloat(document.querySelector('#campo1').value);
    let valorCampo2 = parseFloat(document.querySelector('#campo2').value);
    let opcaoSelecionada = document.querySelector('input[name="opcao"]:checked').value;

    if (opcaoSelecionada) {
        if (opcaoSelecionada == "Soma") {
            resultado = valorCampo1 + valorCampo2;
        } else if (opcaoSelecionada == "Subtração") {
            resultado = valorCampo1 - valorCampo2;
        } else if (opcaoSelecionada == "Multiplicação") {
            resultado = valorCampo1 * valorCampo2;
        } else if (opcaoSelecionada == "Divisão") {
            resultado = valorCampo1 / valorCampo2;
        }
        document.querySelector('#resultado').innerText = "Resultado: " + resultado;
    } else {
        document.querySelector('#resultado').innerText = "Por favor, selecione uma opção.";
    }
} 
    // ---------------------------------------------------------------------------------------------------------------------------------------------------------
    function calculadoraIMC() {
        let resultado = 0;
        let valorCampo1 = parseFloat(document.querySelector('#peso').value);
        let valorCampo2 = parseFloat(document.querySelector('#altura').value);

        if (valorCampo1 && valorCampo2) {
            resultado = valorCampo1 / (valorCampo2 * valorCampo2);
    
            if (resultado < 18.5) {
                document.querySelector('#resultado').innerText = `Valor do IMC:   ${resultado.toFixed(2)} - Classificação: Baixo Peso`;
            } else if (resultado >= 18.5 && resultado < 24.9) {
                document.querySelector('#resultado').innerText = `Valor do IMC:  ${resultado.toFixed(2)} - Classificação: Peso Normal`;
            } else if (resultado >= 25 && resultado < 29.9) {
                document.querySelector('#resultado').innerText = `Valor do IMC:  ${resultado.toFixed(2)} - Classificação: Excesso de Peso`;
            } else if (resultado >= 30 && resultado < 34.9) {
                document.querySelector('#resultado').innerText = `Valor do IMC:  ${resultado.toFixed(2)} - Classificação: Obesidade classe 1`;
            } else if (resultado >= 35 && resultado < 39.9) {
                document.querySelector('#resultado').innerText = `Valor do IMC:  ${resultado.toFixed(2)} - Classificação: Obesidade classe 2`;
            } else if (resultado >= 40) {
                document.querySelector('#resultado').innerText = `Valor do IMC:  ${resultado.toFixed(2)} - Classificação: Obesidade mórbida`;
            }
        } else {
            document.querySelector('#resultado').innerText = "Por favor, preencha todos os campos.";
        }
    }
    
    // ----------------------------------------------------------------------------------------------------------------------------------------------------
    function calcularCombustivel() {
        let totalGasolina;
        let totalAlcool;
        const litrosGasolina = parseFloat(document.getElementById('litrosGasolina').value);
        const litrosAlcool = parseFloat(document.getElementById('litrosAlcool').value);
        const precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
        const precoAlcool = parseFloat(document.getElementById('precoAlcool').value);
    
        if (litrosGasolina && litrosAlcool && precoGasolina && precoAlcool) {
            totalGasolina = precoGasolina * litrosGasolina;
            totalAlcool = precoAlcool * litrosAlcool;
           
          
            if (totalGasolina < totalAlcool) {
                document.getElementById('resultadoCombustivel').textContent = `O consumo de gasolina é mais econômico. Com gasto total de R$ ${(totalGasolina.toFixed(2))}`;
            } 
            else if (totalAlcool < totalGasolina) {
                document.getElementById('resultadoCombustivel').textContent = `O consumo de álcool é mais econômico. Com gasto total de R$ ${(totalAlcool.toFixed(2))}`;
            } 
            else{
                document.getElementById('resultadoCombustivel').textContent = `Os consumos de gasolina e álcool são iguais. Com gasto total de R$ ${(totalGasolina.toFixed(2))} para gasolina e R$ ${(totalAlcool.toFixed(2))} para álcool.`;
            }
         }
}