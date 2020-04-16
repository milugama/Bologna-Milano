alert("BOLOGNA & MILANO");
alert("Bologna & Milano ‚ um jogo espetacular!");
alert("Que vai testar sua capacidade p/administrar uma cidade, um estado ou uma nação.");
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
var posicialSocial = Array(5);  //se -1 jogador morto
var scorePlayer = Array(5);
var sexo0H8 = Array(5);
var anoCorrente = Array(5);
var tempoCondenacao = Array(4);
var variavelNaoDescoberta = Array(4);
var Titulo = Array(16);
var nome = Array(4);
var nomeComCidade = Array(5);
var Cidade = Array(5);
var jogadorDaVezç = 0; //antiga variável E
var graosPopulacaoç = 0;
var O = 0; // não encontrei uso para ela.
var clima = "";
var precoGrao = 0;
var precoTerra = 0;
var producaoGraos = 0;
var demanda = 0;
var zAuxiliar = 0;
//melhorar nome das variáveis abaixo depois
var C1 = 0;
var S1 = 0;
var I1 = 0;
var J = 0;
var I=-1;
var numeroJogadores = 0;

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
//63 CLS


inicioJogo();
colheita(); //127 GOSUB 181; // colheita
ratosComeram();
opcoesEconomicas(); // opções econômicas
fornecerGrao(); //129 GOSUB 331 //fornecimento de grãos
opcoesFinanceiras(); //130 GOSUB 286 // opções financeiras
pestes(); //131 GOSUB 639 // pestes
mapa(); //132 GOSUB 430 //mapa
investimentosEstado(); //133 GOSUB 509 //investimentos do estado
verificarPromocao(); //134 GOSUB 580 //verificacao de promoção
proximoJogador(); // 135 GOTO 111 //MUDA PARA PRÓXIMO JOGADOR ******* IMPLEMENTAR



function inicioJogo() { //********************************** TRANSFERIDA
    //variáveisGlobais
    O = 0; // não encontrei uso para ela.
    clima = "";
    precoGrao = 0;
    precoTerra = 0;
    producaoGraos = 0;
    demanda = 0;
    zAuxiliar = 0;
    //melhorar nome das variáveis abaixo depois
    C1 = 0;
    S1 = 0;
    I1 = 0;
    J = 0;
    numeroJogadores = 0;

    while (numeroJogadores < 2 || numeroJogadores > 4) {
        numeroJogadores = prompt("Quantas pessoas (2 a 4) vão participar");
    }

    for (var A = 1; A <= numeroJogadores; A++) {
        //70 CLS: BEEP
        nome[A] = prompt("Quem é o governante de " + Cidade[A] + " ?");
        //72 CLS
        nomeComCidade[A] = nome[A] + " de " + Cidade[A];
        F = prompt(nomeComCidade[A] + " é homem(H) ou mulher(M): ");
        if (F == "H") { sexo0H8[A] = 8; } else { sexo0H8[A] = 0 };
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
        scorePlayer[A] = 1;
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
    nivelDoJogo = 0;
    while (nivelDoJogo < 1 || nivelDoJogo > 4) {
        nivelDoJogo = prompt("NÍVEIS DO JOGO: \n 1. Aprendiz \n 2. Aventureiro \n 3. Mestre \n 4. Grande mestre\n \n Em que nível deseja jogar: ");
    }
    nivelDoJogo = nivelDoJogo + 2 + 2 * nivelDoJogo;
    jogadorDaVezç = jogadorDaVezç + 1;


    if (jogadorDaVezç > numeroJogadores) {
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

    if (anoCorrente[5] >= limitedeVida[jogadorDaVezç]) { noticiasDesagradaveis() }; //126

}


function inventarioJogadores() { //TRANSFERIDO
    alert("NOB  SOL  CLE  COM  SERV  TERRA  CAIXA");
    for (A = 1; A <= numeroJogadores; A++) {
        texto = Cidade[A] + " / " + Math.trunc(nobres[A]) + " / " + Math.trunc(soldados[A]) + " / " + Math.trunc(bispos[A]) + " / " + Math.trunc(comerciantes[A]) + " / " + Math.trunc(servos[A]) + " / " + Math.trunc(terra[A]) + " / " + Math.trunc(caixa[A]);
    }
    Z$ = "";
    while (Z$ != "C" && Z$ != "c" && Z$ != "0") {
        Z$ = prompt("Digite <C> para convenções ou <0> para continuar");
    }
    if (Z$ == "c" || Z$ == "C") {
        mostraConvencoes();
    }
}

function noticiasDesagradaveis() { //TRANSFERIDO
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
    inventarioJogadores(); 
}



function servosNasceram(A) { //Verificar o que é e de onde vem o A linha 171
    Z = (aleatorio() * A) * servos[jogadorDaVezç] / 100;
    Z2 = Math.trunc(Z);
    alert(Z2 + " servos nasceram este ano.");
    servos[jogadorDaVezç] = servos[jogadorDaVezç] + Z2;
}

function servosMorreram(A) {//Verificar o que é e de onde vem o A linha 176
    Z = (aleatorio() * A) * servos[jogadorDaVezç] / 100;
    Z2 = Math.trunc(Z);
    alert(Z2 + " servos morreram este ano.");
    servos[jogadorDaVezç] = servos[jogadorDaVezç] - Z2;
}


function colheita() {
    var DD=0;
    W = 0;
    while (W < 1 || W > 5) {
        W = Math.trunc((Math.trunc(aleatorio() * 5) + Math.trunc(aleatorio() * 6)) / 2) + 1;
    }

    switch (W) {
        case 1:
            clima = "Estiagem - Ameaça de fome!!";
            alert(clima);
            break;
        case 2:
            clima = "Tempo ruim - Colheita pobre.";
            alert(clima);
            break;
        case 3:
            clima = "Tempo normal - Colheita razoável.";
            alert(clima);
            break;
        case 4:
            clima = "Tempo bom - Colheita boa.";
            alert(clima);
            break;
        case 5:
            clima = "Tempo ótimo - Colheita excelente!!";
            alert(clima);
            break;
    }

    R = Math.trunc(aleatorio() * 50);
    if (R == 0) { R = 1; }
    reserva[jogadorDaVezç] = (reserva[jogadorDaVezç] * 100 - reserva[jogadorDaVezç] * R) / 100;
    X = Math.trunc(servos[jogadorDaVezç] - moinhos[jogadorDaVezç] * 100);
    if (X < 0) { X = 1; }
    Y = W - .5
    DD = W * (servos[jogadorDaVezç] - X);
    if (DD == 0) { DD = 1; }
    producaoGraos = Math.trunc(Y * terra[jogadorDaVezç] / 1.5 + Y * X + (aleatorio() * servos[jogadorDaVezç]) - DD);
    console.log(producaoGraos);
    reserva[jogadorDaVezç] = Math.trunc(reserva[jogadorDaVezç] + producaoGraos);
    demanda = nobres[jogadorDaVezç] * 100 + catedrais[jogadorDaVezç] * 40 + comerciantes[jogadorDaVezç] * 30 + soldados[jogadorDaVezç] * 10 + servos[jogadorDaVezç] * 5;
    precoTerra = Math.trunc((100 * W + Math.trunc(aleatorio() * 9) + Math.trunc(aleatorio() * 9)) / 10);
    precoTerra = (anoCorrente[5] - 1400 + precoTerra) / 10;
    Z = 6 - W;
    precoGrao = Math.trunc((Math.trunc(aleatorio() * 5) + Math.trunc(aleatorio() * 5) + Z * 10) / (5 + 2 * Y) * 30);
}


function ratosComeram() {
    alert("Os ratos comeram" + R + " % da reserva de grãos dos silos de armazenagem \n" + clima + "\n Produção de grãos: " + producaoGraos + " sacas.");
    console.log(producaoGraos);
    mostraSituacaoAno();
}

function mostraSituacaoAno() {
    alert("RESERVA  DEMANDA  PREÇO  PREÇO  CAIXA\n grãos    grãos    grãos  Terra \n" + Math.trunc(reserva[jogadorDaVezç]) + " " + Math.trunc(demanda) + " " + Math.trunc(precoGrao) + " " + precoTerra + " " + Math.trunc(caixa[jogadorDaVezç]) + " \n sacas    sacas  mil/sc  hect. florins");
}



function rendaDoEstado() { //221
    J = (formaJustica[jogadorDaVezç] * 300 - 500) * posicialSocial[jogadorDaVezç];
    switch (formaJustica[jogadorDaVezç]) {
        case 1:
            J$ = "Justa";
            break;
        case 2:
            J$ = "Moderada";
            break;
        case 3:
            J$ = "Ríspida"
            break;
        case 4:
            J$ = "Abusiva"
            break;
    }
    C1 = (nobres[jogadorDaVezç] * 90 + bispos[jogadorDaVezç] * 35 + comerciantes[jogadorDaVezç] * 10) * (Y / 100) + scorePlayer[jogadorDaVezç] * 20;
    S1 = (nobres[jogadorDaVezç] * 50 + comerciantes[jogadorDaVezç] * 75 + scorePlayer[jogadorDaVezç] * 10) * (Y / 100) * (5 - formaJustica[jogadorDaVezç]) / 2;
    I1 = nobres[jogadorDaVezç] * 250 + scorePlayer[jogadorDaVezç] * 20 + (10 * formaJustica[jogadorDaVezç] * nobres[jogadorDaVezç]) * (Y / 100);
    C1 = Math.trunc(5 * C1 * taxaAlfandegaria[jogadorDaVezç] / 100);
    S1 = Math.trunc(25 * S1 * taxaVendas[jogadorDaVezç] / 100);
    I1 = Math.trunc(Math.abs(2 * I1 * impostos[jogadorDaVezç] / 100));
    alert("RENDA DO ESTADO:" + J + C1 + S1 + I1 + " florins \n TAXAS DA  TAXAS S/  IMPOSTOS  JUSTI€A  ALFANDEGA  VENDAS  DIVERSOS  (forma) \n" + taxaAlfandegaria[jogadorDaVezç] + "% " + taxaVendas[jogadorDaVezç] + "% " + impostos[jogadorDaVezç] + "% " + J$ + "\n" + C1 + " " + S1 + " " + I1 + " " + J + "\n florins  florins    florins    florins");
}

//OPÇÕES ECONÔMICAS - 245
function opcoesEconomicas() {
    alert(Titulo[sexo0H8[jogadorDaVezç]] + posicialSocial[jogadorDaVezç] + nomeComCidade[jogadorDaVezç]);
    ratosComeram(); //213
    Z$ = "";
    while (Z$ < 0 || Z$ > 4) {
        Z$ = prompt("OPÇÕES ECONÔMICAS \n 1. Comprar grãos \n 2. Vender grãos\n 3. Comprar terras \n4. Vender terras \n Área da nação ==>" + Math.trunc(terra[jogadorDaVezç]) + "Hect. \n  Digite <0> p/continuar");
    }
    switch (Z$) {

        case 1:
            I1 = prompt("Quanto grão vai comprar? ");
            caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - (I1 * G / 1000);
            reserva[jogadorDaVezç] = reserva[jogadorDaVezç] + I1;
            alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç]);
            mostraSituacaoAno();
            break;

        case 2:
            I1 = prompt("Quanto grão vai vender");
            if (I1 <= reserva[jogadorDaVezç]) {
                caixa[jogadorDaVezç] = caixa[jogadorDaVezç] + (I1 * G / 1000); //G é o preço do grão, verificar de onde vem essa informação
                reserva[jogadorDaVezç] = reserva[jogadorDaVezç] - I1;
                alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç]);
                mostraSituacaoAno();
            }
            else {
                alert("Não há tanto grão disponível ...");
            }


            break;

        case 3:
            I1 = prompt("Quantos hect. vai comprar");
            terra[jogadorDaVezç] = terra[jogadorDaVezç] + I1;
            caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - (I1 * L); //L é o preço da terra, verificar de onde vem essa informação
            alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç]);
            mostraSituacaoAno();
            break;

        case 4:
            ok = false;
            while (ok == false) {
                I1 = prompt("Quantos hect. vai vender?");
                if (I1 <= (terra[jogadorDaVezç] - 5000)) {
                    terra[jogadorDaVezç] = terra[jogadorDaVezç] - I1;
                    caixa[jogadorDaVezç] = caixa[jogadorDaVezç] + (I1 * L);
                    alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç]);
                    mostraSituacaoAno();
                    ok = true;
                }
                else {
                    alert("Você não pode vender tanto");
                }

            }
            break;
    }
}



function opcoesFinanceiras() { //286
    z$ = "";
    textoRenda = rendaDoEstado(); //implementar
    while (Z$ != 0) {
        Z$ = prompt(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç] + textoRenda + "\nOPÇÕES FINANCEIRAS\n 1. Taxas alfandegárias \n 2. Taxas sobre vendas\n 3. Impostos diversos\n 4. Taxas judiciárias \n Digite (0) p/continuar");
        I = Z$;
        switch (I) {
            case 1: //301 a 304
                txAlfandegaria = -1;
                while (txAlfandegaria < 0 || txAlfandegaria > 100) {
                    txAlfandegaria = prompt("Nova taxa alfandegária (0 A 100%)");
                }
                taxaAlfandegaria[jogadorDaVezç] = txAlfandegaria;
                break;
            case 2: //306 a 309
                txVendas = -1;
                while (txVendas < 0 || txVendas > 50) {
                    txVendas = prompt("Nova taxa sobre vendas (0 A 50%)");
                }
                taxaVendas[jogadorDaVezç] = txVendas;
                break;
            case 3:
                impDiversos = -1;
                while (impDiversos < 0 || impDiversos > 25) {
                    impDiversos = prompt("Nova taxa para impostos diversos (0 A 25%)");
                }
                impostos[jogadorDaVezç] = impDiversos;
                break;
            case 4:
                fJustica = -1;
                while (fJustica < 1 || fJustica > 4) {
                    fJustica = prompt("JUSTIÇA ==> 1. Justa / 2. Moderada / 3. Ríspida / 4. Abusiva");
                }
                formaJustica[jogadorDaVezç] = fJustica;
                break;
            default:
                alert("Opção inválida!!");
        }
    }
}

function situacaoFiscal() { //deve ser acionado após opcoesFinanceiras
    caixa[jogadorDaVezç] = caixa[jogadorDaVezç] + C1 + S1 + I1 + J;
    if (caixa[jogadorDaVezç] < 0) {
        JE = 0;
        while (JE < 20) {
            JE = Math.trunc(aleatorio() * 50);
        }
        alert("Os Bancos cobraram " + JE + "% de juros sobre sua dívida");
        JJ = 1 - JE / 100; // Original estava com 1+
        caixa[jogadorDaVezç] = Math.trunc(caixa[jogadorDaVezç] * JJ);
    }
    if (caixa[jogadorDaVezç] < (-10000 * posicialSocial[jogadorDaVezç])) {
        falencia();
    }
}






function fornecerGrao() {
    ok = false;
    while (ok = false) {
        graosPopulacaoç = prompt("Você tem um total de " + reserva[jogadorDaVezç] + " de grãos e deverá fornecer entre " + Math.trunc(reserva[jogadorDaVezç] * .2 - 1) + " e " + Math.trunc(reserva[jogadorDaVezç] * .8 - 1));

        if (graosPopulacaoç >= reserva[jogadorDaVezç] * .2 && graosPopulacaoç <= reserva[jogadorDaVezç] * .8) {
            ok = true;
        }
        else {
            alert("Você não respeitou os limites de fornecimento de grãos. Você deve fornecer no mínimo 20% e no máximo 80% da reserva de grãos para sua população");
            ok = false;
        }
    }
    reserva[jogadorDaVezç] = reserva[jogadorDaVezç] - graosPopulacaoç;
}

function resultadosAdm() {
    alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç]);
    Z = graosPopulacaoç / demanda - 1;
    if (Z > 0) { Z = Z / 2; }
    if (Z > .25) { Z = Z / 10 + .25; }
    Z2 = 50 - taxaAlfandegaria[jogadorDaVezç] - taxaVendas[jogadorDaVezç] - impostos[jogadorDaVezç];
    if (Z2 < 0) { Z2 = Z2 * formaJustica[jogadorDaVezç]; }
    Z2 = Z2 / 10;
    if (Z2 > 0) { Z2 = Z2 + 3 - formaJustica[jogadorDaVezç] };
    Z = Z + (Z2 / 10);
    if (Z > .5) { Z = .5; }
    if (graosPopulacaoç < (demanda - 1)) { }//THEN 388 ************************************* 
    A = 7;
    servosNasceram(A);//  352 GOSUB 171
    A = 3;
    servosMorreram(A); // 354 GOSUB 176

    if (taxaAlfandegaria[jogadorDaVezç] + taxaVendas[jogadorDaVezç] < 35) {
        comerciantes[jogadorDaVezç] = comerciantes[jogadorDaVezç] + Math.trunc(aleatorio() * 8);
    }
    if (impostos[jogadorDaVezç] < Math.trunc(aleatorio() * 20)) { nobres[jogadorDaVezç] = nobres[jogadorDaVezç] + Math.trunc(aleatorio() * 4) - 1; }

    bispos[jogadorDaVezç] = bispos[jogadorDaVezç] + Math.trunc(aleatorio() * 3) - 1;
    if (graosPopulacaoç >= (demanda + demanda * .3)) { //THEN 376
        Z2 = servos[jogadorDaVezç] / 1000;
        Z = (graosPopulacaoç - demanda) / demanda * 10;
        Z = Z * Z2 * Math.trunc(aleatorio() * 25) + Math.trunc(aleatorio() * 40);
        if (Z > 32000) { Z = 32000; }
        Z2 = Z;
        Z = Math.trunc(aleatorio() * Z2);
        if (Z < 1) { Z = 2; }
        alert(Z + " servos mudaram para sua cidade");
        servos[jogadorDaVezç] = servos[jogadorDaVezç] + Z;
        scorePlayer[jogadorDaVezç] = scorePlayer[jogadorDaVezç] + .5;
        Z2 = Z / 5;
        Z = Math.trunc(aleatorio() * Z2);
        if (Z > 50) { Z = 50; }
        comerciantes[jogadorDaVezç] = comerciantes[jogadorDaVezç] + Z;
        nobres[jogadorDaVezç] = nobres[jogadorDaVezç] + 1;
        bispos[jogadorDaVezç] = bispos[jogadorDaVezç] + 2;
    }
    else { servosFugiram() };

}
function servosFugiram() {

    if (formaJustica[jogadorDaVezç] >= 3) { //THEN 387 //essa é a linha 376 do if acima
        J1 = servos[jogadorDaVezç] / 100 * (formaJustica[jogadorDaVezç] - 2) * (formaJustica[jogadorDaVezç] - 2);
        J1 = Math.trunc(aleatorio() * J1);
        if (J1 <= 1) { J1 = 2; }
        servos[jogadorDaVezç] = servos[jogadorDaVezç] - J1;
        alert(J1 + " servos fugiram em virtude de injustiças.");
        temp = prompt("Digite <ENTER> p/continuar");
    }
    //depois daqui tem que ir para 402
}


function verificacoesDiversas() { //388
    X = (demanda - graosPopulacaoç) / demanda * 100 - 9;
    X2 = X;
    if (X <= 65) {
        if (X < 0) {
            X2 = 0;
            X = 0;
        }
    } else {
        X = 65;
        comerciantes[jogadorDaVezç] = comerciantes[jogadorDaVezç] / 2;
    }
    A = 3;
    servosNasceram(A);
    A = X2 + 8;
    servosMorreram(A);
    if (Z2 > 1000) {
        scorePlayer[jogadorDaVezç] = scorePlayer[jogadorDaVezç] / 2;
    }
    servosFugiram();
}

function rendimentoMercadoMoinhos() { //402

    HE = taxaVendas[jogadorDaVezç];
    if (taxaVendas[jogadorDaVezç] <= 5) {
        HE = Math.trunc(aleatorio() * 4 + 1);
    }
    Z = Math.trunc(mercados[jogadorDaVezç] * servos[jogadorDaVezç] * comerciantes[jogadorDaVezç] / (1500 * Math.sqrt(HE)));
    if (Z >= mercados[jogadorDaVezç] * 1000) {
        Z = Math.trunc(mercados[jogadorDaVezç] * 300 * (1 + aleatorio() * 3));
    }
    caixa[jogadorDaVezç] = caixa[jogadorDaVezç] + Z;
    if (Z > 0) {
        alert("Seus mercados renderam " + Z + " florins");
    }
    if (moinhos[jogadorDaVezç] > 0) {
        TX = reserva[jogadorDaVezç] / (moinhos[jogadorDaVezç] * 5000);
        if (TX > 1) { TX = 1; }
        Z = Math.trunc(moinhos[jogadorDaVezç] * TX * servos[jogadorDaVezç] / (3 * Math.sqrt(HE)));
        if (Z >= moinhos[jogadorDaVezç] * 2000) {
            Z = Math.trunc(moinhos[jogadorDaVezç] * 1000 * (1 + aleatorio() * 2));
        }
        reserva[jogadorDaVezç] = reserva[jogadorDaVezç] - TX * moinhos[jogadorDaVezç] * 5000;
        caixa[jogadorDaVezç] = caixa[jogadorDaVezç] + Z;
        alert("Seus moinhosç renderam" + Z + " florins");
    }
    Z = soldados[jogadorDaVezç] * 3;
    alert("Gastos militares: " + Z + " florins");
    caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - Z;
    if ((terra[jogadorDaVezç] / 1000) > soldados[jogadorDaVezç]) {
        invasao();
    }
    if ((terra[jogadorDaVezç] / 500) >= soldados[jogadorDaVezç]) {
        for (A = 1; A <= 4; A++) {
            if (soldados[A] > (soldados[jogadorDaVezç] * 2.4)) { invasao(); }
        }

    }
    temp = prompt("Aperte <ENTER> para continuar.");
}


function mapa() {
    //430 CLS: L2 = terra[jogadorDaVezç] / 1000
    //    431 LOCATE 14, 2: PRINT Cidade[jogadorDaVezç]
    //    432 LOCATE 25, 2: PRINT terra[jogadorDaVezç]; "hect."
    //    433 IF(soldados[jogadorDaVezç] - 5) < (terra[jogadorDaVezç] / 1000) THEN 444
    //    434 LOCATE 1, 6: PRINT" ÛÛÛÛÛÛÛ"
    //    435 LOCATE 1, 7: PRINT"  ÛËËËÛ"
    //    436 LOCATE 1, 8: PRINT"  ÛËËËÛ"
    //    437 LOCATE 1, 9: PRINT"  ÛËËËÛ"
    //    438 LOCATE 1, 10: PRINT" ÛÛÛUÛÛÛ"
    //    439 IF(soldados[jogadorDaVezç] / 2) < (terra[jogadorDaVezç] / 1000) THEN 447
    //    440 LOCATE 1, 4: PRINT" Â Â Â Â"
    //    441 LOCATE 1, 5: PRINT" ÛÛÛÛÛÛÛ"
    //   442 LOCATE 1, 6: PRINT"  ÛÛÛÛÛ "
    //   443 LOCATE 1, 7: PRINT"  ÛËËËÛ"
    //   444 LOCATE 1, 8: PRINT"  ÛËËËÛ"
    //   445 LOCATE 1, 9: PRINT" ÛÛÛÛÛÛÛ"
    //   446 LOCATE 1, 10: PRINT" ÛÛÛUÛÛÛ"
    //   447 Z = catedrais[jogadorDaVezç]
    //   448 IF Z = 0 THEN 464
    //   449 IF Z > 7 THEN Z = 7
    //   450 IF Z = 1 THEN 463
    //   451 IF Z = 2 THEN 462
    //  452 IF Z = 3 THEN 461
    //  453 IF Z = 4 THEN 460
    //  454 IF Z = 5 THEN 459
    //  455 IF Z = 6 THEN 458
    //  456 IF Z = 7 THEN 457
    //  457 LOCATE 26, 14: PRINT"ÎÎUÎÎ"
    //  458 LOCATE 26, 15: PRINT"ÛÅÅÅÛ"
    //  459 LOCATE 26, 16: PRINT"Ý×××Ê"
    //    460 LOCATE 26, 17: PRINT"Ý×××Ê"
    //    461 LOCATE 26, 18: PRINT"Ý×××Ê"
    //    462 LOCATE 26, 19: PRINT"Ý×××Ê"
    //    463 LOCATE 26, 20: PRINT"ÛÛÀÛÛ"
    //    464 Z = palacios[jogadorDaVezç]
    //    465 IF Z = 0 THEN 480
    //    466 IF Z = 1 THEN 479
    //    467 IF Z = 2 THEN 478
    //   468 IF Z = 3 THEN 477
    //  469 IF Z = 4 THEN 476
    // 470 IF Z = 5 THEN 475
    //  471 IF Z = 6 THEN 474
    //   472 IF Z = 7 THEN Z = 7
    //   473 LOCATE 20, 14: PRINT" ÎÎÎ "
    //   474 LOCATE 20, 15: PRINT"ÎÅÅÅÎ"
    //   475 LOCATE 20, 16: PRINT"ÝÌÌÌÊ"
    //   476 LOCATE 20, 17: PRINT"ÝÌÌÌÊ"
    //   477 LOCATE 20, 18: PRINT"ÝÌÌÌÊ"
    //   478 LOCATE 20, 19: PRINT"ÝÌÌÌÊ"
    //   479 LOCATE 20, 20: PRINT"ÛÛUÛÛ": GOTO 481
    //   480 LOCATE 20, 20: PRINT"©ÍÍÍª"
    Z = Math.trunc((mercados[jogadorDaVezç] + palacios[jogadorDaVezç] + catedrais[jogadorDaVezç] + moinhos[jogadorDaVezç] + caixa[jogadorDaVezç] / 1000 + terra[jogadorDaVezç] / 1000 + reserva[jogadorDaVezç] / 10000 + servos[jogadorDaVezç] / 1000 / 2));
    if (Z < 10) { Z = 10; }
    if (Z > 35) { Z = 35; }
    XX = 35;
    YY = Math.trunc((54 - Z) / 2);
    //  482 LOCATE XX, YY: PRINT"©Åª"
    //  483 LOCATE XX, YY - 1: PRINT" O "
    //  484 LOCATE XX, YY - 2: PRINT" Î "
    //  485 Z = mercados[jogadorDaVezç]
    //  486 IF Z = 0 THEN 492
    //  487 LOCATE 8, 17: PRINT"ÎÎMÎÎ"
    //  488 LOCATE 8, 18: PRINT"ÛßßßÛ"
    //  489 LOCATE 8, 19: PRINT"ÝÌÌÌÊ"
    //  490 LOCATE 8, 20: PRINT"ÛÛ×ÛÛ"
    //  491 LOCATE  9, 19: PRINT Z
    //  492 Z = moinhos[jogadorDaVezç]
    //    493 IF Z = 0 THEN 501
    //   494 LOCATE 14, 15: PRINT"ÎÎÎÎÎ"
    //   495 LOCATE 14, 16: PRINT"ÛÛÛÛÛ"
    // 496 LOCATE 14, 17: PRINT"Ý\\\Ê"
    // 497 LOCATE 14, 18: PRINT"Ý\\\Ê"
    //    498 LOCATE 14, 19: PRINT"Ý\À\Ê"
    //   499 LOCATE 14, 20: PRINT"ÛÛUÛÛ"
    //    500 LOCATE 15, 18: PRINT Z
    //    501 LOCATE 1, 3: PRINT"ANO"; anoCorrente[5)
    //    502 LOCATE 3, 24: PRINT "  Qualquer tecla p/continuar "
    //    503 GOSUB 708
    //    504 RETURN
}


function investimentosEstado() {
    if (caixa[jogadorDaVezç] < -30000) { } //THEN 660 ****************** VERIFICAR
    I=-1;
    while (I < 0 || I > 7) {
        I = prompt(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç] + "\n INVESTIMENTOS DO ESTADO: \n 1. mercados (1000 florins,cada) \n 2. moinhos (2000 florins,cada)\n 3. palacios (parte - 3000 florins)\n 4. catedrais (parte - 5000 florins) \n 5. Gastos militares (formação de um pelotão - 500 florins)\n DISPONIBILIDADE CAIXA:" + Math.trunc(caixa[jogadorDaVezç]) + " florins\n Que Investimento fara? (ou aperte <6> para ver o comparativo dos jogadores ou <7> p/mapear ou <0> para continuar");
    }
    if (I == 7) { mapa(); }
    if (I == 6) { inventarioJogadores(); }

    if (I == 2) {
        temp = prompt("Quantos moinhos deseja comprar: ");
        moinhos[jogadorDaVezç] = moinhos[jogadorDaVezç] + temp;
        caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - temp * 2000;
        if (caixa[jogadorDaVezç] < -30000) { falencia(); }
        scorePlayer[jogadorDaVezç] = scorePlayer[jogadorDaVezç] + temp * .25;
    }
    if (I == 1) {
        temp = prompt("Quantos mercados deseja comprar: ");
        mercados[jogadorDaVezç] = mercados[jogadorDaVezç] + temp;
        if (caixa[jogadorDaVezç] < -30000) { falencia(); }
        comerciantes[jogadorDaVezç] = comerciantes[jogadorDaVezç] + 2;
        caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - temp * 1000;
        scorePlayer[jogadorDaVezç] = scorePlayer[jogadorDaVezç] + temp * .1;
    }
    if (I == 3) {
        temp = prompt("Quantas partes de palácios deseja comprar: ");
        palacios[jogadorDaVezç] = palacios[jogadorDaVezç] + temp;
        caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - temp * 3000;
        if (caixa[jogadorDaVezç] < -30000) { falencia(); }
        nobres[jogadorDaVezç] = Math.trunc(nobres[jogadorDaVezç] + aleatorio() * temp * 2);
        scorePlayer[jogadorDaVezç] = scorePlayer[jogadorDaVezç] + temp * .5;
    }

    if (I == 4) {
        temp = prompt("Quantas partes de catedral deseja comprar: ");
        caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - temp * 5000;
        if (caixa[jogadorDaVezç] < -30000) { falencia(); }
        bispos[jogadorDaVezç] = Math.trunc(bispos[jogadorDaVezç] + aleatorio() * 6 * temp);
        catedrais[jogadorDaVezç] = catedrais[jogadorDaVezç] + temp;
        scorePlayer[jogadorDaVezç] = scorePlayer[jogadorDaVezç] + temp;
    }

    if (I == 5) {
        soldados[jogadorDaVezç] = soldados[jogadorDaVezç] + 20;
        servos[jogadorDaVezç] = servos[jogadorDaVezç] - 20;
        caixa[jogadorDaVezç] = caixa[jogadorDaVezç] - 500;
    }
}


function mostraConvencoes() { //TRANSFERIDO
    alert("CONVENÇÕES: \n NOB............Nobres\n SOL............Soldados \n CLE............Clero\nCOM............Comerciantes\nSER............Servos\nCAIXA..........Dinheiro");
    Z$ = prompt("Digite <ENTER> p/voltar");

}

function verificarPromocao() {
    Z = 0;
    A = mercados[jogadorDaVezç];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = palacios[jogadorDaVezç];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = catedrais[jogadorDaVezç];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = moinhos[jogadorDaVezç];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = caixa[jogadorDaVezç] / 5000;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = (terra[jogadorDaVezç] - 5000) / 4000;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = comerciantes[jogadorDaVezç] / 50;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = nobres[jogadorDaVezç] / 5;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = soldados[jogadorDaVezç] / 50;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = bispos[jogadorDaVezç] / 10;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = servos[jogadorDaVezç] / 2000;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = scorePlayer[jogadorDaVezç] / 5;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = Math.trunc(Z / nivelDoJogo - formaJustica[jogadorDaVezç] + 1);
    if (A > 8) { A = 8; }

    if ((anoCorrente[5] + 2) != limitedeVida[jogadorDaVezç]) {
        if (posicialSocial[jogadorDaVezç] < A) {
            posicialSocial[jogadorDaVezç] = A
        }
        else {
            posicialSocial[jogadorDaVezç] = posicialSocial[jogadorDaVezç] + 1;
        }

        if (posicialSocial[jogadorDaVezç] == 8) { gameOver(); }

        alert("CONGRATULAÇÕES \n" + nomeComCidade[jogadorDaVezç] + "\n Você agora é " + Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç] + nome[jogadorDaVezç] + " de " + Cidade[jogadorDaVezç]);

    }

}

function gameOver() {
    alert("GAME OVER\n" + Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç] + "Você VENCEU!");
    mapa();
    inventarioJogadores(); //637 GOSUB 136
    inicioJogo();
}


function pestes() {
    PEST = Math.trunc(aleatorio() * 100);
    if (PEST = Math.trunc((aleatorio() * 1000) / 10)) {

        PP = Math.trunc(aleatorio() * 70);
        NN = Math.trunc(nobres[jogadorDaVezç] * PP / 100) + 1;
        nobres[jogadorDaVezç] = nobres[jogadorDaVezç] - NN;
        CC = Math.trunc(bispos[jogadorDaVezç] * PP / 100) + 2;
        bispos[jogadorDaVezç] = bispos[jogadorDaVezç] - CC;
        MM = Math.trunc(comerciantes[jogadorDaVezç] * PP / 100) + 2;
        comerciantes[jogadorDaVezç] = comerciantes[jogadorDaVezç] - MM;
        SS = Math.trunc(servos[jogadorDaVezç] * PP / 100) + 2;
        servos[jogadorDaVezç] = servos[jogadorDaVezç] - SS;
        alert("NOTÍCIAS CATASTRÓFICAS \n A peste negra varreu sua cidade vitimando: \n" + NN + " nobres +\n" + CC + " bispos e padres +\n" + MM + "  comerciantes +\n" + SS + " servos.");
    }
}

function falencia() {
    alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç] + "\n **** FALIU ****");
    if (caixa[jogadorDaVezç] <= (-50000 * posicialSocial[jogadorDaVezç] / 3)) { confiscoDeBens(); }
    else {
        alert(" Os Bancos tomaram seus bens");
        mercados[jogadorDaVezç] = Math.trunc(mercados[jogadorDaVezç] * (Math.trunc(aleatorio() * 10) / 10));
        palacios[jogadorDaVezç] = Math.trunc(palacios[jogadorDaVezç] * (Math.trunc(aleatorio() * 10) / 10));
        catedrais[jogadorDaVezç] = Math.trunc(catedrais[jogadorDaVezç] * (Math.trunc(aleatorio() * 10) / 10));
        moinhos[jogadorDaVezç] = Math.trunc(moinhos[jogadorDaVezç] * (Math.trunc(aleatorio() * 10) / 10));
        terra[jogadorDaVezç] = Math.trunc(terra[jogadorDaVezç] * (Math.trunc(aleatorio() * 10) / 10));
        scorePlayer[jogadorDaVezç] = 1;
        caixa[jogadorDaVezç] = 100;
        comerciantes[jogadorDaVezç] = Math.trunc(comerciantes[jogadorDaVezç] * Math.trunc(aleatorio() * 7) / 10);
        reserva[jogadorDaVezç] = reserva[jogadorDaVezç] - 5000;
        if (terra[jogadorDaVezç] < 5000) { terra[jogadorDaVezç] = 5000; }
    }
}

function invasao() {
    Z = 5;
    for (A = 1; A <= numeroJogadores; numeroJogadores++) {
        // perguntas inúteis IF soldados[A] < soldados[jogadorDaVezç] THEN 684
        // perguntas inúteis682 IF soldados[A] < (1.2 * (terra[A] / 1000)) THEN 684
        if (soldados[A] > soldados[Z]) { Z = A; }
    }

    if (Z == 5) {
        Cidade[5] = "BARÃO ";
        nomeComCidade[5] = "MALONE DE VINCENZA";
        A1 = Math.trunc(aleatorio() * 9000 + 1000);

        // linha jamais usada --> 689 A1 = soldados[Z) * 1000 - terra[Z) / 3
    }
    if (A1 > (terra[jogadorDaVezç] - 5000)) {
        A1 = (terra[jogadorDaVezç] - 5000) / 2;
        temp = prompt("Digite <ENTER> p/continuar.");
    }
    if (numeroJogadores != 1) {
        alert(Titulo[posicialSocial[Z]] + sexo0H8[Z] + nomeComCidade[Z] + "\n invadiu e anexou " + A1 + "hectares de suas terras.");
    } else {
        alert(Titulo[Z] + nomeComCidade[Z] + " invadiu e anexou " + A1 + " hectares de suas terras.");
    }

    terra[Z] = terra[Z] + A1;
    terra[jogadorDaVezç] = terra[jogadorDaVezç] - A1;
    Z = Math.trunc(aleatorio() * 40);
    if (Z > (soldados[jogadorDaVezç] - 15)) {
        Z = soldados[jogadorDaVezç] - 15;
    }
    alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç] + " perdeu " + Z + " soldados em batalha");
    soldados[jogadorDaVezç] = soldados[jogadorDaVezç] - Z;
    Z$ = prompt("Aperte <ENTER>");
}

function gameOverSemVencedores() {
    alert("**** GAME OVER ****");
    F$ = prompt("Quer jogar novamente (S/N)");
    if (F$ == "S" || F$ == "s") { inicioJogo(); } else { desligarJogo() };
}

function confiscoDeBens() {
    alert("Os Bancos confiscaram seus bens...");
    if (caixa[jogadorDaVezç] <= -20000 && caixa[jogadorDaVezç] > -35000) {
        tempoCondenacao[jogadorDaVezç] = tempoCondenacao[jogadorDaVezç] + 1;
    }
    if (caixa[jogadorDaVezç] <= -35000 && caixa[jogadorDaVezç] > -50000) {

        tempoCondenacao[jogadorDaVezç] = tempoCondenacao[jogadorDaVezç] + Math.trunc(aleatorio() * 4);
        if (tempoCondenacao[jogadorDaVezç] = 0) { tempoCondenacao[jogadorDaVezç] = 1; }
    }
    if (caixa[jogadorDaVezç] <= 50000) {
        tempoCondenacao[jogadorDaVezç] = tempoCondenacao[jogadorDaVezç] + Math.trunc(aleatorio() * 6);
        if (tempoCondenacao[jogadorDaVezç] < 2) { tempoCondenacao[jogadorDaVezç] = 3; }
    }
    G$ = "o";
    if (sexo0H8[jogadorDaVezç] = 8) { G$ = "a"; }

    alert(Titulo[posicialSocial[jogadorDaVezç]] + sexo0H8[jogadorDaVezç] + nomeComCidade[jogadorDaVezç] + " foi a julgamento acusad" + G$ + " de fraude \n Desta forma foi condenad" + G$ + " a " + tempoCondenacao[jogadorDaVezç] + " anos de prisão");

    if (numeroJogadores == 1) {
        anoCorrente[5] = anoCorrente[5] + tempoCondenacao[jogadorDaVezç];
    }
    if (numeroJogadores > 1) {
        variavelNaoDescoberta[jogadorDaVezç] = 1;
    }
    mercados[jogadorDaVezç] = 0;
    palaciosç[jogadorDaVezç] = 0;
    catedrais[jogadorDaVezç] = 0;
    moinhos[jogadorDaVezç] = 0;
    terra[jogadorDaVezç] = 4000;
    scorePlayer[jogadorDaVezç] = 1;
    caixa[jogadorDaVezç] = 0;
    comerciantes[jogadorDaVezç] = Math.trunc(comerciantes[jogadorDaVezç] / 4);
    reserva[jogadorDaVezç] = 5000;
    // ?
}


function desligarJogo() {
    alert("Fim de Jogo");
}

function aleatorio() { //********************************** TRANSFERIDA
    return Math.random();
}

function proximoJogador(){
    ///IMPLEMENTAR
}