function calcular(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('tab')
    if (txtnum.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var num = Number(txtnum.value)
        var cont = 1
        tab.innerHTML = ""
        while (cont <= 10){
            var option = document.createElement('option')
            var mult = (num*cont)
            option.innerHTML = `${num} x ${cont} = ${mult}`
            option.value = `tab${cont}`
            tab.appendChild(option)
            cont++
            
        }
    
    }
}