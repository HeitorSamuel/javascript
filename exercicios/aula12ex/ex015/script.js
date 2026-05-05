function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = document.getElementById('imagem')
    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Valores inválidos! Tente Novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/foto-bebe-homem.jpg') 
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/foto-jovem-homem.jpg') 
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/foto-adulto-homem.jpg') 
            }else{
                img.setAttribute('src', 'imagens/foto-idoso-homem.jpg') 
            }            
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/foto-bebe-mulher.jpg') 
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/foto-jovem-mulher.jpg') 
            }else if (idade < 60){
                img.setAttribute('src', 'imagens/foto-adulto-mulher.jpg') 
            }else{
                img.setAttribute('src', 'imagens/foto-idoso-mulher.jpg') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}