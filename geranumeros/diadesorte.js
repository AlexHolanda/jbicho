var span1 = document.getElementById('um')
var span2 = document.getElementById('dois')
var span3 = document.getElementById('tres')
var span4 = document.getElementById('quatro')
var span5 = document.getElementById('cinco')
var span6 = document.getElementById('seis')
var span7 = document.getElementById('sete')
var spanMes = document.getElementById('mes')
var jogo1 = [];

function sorteio(a, b) {
    return Math.floor(Math.random() * (a - b) + b);
}

function gerar() {

    while (jogo1.length <= 6) {

        var resultado = sorteio(1, 32);
        if (!jogo1.includes(resultado)) {
            if (jogo1.length <= 6) {
                jogo1.push(resultado);
            }
        }
        span1.innerHTML = jogo1[0];
        span2.innerHTML = jogo1[1];
        span3.innerHTML = jogo1[2];
        span4.innerHTML = jogo1[3];
        span5.innerHTML = jogo1[4];
        span6.innerHTML = jogo1[5];
        span7.innerHTML = jogo1[6];
    }
    var mes = sorteio(1, 13);
    if(mes == 1){
        spanMes.innerHTML = 'Janeiro'
    }else if(mes == 2){
        spanMes.innerHTML = 'Fevereiro'
    }else if(mes == 3){
        spanMes.innerHTML = 'Março'
    }else if(mes == 4){
        spanMes.innerHTML = 'Abril'
    }else if(mes == 5){
        spanMes.innerHTML = 'Maio'
    }else if(mes == 6){
        spanMes.innerHTML = 'Junho'
    }else if(mes == 7){
        spanMes.innerHTML = 'Julho'
    }else if(mes == 8){
        spanMes.innerHTML = 'Agosto'
    }else if(mes == 9){
        spanMes.innerHTML = 'Setembro'
    }else if(mes == 10){
        spanMes.innerHTML = 'Outubro'
    }else if(mes == 11){
        spanMes.innerHTML = 'Novembro'
    }else if(mes == 12){
        spanMes.innerHTML = 'Dezembro'
    }
    console.log(mes)
}

function limparNumeros() {
    resultado = ""
    jogo1.length = 0

    span1.innerHTML = ".."
    span2.innerHTML = ".."
    span3.innerHTML = ".."
    span4.innerHTML = ".."
    span5.innerHTML = ".."
    span6.innerHTML = ".."
    span7.innerHTML = ".."
    spanMes.innerHTML = ""
}