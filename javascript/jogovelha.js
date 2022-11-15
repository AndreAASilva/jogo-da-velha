/*VARIÁVEIS DO JOGO*/

var jogo=[]; //Vai reber o controle do jogo, o X ou O
var tabuleiro=[]; //Controle dos elementos visuais
var quemJoga=0; // Zero vai ser o jogador e 1 a CPU
var verifica; //Vai verificar se houve vencedor ou não
var jogando=true; //Indica se o jogo está rolando ou não
var nivel=2; //Nível de dificuldade
var jogadaCpu=1; //Indicar a Jogada da CPU
var quemComeca=1; //Indicar quem começa, se é o jogador ou CPU
var jogada = 0 //Inserido na rotina do iniciar

//Jogada da CPU

function cpuJoga(){
    //Verificar se o jogo está acontecendo
    if(jogando){
        var l,c;
        if(nivel==1){
            //Verificar a jogada e depois a CPU joga
            do{
                l=Math.round(Math.random()*2)
                c=Math.round(Math.random()*2)
            }while(jogo[l][c]!='')
                jogo[l][c]="O"

            
        }else if(nivel==2){ 
            //Nível 2 do jogo
            //Jogadas Linha 1
            if((jogo[0][0]=='O')&&(jogo[0][1]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else if((jogo[0][0]=='O')&&(jogo[0][2]=='O')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else if((jogo[0][1]=='O')&&(jogo[0][2]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //Jogada linha 2    
            else if((jogo[1][0]=='O')&&(jogo[1][1]=='O')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][0]=='O')&&(jogo[1][2]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[1][2]=='O')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }
            //Jogada linha 3
            else if((jogo[2][0]=='O')&&(jogo[2][1]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[2][0]=='O')&&(jogo[2][2]=='O')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[2][1]=='O')&&(jogo[2][2]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }
            //Jogada coluna 1
            else if((jogo[0][0]=='O')&&(jogo[1][0]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][0]=='O')&&(jogo[2][0]=='O')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][0]=='O')&&(jogo[2][0]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //Jogada coluna 2
            else if((jogo[0][1]=='O')&&(jogo[1][1]=='O')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[0][1]=='O')&&(jogo[2][1]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][1]=='O')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }
            //Jogada coluna 3
            else if((jogo[0][2]=='O')&&(jogo[1][2]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][2]=='O')&&(jogo[2][2]=='O')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][2]=='O')&&(jogo[2][2]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }
            //Jogada Diagonal 1
            else if((jogo[0][0]=='O')&&(jogo[1][1]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][0]=='O')&&(jogo[2][2]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][2]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //Jogada Diagonal 2
            else if((jogo[0][2]=='O')&&(jogo[1][1]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][2]=='O')&&(jogo[1][1]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[2][0]=='O')&&(jogo[1][1]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }

            //DEFESA
            //Jogadas Linha 1
            if((jogo[0][0]=='X')&&(jogo[0][1]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else if((jogo[0][0]=='X')&&(jogo[0][2]=='X')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else if((jogo[0][1]=='X')&&(jogo[0][2]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //Jogada linha 2    
            else if((jogo[1][0]=='X')&&(jogo[1][1]=='X')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][0]=='X')&&(jogo[1][2]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[1][2]=='X')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }
            //Jogada linha 3
            else if((jogo[2][0]=='X')&&(jogo[2][1]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[2][0]=='X')&&(jogo[2][2]=='X')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[2][1]=='X')&&(jogo[2][2]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }
            //Jogada coluna 1
            else if((jogo[0][0]=='X')&&(jogo[1][0]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][0]=='X')&&(jogo[2][0]=='X')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][0]=='X')&&(jogo[2][0]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //Jogada coluna 2
            else if((jogo[0][1]=='X')&&(jogo[1][1]=='X')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[0][1]=='X')&&(jogo[2][1]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][1]=='X')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }
            //Jogada coluna 3
            else if((jogo[0][2]=='X')&&(jogo[1][2]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][2]=='X')&&(jogo[2][2]=='X')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][2]=='X')&&(jogo[2][2]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }
            //Jogada Diagonal 1
            else if((jogo[0][0]=='X')&&(jogo[1][1]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][0]=='X')&&(jogo[2][2]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][2]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //Jogada Diagonal 2
            else if((jogo[0][2]=='X')&&(jogo[1][1]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][2]=='X')&&(jogo[1][1]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[2][0]=='X')&&(jogo[1][1]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else if(jogada<8){
                do{
                    l=Math.round(Math.random()*2)
                    c=Math.round(Math.random()*2)
                }while(jogo[l][c]!="")
                jogo[l][c]="O"

            }else{
                for(var l=0;l<3;l++){
                    for(var c=0;c<3;c++){
                        if(jogo[l][c]==""){
                            jogo[l][c]="O"
                        }
                    }
                }
            }

    }        
            //Verificando se há vencedor após a função verificaVitoria()
            verifica=verificaVitoria()
            if(verifica!=""){
                alert(verifica+" venceu")
                jogando=false //Se houve vencedor ele para o jogo

            }
            atualizaTabuleiro()
            jogada++
            quemJoga=0

            }
    
}

//Função para verificar a vitória se houve vencedor
function verificaVitoria(){
    var l,c;
    for(var l=0;l<3;l++){
        //Verifica as linhas
        if((jogo[l][0]==jogo[l][1])&&(jogo[l][1]==jogo[l][2])){
            return jogo[l][0]
        }
    }
        //Verificar as colunas
        for(c=0;c<3;c++){
        if((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])){
            return jogo[0][c]
        }
    }

    //Diagonais
    if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){
        return jogo[0][0]
    }else if((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])){
        return jogo[0][2]
    }
    return ""; //Se nenhuma dessas opções estiver completa ele vai retornar vazio
}



//Jogada do jogador
function jogar(p){
    if((jogando)&&(quemJoga==0)){
        switch(p){ //Recebendo a posição jogada
            case 1: //Se o valor de P for 1 ele vai verificar a posição jogada
                if(jogo[0][0]==""){ //Verifica se a posição é válida para o jogo, linha zero, coluna zero
                    jogo[0][0]='X'; //Se for válida ele marca o X
                    quemJoga=1; //Na sequência passa a vez pra CPU                        
                }
                break;    
        
            case 2:
                if(jogo[0][1]==""){
                    jogo[0][1]='X'
                    quemJoga=1;     
                    }
                break;
            case 3:
                if(jogo[0][2]==""){
                    jogo[0][2]="X"
                    quemJoga=1;    

                }
                break;
            case 4:
                if(jogo[1][0]==""){
                    jogo[1][0]="X"
                    quemJoga=1

                }
                break
            case 5:
                if(jogo[1][1]==""){
                    jogo[1][1]="X"
                    quemJoga=1
                }
                break
            case 6:
                if(jogo[1][2]==""){
                    jogo[1][2]="X"
                    quemJoga=1

                }
                break
            case 7:
                if(jogo[2][0]==""){
                    jogo[2][0]="X"
                    quemJoga=1

                }
                break
            case 8:
                if(jogo[2][1]==""){
                    jogo[2][1]="X"
                    quemJoga=1

                }
                break
            default:
                if(jogo[2][2]==""){
                    jogo[2][2]="X"
                    quemJoga=1

                }
                break
        }
        

        //Vericando se há vencedor para o jogador como também foi inserido o mesmo código para a CPU
        
        //if vai validar se quem jogou foi igual a 1 para saber quando finalziar a jogada e passar para a CPU
        if(quemJoga==1){
            atualizaTabuleiro() //Aqui ele executa as jogadas e a função atualizaTabuleiro preenche os campos
            verifica=verificaVitoria()
            if(verifica!=""){
                alert(verifica+' venceu')
                jogando=false
            }
            jogada++
            cpuJoga()
        }    
    }
}

//Função criada para inserir as jogadas visualmente no tabuleiro, utilizando a variável tabuleiro.

function atualizaTabuleiro(){
    for(var l=0;l<3;l++){
        for(var c=0;c<3;c++){
            if(jogo[l][c]=="X"){
                tabuleiro[l][c].innerHTML="X"
                tabuleiro[l][c].style.cursor="default"
            }else if(jogo[l][c]=="O"){
                tabuleiro[l][c].innerHTML='O'
                tabuleiro[l][c].style.cursor="default"
            }else{
                tabuleiro[l][c].innerHTML=""
                tabuleiro[l][c].style.cursor="pointer"
            }

        }

    }
}


//Função INICIA criada para a execução das variáveis e outras funções 

function inicia(){
    jogando=true; //Verifica se o jogo está acontecendo
    jogadaCpu=1; //Aciona a jogada da CPU
    jogada = 0
    jogo=[  //Posição do X ou O no tabuleiro - Linha 01 - 0,0 - 0,1 - 0,2 - Linha 02 - 1,0 - 1,1 - 1,2 - Linha 3 - 2,0 - 2,1 - 2,2
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    tabuleiro=[ //Associação dos elementos visuais com a matriz tabuleiro
        [document.getElementById('p1'),document.getElementById('p2'),document.getElementById('p3')],
        [document.getElementById('p4'),document.getElementById('p5'),document.getElementById('p6')],
        [document.getElementById('p7'),document.getElementById('p8'),document.getElementById('p9')]
    ]
    //Inserindo a função atualizaTabuleiro para iniciar o jogo quando clicar no botão e também definindo quem vai iniciar jogando se é a CPU ou usuário
    atualizaTabuleiro()
    if(quemComeca==1){
        quemComeca=0
        quemJoga=quemComeca
        //Imprimindo na tela quem inicia a partida
        document.getElementById('dvQuemComeca').innerHTML='Quem começa: JOGADOR'
    }else{
        quemComeca=1
        quemJoga=quemComeca
        //Imprimindo na tela quem inicia a partida
        document.getElementById('dvQuemComeca').innerHTML='Quem começa: CPU'
        //Insere a função da CPU 
        cpuJoga()
    }
}



window.addEventListener('load',inicia)
