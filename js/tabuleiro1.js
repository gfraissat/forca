//criar lista com novas palavras no localStorage
var palavras = ['RUA','PARAIBA','PRAIA','TERRA','CEARA','PASSARO','ALDEIA','OURO','JORNAL','REVISTA',
'BESOURO','PRATA','BANANA','LARANJA','PONTE','LAPIS','FONE','PREDIO','MACA']
var palavras1 =[];

//criar um array de palavras incluidas no localStorage
document.querySelector('.bt-incluir').onclick = function(){
    var novaPalavra = document.querySelector('.palavra-incluir').value.toUpperCase();
        if(novaPalavra === ''){ 
            alert('NÃO É POSSÍVEL INCLUIR CARACTER EM BRANCO \n DIGITE UMA PALAVRA');

        } else if(palavras.indexOf(novaPalavra) >= 0 || palavras1.indexOf(novaPalavra) >= 0){
            alert('PALAVRA JÁ EXISTE NA LISTA');

        } else if(novaPalavra.length > 8){
            alert('A palavra não pode ter mais de 8 letras!! ')
        } else {
            if(palavras1.length < 1 || palavras1.indexOf(novaPalavra) < 0){
                //resgatando o array atualizado
                if(palavras1.length > 0){
                    palavras1 = JSON.parse(localStorage.getItem('palavrasAtualizadas'));
                }
                //inserindo nova palavra no array nativo
                palavras1.push(novaPalavra);
                //remove array do localStorage
                localStorage.removeItem('palavrasAtualizadas');   
                //envia array nativo atualizado para localStorage
                localStorage.setItem('palavrasAtualizadas', JSON.stringify(palavras1));
                
//+++++++++++++ incluindo no array de palavras a plavra incluída  //++++++++++++++++++++++++++++//
                palavras = palavras.concat(palavras1);
                //enviando para o localStorage o array atualizado
                localStorage.setItem('palavras', palavras);
                console.log('palavras  ' +palavras);
                palavras = JSON.parse(localStorage.getItem('palavras'));
            }
        }

        document.querySelector('.palavra-incluir').value = '';
        document.querySelector(".bt-iniciar").focus();
    }

    //Mostrando Tabuleiro 2 - entrando no jogo
    document.querySelector(".bt-iniciar").addEventListener("click", function(){
        var e = e || window.event;
        e.preventDefault();
        window.location.replace("oreielubat.html");
})
