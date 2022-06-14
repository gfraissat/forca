var palavras = ['RUA','PARAIBA','PRAIA','TERRA','CEARA','PASSARO','ALDEIA','OURO','JORNAL','REVISTA',
'BESOURO','PRATA','BANANA','LARANJA','PONTE','LAPIS','FONE','PREDIO','MACA']
//var dicas = ['TEM NA CIDADE','ESTADO','FÉRIAS','PLANETA','ESTADO','ANIMAL','MENOS QUE CIDADE','RIQUEZA','INFORMAÇÃO','INFORMAÇOA','ANIMAL','RIQUEZA','FRUTA','FRUTA','LIGA PONTOS','ESCRITÓRIO','TECNOLOGIA','TECNOLOGIA','CONSTRUÇÃO','FRUTA']
var incluir;
var letrasDigitadas=[];
var iniciaJogo = 1;
var codePalSel = Math.floor(Math.random() * palavras.length);
var letraspermitidas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','X','Z'];
var palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
var listaPalavraEscolhida = document.getElementById('palavra-escolhida');
var listaSublinhaPalavraEscolhida = document.getElementById('linhas');
var numeroDeTracos;
var acertos = 0;
var erros = 0;
var limitaEdicao = 0;
//Mostrando Tabuleiro 1 - saindo no jogo
document.querySelector(".bt-desistir").addEventListener("click", function(){
    var e = e || window.event;
    e.preventDefault();
    window.location.replace("index.html");
})

//Reiniciando o jogo
document.querySelector(".bt-jogoNovo").addEventListener("click", function(){
    location.reload();
})
    //ESCREVENDO A PALAVRA SORTEADA NO TABULERIO
    escrevePalavraSorteada();

    //PEGA A LETRA DIGITADA E PROCESSA
    document.body.addEventListener('keypress', function (event) {
        var key = event.key.toUpperCase();
        var code = event.chave || event.keyCode;   //KEYCODE DEPRECATED

        //Array de letras digitadas
        if(code > 64 && code <= 90 || code > 96 && code <= 122){
    // if(letraspermitidas.indexOf(key) >= 0){
            var insere = achaLetraRepetida(key, letrasDigitadas);
            if(!insere && erros < 6 && limitaEdicao === 0){
                
            //SE PRIMEIRA VEZ QUE DIGITA A LETRA:
                // INCLUIR NA ARRAY DE LETRAS JÁ DIGITADAS
                letrasDigitadas.push(key);

                //INSERIR NO TABULEIRO DE JOGO NA LISTA DE LETRAS DIGITADAS
                 document.querySelector('.letras').innerHTML += key;

                //VER SE LETRA EXISTE NA PALAVRA SELECIONADA
                checaSeLetraExisteNaPalavra(key, palavraSelecionada);
            }
        }
    });

    //Escreve a palavra sorteada com classe opacity 0
    //Escreve o traço com borda de li inferior
    function escrevePalavraSorteada() {
        var letras = [...palavraSelecionada];
        for(var i = 0; i < letras.length; i++){
            var li = document.createElement("li");
            li.className = "esconde-" + i;
            li.innerText = letras[i];
            listaPalavraEscolhida.appendChild(li);
            document.querySelector(".esconde-"+i).style.opacity = "0";
            //Desenha o traço inferior
            var liTraco = document.createElement("li");
            liTraco.className = "borda-superior";
            liTraco.innerText = ".";
            listaSublinhaPalavraEscolhida.appendChild(liTraco);
            document.querySelector(".borda-superior").style.opacity = "1";
        }
    }

    //Verifica se a letra digitada existe na palavra selecionada
    //conta acertos
    function checaSeLetraExisteNaPalavra(key, text){
        var tamanho = text.length;
        var erros1 = 0;
        for(var i = 0; i < tamanho; i++){

            if(text.charAt(i) === key){
            // console.log('O ÍNDICE = ' + i + ' TEM A LETRA = ' + key);
                document.querySelector(".esconde-"+i).style.opacity = "1";
                acertos += 1;
                if(acertos === tamanho){
                    acertos = 0;
                    limitaEdicao = 1;
                    //inicializando popup de felicitação
                    //popup.style.display = 'block';
                    popup.style.visibility='visible';
                    var audio = new Audio('som/aplausos2.mp3');
                    audio.play();
                }
            }else{ erros1 += 1; }
        }
        if(erros1 === tamanho && erros < 6){ 
            erros++;
            var audio = new Audio('som/missed.wav');
            audio.play();
        }

    //Altera classe da imagem da forca
        if(erros === 1 && erros1 === tamanho){
            var mudaStatus = document.querySelector(".forca-inicial");
            mudaStatus.classList.replace("forca-inicial", "forca-inicial2");
        }
        if(erros === 2 && erros1 === tamanho){
            var mudaStatus = document.querySelector(".forca-inicial2");
            mudaStatus.classList.replace("forca-inicial2", "forca-inicial3");
        }
        if(erros === 3 && erros1 === tamanho){
            var mudaStatus = document.querySelector(".forca-inicial3");
            mudaStatus.classList.replace("forca-inicial3", "forca-inicial4");
        }
        if(erros === 4 && erros1 === tamanho){
            var mudaStatus = document.querySelector(".forca-inicial4");
            mudaStatus.classList.replace("forca-inicial4", "forca-inicial5");
        }
        if(erros === 5 && erros1 === tamanho){
            var mudaStatus = document.querySelector(".forca-inicial5");
            mudaStatus.classList.replace("forca-inicial5", "forca-inicial6");
        }
        if(erros === 6 && erros1 === tamanho){
            var mudaStatus = document.querySelector(".forca-inicial6");
            mudaStatus.classList.replace("forca-inicial6", "forca-inicial7");
            popupPerde = document.querySelector('.popup-wrapper-perde');
            popupPerde.style.visibility='visible';

            var audio = new Audio('som/myGood.wav');
            audio.play();
        }
    }

    //Verifica se letra já exisite no array
    function achaLetraRepetida(key, array){
        function achaLetra(letra) {
            return letra === key;
        }
        var resultado = array.find(achaLetra);
        //console.log(resultado);
        return resultado;
    }