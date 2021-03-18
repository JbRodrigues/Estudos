function verifica(){
    var numero = document.getElementById('txtentrada').value
    var select = document.getElementById('selnum')
    var cont = 0





    if(numero.length == 0){
        window.alert('[ERRO] Digite um número válido!!!')
    }else{
        select.innerHTML = ''
            var item = document.createElement('option')
            var vetor = []
            for (vetor.length; vetor <= vetor.length; vetor++) {
                vetor.push(numero)
            }
            console.log(vetor)
            item.text = `O numero ${numero} foi Adicionado`
            select.appendChild(item)
        
    }
}