
const btcalcular = document.getElementById('btcalcular');


function calcular() {
    const sCarros = document.getElementById('sCarros');
    const litros = document.getElementById('litros');
    const kRodar = document.getElementById('kRodar');
    const valor = document.getElementById('valor');
    const qtPorLitro = document.getElementById('qtPorLitro');
    const vGas = document.getElementById('vGas');
    const vAlc = document.getElementById('vAlc');
    const vMensagem = document.getElementById('mensagem');

    let vLitro = vGas.value;
    let vValor = Number(valor.value);
    litros.value = (vValor / vLitro).toFixed(2);

    let qtLitro = litros.value;
    

    let comparar = (vAlc.value / vGas.value).toFixed(2);

    console.log(comparar)

    if (valor.value === '' || vGas.value === '' || vAlc.value === '') {
        alert('Favor verificar os campos valor , vlrGás e vlrAlcool.');
        litros.value = '';
    } else {
        if (sCarros.value === 'Golf') {
            kRodar.value = (litros.value * 10.1).toFixed(2);
            qtPorLitro.value = 10.1;
        } else if (sCarros.value === 'BMW') {
            kRodar.value = (litros.value * 13).toFixed(2);
            qtPorLitro.value = 13;
        } else if (sCarros.value === 'Onix') {
            kRodar.value = (litros.value * 14.3).toFixed(2);
            qtPorLitro.value = 14.3;
        } else {
            kRodar.value = (litros.value * 8.3).toFixed(2);
            qtPorLitro.value = 8.3;
        }

        if(comparar <= 0.70){
            vMensagem.innerHTML = `O valor retornou ${comparar} então compensa o Álcool.`
        } else{
            vMensagem.innerHTML = `O valor retornou ${comparar} então não compensa o Álcool.`
        }
    }

}

