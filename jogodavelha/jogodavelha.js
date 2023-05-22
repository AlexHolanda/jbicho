var jogador = "x"

function jogar(celula) {
    if (celula.innerHTML == "") {
        celula.innerHTML = jogador

        if (jogador == "x") {
            jogador = "o"
        } else {
            jogador = "x"
        }
/// Verifica se o jogador venceu e pinta o quadrado
        if ((q1.innerHTML == "x" && q2.innerHTML == "x" && q3.innerHTML == "x") || (q1.innerHTML == "o" && q2.innerHTML == "o" && q3.innerHTML == "o")) {
            document.getElementById("q1").style.backgroundColor = '#00FF00'
            document.getElementById("q2").style.backgroundColor = '#00FF00'
            document.getElementById("q3").style.backgroundColor = '#00FF00'
        } else if ((q4.innerHTML == "x" && q5.innerHTML == "x" && q6.innerHTML == "x") || (q4.innerHTML == "o" && q5.innerHTML == "o" && q6.innerHTML == "o")) {
            document.getElementById("q4").style.backgroundColor = '#00FF00'
            document.getElementById("q5").style.backgroundColor = '#00FF00'
            document.getElementById("q6").style.backgroundColor = '#00FF00'

        } else if ((q7.innerHTML == "x" && q8.innerHTML == "x" && q9.innerHTML == "x") || (q7.innerHTML == "o" && q8.innerHTML == "o" && q9.innerHTML == "o")) {
            document.getElementById("q7").style.backgroundColor = '#00FF00'
            document.getElementById("q8").style.backgroundColor = '#00FF00'
            document.getElementById("q9").style.backgroundColor = '#00FF00'

        } else if ((q1.innerHTML == "x" && q4.innerHTML == "x" && q7.innerHTML == "x") || (q1.innerHTML == "o" && q4.innerHTML == "o" && q7.innerHTML == "o")) {
            document.getElementById("q1").style.backgroundColor = '#00FF00'
            document.getElementById("q4").style.backgroundColor = '#00FF00'
            document.getElementById("q7").style.backgroundColor = '#00FF00'

        } else if ((q2.innerHTML == "x" && q5.innerHTML == "x" && q8.innerHTML == "x") || (q2.innerHTML == "o" && q5.innerHTML == "o" && q8.innerHTML == "o")) {
            document.getElementById("q2").style.backgroundColor = '#00FF00'
            document.getElementById("q5").style.backgroundColor = '#00FF00'
            document.getElementById("q8").style.backgroundColor = '#00FF00'

        } else if ((q3.innerHTML == "x" && q6.innerHTML == "x" && q9.innerHTML == "x") || (q3.innerHTML == "o" && q6.innerHTML == "o" && q9.innerHTML == "o")) {
            document.getElementById("q3").style.backgroundColor = '#00FF00'
            document.getElementById("q6").style.backgroundColor = '#00FF00'
            document.getElementById("q9").style.backgroundColor = '#00FF00'

        }

    }
}

function resetar(celula) {
    window.location.reload()
}

