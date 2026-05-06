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
    }else if (passo == '0'){
        window.alert('Passo inválido! Considerando PASSO 1!')
    }
    
}


