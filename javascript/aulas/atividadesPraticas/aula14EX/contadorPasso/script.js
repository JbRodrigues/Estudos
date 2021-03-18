function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Preencha os campos adequadamente')
    }else{
        res.innerHTML = 'Contando...<br>'
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

    if(p <= 0){
        alert('Passo Inválido, Iniciando do 1')
        p = 1;
    }

    if(i < f){
        //contagem crescente
        for(var c = i; c <= fim; c += p){
            res.innerText += `${c} \u{1F449}`
        }
    
    }else{
        //contagem decrescente
        for(var c = i; c >= f; c -= p){
            res.innerText += `${c} \u{1F449}`
        }
    }
    res.innerText += `\u{1F3C1}`

    }
}