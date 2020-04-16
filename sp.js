alert("BOLOGNA & MILANO");
musicaAbertura();
alert("Bologna & Milano ‚ um jogo espetacular!");
musicaAbertura();
apagaTela();
alert("Que vai testar sua capacidade p/administrar uma cidade, um estado ou uma nação.");
musicaAbertura();
var mercados = Array(4); // mercados
var palacios = Array(4); // palaciosç
var catedrais = Array(4);
var moinhos = Array(4);
var taxaAlfandegaria = Array(4);
var taxaVendas = Array(4);
var impostos = Array(4);
var formaJustica = Array(4);
var caixa = Array(4);
var terra = Array(4);
var comerciantes = Array(4);
var nobres = Array(4);
var limitedeVida = Array(4);
var soldados = Array(4);
var bispos = Array(4);
var reserva = Array(4);
var servos = Array(4);
var posicialSocial = Array(5);
var naoDescobriAinda = Array(5);
var sexo0H8 = Array(5);
var anoCorrente = Array(5);
var tempoCondenacao = Array(4);
var variavelNaoDescoberta = Array(4);
var Titulo = Array(16);
var nome = Array(4);
var nomeComCidade = Array(5);
var Cidade = Array(5);
var nivelDoJogo = 0;
var jogadorDaVezç = 0; //antiga variável E
var graosPopulacaoç = 0;
var O = 0; // não encontrei uso para ela.
anoCorrente[5] = 1400;
Cidade[1] = "GÊNOVA";
Cidade[2] = "MILANO";
Cidade[3] = "VENEZA";
Cidade[4] = "TORINO";
Titulo[1] = "SENHOR ";
Titulo[2] = "BARÃO ";
Titulo[3] = "CONDE ";
Titulo[4] = "MARQUÊS ";
Titulo[5] = "DUQUE ";
Titulo[6] = "GRÃO-DUQUE ";
Titulo[7] = "PRÍNCIPE ";
Titulo[8] = "* REI * ";
Titulo[9] = "DAMA ";
Titulo[10] = "BARONESA ";
Titulo[11] = "CONDESSA ";
Titulo[12] = "MARQUESA ";
Titulo[13] = "DUQUESA ";
Titulo[14] = "GRÃO-DUQUESA ";
Titulo[15] = "PRINCESA ";
Titulo[16] = "* RAINHA * ";
var jogadorDaVezç = 0;

inicioJogo();
verificacoes();




function inicioJogo() {
    F = 0
    while (F < 2 || F > 4) {
        F = prompt("Quantas pessoas (2 a 4) vão participar");
    }
    for (var A = 1; A <= F; A++) {
        nome[A] = prompt("Quem é o governante de " + Cidade[A] + " ?");
        nomeComCidade[A] = nome[A] + " de " + Cidade[A];
        sexo = prompt(nomeComCidade[A] + " é homem(H) ou mulher(M): ");
        if (sexo == "H") { sexo0H8[A] = 8; } else { sexo0H8[A] = 0 };
        taxaAlfandegaria[A] = 25;
        taxaVendas[A] = 10;
        impostos[A] = 5;
        formaJustica[A] = 2;
        Z = Math.trunc(aleatorio() * 15);
        limitedeVida[A] = 1420 + Z;
        caixa[A] = 1000;
        caixa[A] = 10000;
        reserva[A] = 5000;
        posicialSocial[A] = 1;
        naoDescobriAinda[A] = 1;
        nobres[A] = 4;
        soldados[A] = 25;
        bispos[A] = 5;
        comerciantes[A] = 25;
        servos[A] = 2000;
    }

    F$ = prompt("Deseja ler as instruções (S/N) ");
    if (F$ == "s" || F$ == "S") {
        alert("INSTRUÇÕES \n A partir de agora  você será o governante de uma cidade-estado do século  XV.\n A cada período de bom governo você receberá títulos cada vez maiores. \n A expectativa de vida naquela época era muito curta, logo você disporá de pouco tempo para governar. \n Quem primeiro chegar a REI ou RAINHA será o vencedor do jogo. \n O tamanho da torre no canto superior esquerdo indicará se suas defesas são adequadas. \n O boneco em posição alta significa terras em franca produção, caso contrário você precisará de mais servos. \n Uma boa distribuição de grãos à população, aumentará a taxa de natalidade e incentivará a migração de novos servos. \n Taxas e impostos elevados aumentam a arrecadação mas afetam a economia da nação. \n Faça um governo democrático e lembre-se que é sempre bom comprar na baixa para vender na alta.\n BOA  SORTE !");
    }
    alert("NÍVEIS DO JOGO: \n 1. Aprendiz \n 2. Aventureiro \n 3. Mestre \n 4. Grande mestre");
    nivelDoJogo = prompt("Em que nível deseja jogar: ");
    nivelDoJogo = 2 + 3 * nivelDoJogo;
    jogadorDaVezç = jogadorDaVezç + 1;
}

function verificacoes() {

    if (jogadorDaVezç > F) {
        anoCorrente[5] = anoCorrente[5] + 1;
        jogadorDaVezç = 1;
    }
    else {
        if (anoCorrente[5] >= limitedeVida[jogadorDaVezç]) {
            noticiasDesagradaveis();
        }
    
    }

    if (variavelNaoDescoberta[jogadorDaVezç] != 1) {
        if (posicialSocial[jogadorDaVezç] == -1) {
            jogadorDaVezç = jogadorDaVezç + 1;
        }
        else {
            tempoCondenacao[jogadorDaVezç] = tempoCondenacao[jogadorDaVezç] - 1;
        }
    }

    if (tempoCondenacao[jogadorDaVezç] == -1) {
        if (posicialSocial[jogadorDaVezç] == -1) {
            jogadorDaVezç = jogadorDaVezç + 1;
        }
        else {
            tempoCondenacao[jogadorDaVezç] = tempoCondenacao[jogadorDaVezç] - 1;
        }
    }

    if (posicialSocial[1] < 1 && posicialSocial[2] < 1 && posicialSocial[3] < 1 && posicialSocial[4] < 1) { gameOver() }

}



//********************************************************************/
function mostraConvencoes() { //TRANSFERIDO
    alert("CONVENÇÕES: \n NOB............Nobres\n SOL............Soldados \n CLE............Clero\nCOM............Comerciantes\nSER............Servos\nCAIXA..........Dinheiro");
    Z$ = prompt("Digite <ENTER> p/voltar");

}
//********************************************************************/
function inventarioJogadores() {
    alert("NOB  SOL  CLE  COM  SERV  TERRA  CAIXA");
    for (A = 1; A <= F; A++) {
        texto = Cidade[A] + " / " + Math.trunc(nobres[A]) + " / " + Math.trunc(soldados[A]) + " / " + Math.trunc(bispos[A]) + " / " + Math.trunc(comerciantes[A]) + " / " + Math.trunc(servos[A]) + " / " + Math.trunc(terra[A]) + " / " + Math.trunc(caixa[A]);
    }
    Z$ = "";
    while (Z$ != "C" && Z$ != "c" && Z$ != "0") {
        Z$ = prompt("Digite <C> para convenções ou <0> para continuar");
    }
    if (Z$=="c" || Z$=="C") {
        mostraConvencoes();
    }
}
//********************************************************************/
function noticiasDesagradaveis() {
    alert("### NOTÍCIAS DESAGRADÁVEIS ### \n" + nomeComCidade[jogadorDaVezç] + " acaba de falecer.");
    posicialSocial[jogadorDaVezç] = -1;
    Y = Math.trunc(aleatorio() * 8);
    if (anoCorrente[5] <= 1430) {
        switch (Y) {
            case 0:
            case 1:
            case 2:
            case 3:
                alert("Devido a atentado terrorista do grupo pr¢ Napoleão.");
                break;
            case 4:
                alert("Devido a febre tifóide.");
                break;
            case 5:
                alert("Devido a pesta negra.");
                break;
            case 6:
                alert("Devido a ataque de barbaros durante uma viagem.");
                break;

            case 7:
            case 8:
                alert("Devido a envenenamento alimentar");
                break;
        }
    }
    else {
        alert("Devido à velhice após longo governo.");
    }
}
//********************************************************************/
function musicaAbertura() {

}
//********************************************************************/
function apagaTela() {

}
//********************************************************************/
function aleatorio() {
    return Math.random();
}
//********************************************************************/