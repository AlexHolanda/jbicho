
const calcular = document.getElementById('calcular');

function imc() {

    const txtnome = document.getElementById('txtnome').value;
    const txtaltura = document.getElementById('txtaltura').value;
    const txtpeso = document.getElementById('txtpeso').value;
    const resultado = document.getElementById('resultado');

    if (txtnome !== '' && txtaltura !== '' && txtpeso !== '') {

        const valorIMC = (txtpeso / (txtaltura * txtaltura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${txtnome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);
