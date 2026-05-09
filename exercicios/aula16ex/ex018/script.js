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
            if (valores.includes(num)){
                window.alert('Valor inválido ou já encontrado na lista!')
            }else{
                valores.push(num)
                option.innerHTML += `O Valor ${num} adicionado.`
                tabadd.appendChild(option)
                txtnum.value = ''
            }
            

        }
    }
}
var valores = []

function finalizar(){
    var res = document.getElementById('res')
    res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${Math.max(...valores)}</p>` 
    res.innerHTML += `<p>O menor valor informado foi ${Math.min(...valores)}</p>` 
    res.innerHTML += `<p>Somando todos os valores, temos ${valores.reduce()}</p>`
}