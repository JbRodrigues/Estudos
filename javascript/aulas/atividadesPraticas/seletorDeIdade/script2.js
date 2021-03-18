function verifica(){
    var data = new Date()
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var masc = document.getElementById('masc')
    var fem = document.getElementById('fem')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("ERRO: Data Inválida, preencha corretamente!")
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)

       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(fsex[0].checked){
           if(idade >= 0 && idade < 10){
               //criança
               img.setAttribute('src', './img/bebemenino.jpg')
           }else if(idade < 21){
                //jovem
                img.setAttribute('src', './img/jovemhomem.jpg')
           }else if(idade < 50){
               //adulto
               img.setAttribute('src', './img/adultohomem.jpg')
           }else{
               //idoso
               img.setAttribute('src', './img/velhohomem.jpg')
           }
           genero = "Homem"
       }else if(fsex[1].checked){
            
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './img/bebemenina.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './img/jovemmulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './img/adultomulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', './img/velhomulher.jpg')
            }
            genero = 'Mulher'
       }
       res.style.textAlign = 'center'
       res.innerHTML = `${genero} com ${idade} anos de idade`
       res.appendChild(img)
    }

}