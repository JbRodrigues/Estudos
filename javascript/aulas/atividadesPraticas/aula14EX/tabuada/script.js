function verifica(){
    var numero = document.getElementById('tabuada').value
    var select = document.getElementById('seltab')
    var cont = 0


    if(numero.length == 0){
        window.alert('[ERRO] Digite um número válido!!!')
    }else{
        select.innerHTML = ''
        for(cont ; cont <= 10; cont++){
            var item = document.createElement('option')
            item.text = `${numero} X ${cont} = ${numero*cont}`
            select.appendChild(item)
        }
    }
}