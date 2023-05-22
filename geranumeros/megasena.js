var span = document.getElementsByClassName('numeros')
var sorteados = [];
var resposta = document.getElementById('resposta')

function sorteio(a, b) {
    return Math.floor(Math.random() * (a - b) + b);
}

function gerar() {

    while (sorteados.length <= 5) {
        var resultado = sorteio(1, 61);

        if (!sorteados.includes(resultado)) {
            if (sorteados.length <= 5) {
                sorteados.push(resultado);
            }
        }

        for (let i = 0; i < span.length; i++) {
            for (var j = 0; j < span.length; j++) {
                if (span[i].innerHTML == sorteados[j]) {
                    span[i].style.backgroundColor = "#eb160e"
                }
            }
        }

    }
    sorteados.sort((a,b) => {
        if (a < b) return -1
    
    });
    console.log(sorteados)
    resposta.innerHTML = `Os números gerados são: ${sorteados}`
}



function limparNumeros() {
    sorteados.length = 0
    resultado = "";
    sorteio.length = 0
    resposta.innerHTML = ""


    for (var j = 0; j < span.length; j++) {
        
            span[j].style.backgroundColor = "#FFF"
        
    }
    
}
