function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var msg2 = window.document.getElementById('msg2')
var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if(hora >= 4 && hora < 12){
        img.src = 'manha.png'
        msg2.innerText = 'Tenha Uma Boa Manha!'
        document.body.style.background = '#5252e7'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        msg2.innerText = 'Tenha Uma Boa Tarde!'
        document.body.style.background = '#ecea51'
    }else{
        img.src = 'noite.jpg'
        msg2.innerText = 'Tenha Uma Boa Noite!'
        document.body.style.background = '#030303a8'
    }
}