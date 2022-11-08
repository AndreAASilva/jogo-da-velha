/*VARIÁVEIS DO JOGO*/

var jogo=[]; //Vai reber o controle do jogo, o X ou O
var tabuleiro=[]; //Controle dos elementos visuais
var quemJoga=0; // Zero vai ser o jogador e 1 a CPU
var verifica; //Vai verificar se houve vencedor ou não
var jogando=true; //Indica se o jogo está rolando ou não
var nivel=1; //Nível de dificuldade
var jogadaCpu=1; //Indicar a Jogada da CPU
var quemComeca=1; //Indicar quem começa, se é o jogador ou CPU

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
        }
    }
}


//Função INICIA criada para a execução das variáveis e outras funções 

function inicia(){
    jogando=true; //Verifica se o jogo está acontecendo
    jogadaCpu=1; //Aciona a jogada da CPU
    jogo=[  //Posição do X ou O no tabuleiro - Linha 01 - 0,0 - 0,1 - 0,2 - Linha 02 - 1,0 - 1,1 - 1,2 - Linha 3 - 2,0 - 2,1 - 2,2
        ["","",""],
        ["","",""],
        ["","",""]
    ]
}
