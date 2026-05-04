function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dia = new Date()
    var hora = dia.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#f2cc8f'
    }else if (hora <= 18){
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#bb9457'
    }else {
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#001524'
    }
}