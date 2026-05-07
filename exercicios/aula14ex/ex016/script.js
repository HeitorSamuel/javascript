function contar(){
    var txtinic = document.getElementById('txtinic')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    var inic = Number(txtinic.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    if (inic == "" || fim == ""){
        res.innerHTML = "Impossivel contar!"
    }else if (passo <= 0){
        window.alert('Passo inválido! Considerando PASSO 1!')
        passo = 1
    }else{
        res.innerHTML = '<p>Contando:</p>'
        if (inic < fim){
        while (inic <= fim){
        res.innerHTML += ` ${inic} \u{1F449}`
        inic+=passo
        }
    }else{
        while (inic >= fim){
        res.innerHTML += ` ${inic} \u{1F449}`
        inic-=passo
        }
    }
    res.innerHTML += '\u{1F3C1}' 
    }
}


