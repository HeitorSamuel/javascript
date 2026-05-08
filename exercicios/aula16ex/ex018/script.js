function adicionar(){
    var txtnum = document.getElementById('txtnum')
    if (txtnum.value.length == 0){
        window.alert('Adicione valores antes de Finalizar!')
    }else{
        var num = Number(txtnum.value)
        if (num < 1 || num > 100){
            window.alert('Valor inválido ou já encontrado na lista!')
        }else{
            var tabadd = document.getElementById('tabadd')
            var option = document.createElement('option')
            option.setAttribute('value', 'valor')
            option.innerHTML = `O valor ${num} adicionado.`
            tabadd.appendChild(option)

        }
    }
}