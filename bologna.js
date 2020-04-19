alert("BOLOGNA & MILANO");
alert("Bologna & Milano ‚ um jogo espetacular!");
alert("Que vai testar sua capacidade p/administrar uma cidade, um estado ou uma nação.");


//7, 21, 30, 11, 19, 59






var markets = Array(8); // mercados
var palaces = Array(8); // palacios
var cathedrals = Array(8);
var woolenMills = Array(8);
var customTaxRate = Array(8);
var salesTaxRate = Array(8);
var wealthTaxRate = Array(8);
var justiceLevel = Array(8);
var treasury = Array(8);
var land = Array(8);
var merchants = Array(8);
var nobles = Array(8);
var yearOfDeath = Array(8);
var soldiers = Array(8);
var clergy = Array(8);
var grainReserve = Array(8);
var serfs = Array(8);
var socialPosition = Array(8);  //se -1 jogador morto
var economicValue = Array(8);
var sex = Array(8);
var currentYear = Array(8);
var tempoCondenacao = Array(8);
var variavelNaoDescoberta = Array(8);
var title = Array(16);
var name = Array(8);
var city = Array(8);
var nomeWithCity=Array(7);
var currentPlayer = 0; //antiga variável E
var grainsForPopulation = 0;
var O = 0; // não encontrei uso para ela.
var weather = "";
var grainPrice = 0;
var landPrice = 0;
var grainProduction = 0;
var demand = 0;
var zAuxiliar = 0;
//melhorar nome das variáveis abaixo depois
var C1 = 0;
var S1 = 0;
var I1 = 0;
var J = 0;
var I = -1;
var numberOfPlayers = 0;
var R = 0;

currentYear[7] = 1400;
city[1] = "GÊNOVA";
city[2] = "MILANO";
city[3] = "VENEZA";
city[4] = "TORINO";
title[1] = "SENHOR ";
title[2] = "BARÃO ";
title[3] = "CONDE ";
title[4] = "MARQUÊS ";
title[5] = "DUQUE ";
title[6] = "GRÃO-DUQUE ";
title[7] = "PRÍNCIPE ";
title[8] = "* REI * ";
title[9] = "DAMA ";
title[10] = "BARONESA ";
title[11] = "CONDESSA ";
title[12] = "MARQUESA ";
title[13] = "DUQUESA ";
title[14] = "GRÃO-DUQUESA ";
title[15] = "PRINCESA ";
title[16] = "* RAINHA * ";
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



function inicioJogo() { //INITIALIZE and INPUT/********************************** TRANSFERIDA
    //variáveisGlobais
    O = 0; // não encontrei uso para ela.
    weather = "";
    grainPrice = 0;
    landPrice = 0;
    grainProduction = 0;
    demand = 0;
    zAuxiliar = 0;
    //melhorar nome das variáveis abaixo depois
    C1 = 0;
    S1 = 0;
    I1 = 0;
    J = 0;
    numberOfPlayers = 0;

    while (numberOfPlayers < 1 || numberOfPlayers > 6) {
        numberOfPlayers = prompt("Quantas pessoas (1 a 6) vão participar");
    }

    for (var A = 1; A <= numberOfPlayers; A++) {
        //70 CLS: BEEP
        name[A] = prompt("Quem é o governante de " + city[A] + " ?");
        //72 CLS
        nomeWithCity[A] = name[A] + " de " + city[A];
        F = prompt(nomeWithCity[A] + " é homem(H) ou mulher(M): ");
        if (F == "H" || F == "h") { sex[A] = 8; } else { sex[A] = 0 };
        customTaxRate[A] = 25;
        salesTaxRate[A] = 10;
        wealthTaxRate[A] = 5;
        justiceLevel[A] = 2;
        Z = Math.trunc(aleatorio() * 15);
        yearOfDeath[A] = 1420 + Z;
        console.log("Limite:" + sex[A]);
        treasury[A] = 1000;
        land[A] = 10000;
        grainReserve[A] = 5000;
        socialPosition[A] = 1;
        economicValue[A] = 1;
        nobles[A] = 4;
        soldiers[A] = 25;
        clergy[A] = 5;
        merchants[A] = 25;
        serfs[A] = 2000;
        markets[A] = 0;
        woolenMills[A] = 0;
        palaces[A] = 0;
        cathedrals[A] = 0;
    }

    F$ = prompt("Deseja ler as instruções (S/N) ");
    if (F$ == "s" || F$ == "S") {
        alert("INSTRUÇÕES \n A partir de agora  você será o governante de uma cidade-estado do século  XV.\n A cada período de bom governo você receberá títulos cada vez maiores. \n A expectativa de vida naquela época era muito curta, logo você disporá de pouco tempo para governar. \n Quem primeiro chegar a REI ou RAINHA será o vencedor do jogo. \n O tamanho da torre no canto superior esquerdo indicará se suas defesas são adequadas. \n O boneco em posição alta significa terras em franca produção, caso contrário você precisará de mais servos. \n Uma boa distribuição de grãos à população, aumentará a taxa de natalidade e incentivará a migração de novos servos. \n Taxas e impostos elevados aumentam a arrecadação mas afetam a economia da nação. \n Faça um governo democrático e lembre-se que é sempre bom comprar na baixa para vender na alta.\n BOA  SORTE !");
    }
    nivelDoJogo = 0;
    while (nivelDoJogo < 1 || nivelDoJogo > 4) {
        nivelDoJogo = prompt("NÍVEIS DO JOGO: \n 1. Aprendiz \n 2. Aventureiro \n 3. Mestre \n 4. Grande mestre\n \n Em que nível deseja jogar: ");
    }
    nivelDoJogo = nivelDoJogo + 5;
    

}

function proximoJogador() {
    ///IMPLEMENTAR
    currentPlayer = currentPlayer + 1;
    if (currentPlayer > numberOfPlayers) {
        currentYear[7] = currentYear[7] + 1;
        currentPlayer = 1;
    }
    else {
        if (currentYear[7] >= yearOfDeath[currentPlayer]) {
            noticiasDesagradaveis();
        }

    }

    if (variavelNaoDescoberta[currentPlayer] != 1) {
        if (socialPosition[currentPlayer] == -1) {
            currentPlayer++;
        }
        else {
            tempoCondenacao[currentPlayer] = tempoCondenacao[currentPlayer] - 1;
        }
    }

    if (tempoCondenacao[currentPlayer] == -1) {
        if (socialPosition[currentPlayer] == -1) {
            currentPlayer = currentPlayer + 1;
        }
        else {
            tempoCondenacao[currentPlayer] = tempoCondenacao[currentPlayer] - 1;
        }
    }

    if (socialPosition[1] < 1 && socialPosition[2] < 1 && socialPosition[3] < 1 && socialPosition[4] < 1) { gameOver() }

    if (currentYear[7] >= yearOfDeath[currentPlayer]) { noticiasDesagradaveis() }; //126

}


function inventarioJogadores() { //TRANSFERIDO
    alert("NOB  SOL  CLE  COM  SERV  TERRA  CAIXA");
    for (A = 1; A <= numberOfPlayers; A++) {
        texto = city[A] + " / " + Math.trunc(nobles[A]) + " / " + Math.trunc(soldiers[A]) + " / " + Math.trunc(clergy[A]) + " / " + Math.trunc(merchants[A]) + " / " + Math.trunc(serfs[A]) + " / " + Math.trunc(land[A]) + " / " + Math.trunc(treasury[A]);
    }
    Z$ = "";
    while (Z$ != "C" && Z$ != "c" && Z$ != "0") {
        Z$ = prompt("Digite <C> para convenções ou <0> para continuar");
    }
    if (Z$ == "c" || Z$ == "C") {
        mostraConvencoes();
    }
}

function noticiasDesagradaveis() { //OBITUARY
    alert("### NOTÍCIAS DESAGRADÁVEIS ### \n" + nomeWithCity[currentPlayer] + " acaba de falecer.");
    socialPosition[currentPlayer] = -1;
    var Y = 0;
    Y = Math.trunc(aleatorio() * 8);
    if (currentYear[7] <= 1430) {
        switch (Y) {
            case 0:
            case 1:
            case 2:
            case 3:

                alert("...de pneumonia depois de um inverno frio em um castelo gelado.");
                break;
            case 4:
                alert("...de frebe tifóide após beber água contaminada.");
                break;
            case 5:
                alert("...numa epidemia de varíola.");
                break;
            case 6:
                alert("... devido a ataque de ladrões durante uma viagem.");
                break;

            case 7:
            case 8:
                alert("...devido a envenenamento alimentar");
                break;
        }
    }
    else {
        alert("Devido à velhice após longo governo.");
    }
    mapa();
    inventarioJogadores();
}



function servosNasceram(A) { //Verificar o que é e de onde vem o A linha 171
    Z = (aleatorio() * A) * serfs[currentPlayer] / 100;
    Z2 = Math.trunc(Z);
    alert(Z2 + " servos nasceram este ano.");
    serfs[currentPlayer] = serfs[currentPlayer] + Z2;
}

function servosMorreram(A) {//Verificar o que é e de onde vem o A linha 176
    Z = (aleatorio() * A) * serfs[currentPlayer] / 100;
    Z2 = Math.trunc(Z);
    alert(Z2 + " servos morreram este ano.");
    serfs[currentPlayer] = serfs[currentPlayer] - Z2;
}


function colheita() {
    var DD = 0;
    var Y = 0;
    var W = 0;
    while (W < 1 || W > 5) {
        W = Math.trunc((Math.trunc(aleatorio() * 5) + Math.trunc(aleatorio() * 6)) / 2) + 1;
    }

    switch (W) {
        case 1:
            weather = "Estiagem - Ameaça de fome!!";
            alert(weather);
            break;
        case 2:
            weather = "Tempo ruim - Colheita pobre.";
            alert(weather);
            break;
        case 3:
            weather = "Tempo normal - Colheita razoável.";
            alert(weather);
            break;
        case 4:
            weather = "Tempo bom - Colheita boa.";
            alert(weather);
            break;
        case 5:
            weather = "Tempo ótimo - Colheita excelente!!";
            alert(weather);
            break;
    }

    R = Math.trunc(aleatorio() * 50);
    if (R == 0) { R = 1; }
    grainReserve[currentPlayer] = (grainReserve[currentPlayer] * 100 - grainReserve[currentPlayer] * R) / 100;
    var X = 0;
    X = Math.trunc(serfs[currentPlayer] - woolenMills[currentPlayer] * 100);
    if (X < 0) { X = 1; }
    Y = W - .5
    DD = W * (serfs[currentPlayer] - X);
    if (DD == 0) { DD = 1; }

    console.log(Y);
    console.log(land[currentPlayer]);
    console.log(X);
    console.log(serfs[currentPlayer]);
    console.log(DD);

    grainProduction = Math.trunc(Y * land[currentPlayer] / 1.5 + Y * X + (aleatorio() * serfs[currentPlayer]) - DD);
    console.log(grainProduction);
    grainReserve[currentPlayer] = Math.trunc(grainReserve[currentPlayer] + grainProduction);
    demand = nobles[currentPlayer] * 100 + cathedrals[currentPlayer] * 40 + merchants[currentPlayer] * 30 + soldiers[currentPlayer] * 10 + serfs[currentPlayer] * 5;
    landPrice = Math.trunc((100 * W + Math.trunc(aleatorio() * 9) + Math.trunc(aleatorio() * 9)) / 10);
    landPrice = (currentYear[7] - 1400 + landPrice) / 10;
    Z = 6 - W;
    grainPrice = Math.trunc((Math.trunc(aleatorio() * 5) + Math.trunc(aleatorio() * 5) + Z * 10) / (5 + 2 * Y) * 30);
}


function ratosComeram() {
    alert("Os ratos comeram" + R + " % da reserva de grãos dos silos de armazenagem \n" + weather + "\n Produção de grãos: " + grainProduction + " sacas.");
    mostraSituacaoAno();
}

function mostraSituacaoAno() {
    alert("RESERVA  DEMANDA  PREÇO  PREÇO  CAIXA\n grãos    grãos    grãos  Terra \n" + Math.trunc(grainReserve[currentPlayer]) + " " + Math.trunc(demand) + " " + Math.trunc(grainPrice) + " " + landPrice + " " + Math.trunc(treasury[currentPlayer]) + " \n sacas    sacas  mil/sc  hect. florins");
}



function rendaDoEstado() { //221
    J = (justiceLevel[currentPlayer] * 300 - 500) * socialPosition[currentPlayer];
    switch (justiceLevel[currentPlayer]) {
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
    var Y = 150 - customTaxRate[currentPlayer] - salesTaxRate[currentPlayer] - wealthTaxRate[currentPlayer];
    if (Y < 1) { Y = 1; }
    C1 = (nobles[currentPlayer] * 90 + clergy[currentPlayer] * 35 + merchants[currentPlayer] * 10) * (Y / 100) + economicValue[currentPlayer] * 20;
    S1 = (nobles[currentPlayer] * 50 + merchants[currentPlayer] * 75 + economicValue[currentPlayer] * 10) * (Y / 100) * (5 - justiceLevel[currentPlayer]) / 2;
    I1 = nobles[currentPlayer] * 250 + economicValue[currentPlayer] * 20 + (10 * justiceLevel[currentPlayer] * nobles[currentPlayer]) * (Y / 100);
    C1 = Math.trunc(5 * C1 * customTaxRate[currentPlayer] / 100);
    S1 = Math.trunc(25 * S1 * salesTaxRate[currentPlayer] / 100);
    I1 = Math.trunc(Math.abs(2 * I1 * wealthTaxRate[currentPlayer] / 100));
    alert("RENDA DO ESTADO:" + J + C1 + S1 + I1 + " florins \n TAXAS DA  TAXAS S/  IMPOSTOS  JUSTI€A  ALFANDEGA  VENDAS  DIVERSOS  (forma) \n" + customTaxRate[currentPlayer] + "% " + salesTaxRate[currentPlayer] + "% " + wealthTaxRate[currentPlayer] + "% " + J$ + "\n" + C1 + " " + S1 + " " + I1 + " " + J + "\n florins  florins    florins    florins");
}

//OPÇÕES ECONÔMICAS - 245
function opcoesEconomicas() {
    //console.log(sex[currentPlayer]);
    //console.log(title[sexo0H8])
    //alert(title[sex[currentPlayer]] + socialPosition[currentPlayer] + nomeWithCity[currentPlayer]);
    alert(title[sex[currentPlayer] + socialPosition[currentPlayer]] + nomeWithCity[currentPlayer]);
    ratosComeram(); //213
    Z$ = "";
    while (Z$ < 0 || Z$ > 4) {
        Z$ = prompt("OPÇÕES ECONÔMICAS \n 1. Comprar grãos \n 2. Vender grãos\n 3. Comprar terras \n4. Vender terras \n Área da nação ==>" + Math.trunc(land[currentPlayer]) + "Hect. \n  Digite <0> p/continuar");
    }
    switch (Z$) {

        case 1:
            I1 = prompt("Quanto grão vai comprar? ");
            treasury[currentPlayer] = treasury[currentPlayer] - (I1 * G / 1000);
            grainReserve[currentPlayer] = grainReserve[currentPlayer] + I1;
            alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer]);
            mostraSituacaoAno();
            break;

        case 2:
            I1 = prompt("Quanto grão vai vender");
            if (I1 <= grainReserve[currentPlayer]) {
                treasury[currentPlayer] = treasury[currentPlayer] + (I1 * G / 1000); //G é o preço do grão, verificar de onde vem essa informação
                grainReserve[currentPlayer] = grainReserve[currentPlayer] - I1;
                alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer]);
                mostraSituacaoAno();
            }
            else {
                alert("Não há tanto grão disponível ...");
            }


            break;

        case 3:
            I1 = prompt("Quantos hect. vai comprar");
            land[currentPlayer] = land[currentPlayer] + I1;
            treasury[currentPlayer] = treasury[currentPlayer] - (I1 * L); //L é o preço da terra, verificar de onde vem essa informação
            alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer]);
            mostraSituacaoAno();
            break;

        case 4:
            ok = false;
            while (ok == false) {
                I1 = prompt("Quantos hect. vai vender?");
                if (I1 <= (land[currentPlayer] - 5000)) {
                    land[currentPlayer] = land[currentPlayer] - I1;
                    treasury[currentPlayer] = treasury[currentPlayer] + (I1 * L);
                    alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer]);
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
        Z$ = prompt(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer] + textoRenda + "\nOPÇÕES FINANCEIRAS\n 1. Taxas alfandegárias \n 2. Taxas sobre vendas\n 3. Impostos diversos\n 4. Taxas judiciárias \n Digite (0) p/continuar");
        I = Z$;
        switch (I) {
            case 1: //301 a 304
                txAlfandegaria = -1;
                while (txAlfandegaria < 0 || txAlfandegaria > 100) {
                    txAlfandegaria = prompt("Nova taxa alfandegária (0 A 100%)");
                }
                customTaxRate[currentPlayer] = txAlfandegaria;
                break;
            case 2: //306 a 309
                txVendas = -1;
                while (txVendas < 0 || txVendas > 50) {
                    txVendas = prompt("Nova taxa sobre vendas (0 A 50%)");
                }
                salesTaxRate[currentPlayer] = txVendas;
                break;
            case 3:
                impDiversos = -1;
                while (impDiversos < 0 || impDiversos > 25) {
                    impDiversos = prompt("Nova taxa para impostos diversos (0 A 25%)");
                }
                wealthTaxRate[currentPlayer] = impDiversos;
                break;
            case 4:
                fJustica = -1;
                while (fJustica < 1 || fJustica > 4) {
                    fJustica = prompt("JUSTIÇA ==> 1. Justa / 2. Moderada / 3. Ríspida / 4. Abusiva");
                }
                justiceLevel[currentPlayer] = fJustica;
                break;
            default:
                alert("Opção inválida!!");
        }
    }
}

function situacaoFiscal() { //deve ser acionado após opcoesFinanceiras
    treasury[currentPlayer] = treasury[currentPlayer] + C1 + S1 + I1 + J;
    if (treasury[currentPlayer] < 0) {
        JE = 0;
        while (JE < 20) {
            JE = Math.trunc(aleatorio() * 50);
        }
        alert("Os Bancos cobraram " + JE + "% de juros sobre sua dívida");
        JJ = 1 - JE / 100; // Original estava com 1+
        treasury[currentPlayer] = Math.trunc(treasury[currentPlayer] * JJ);
    }
    if (treasury[currentPlayer] < (-10000 * socialPosition[currentPlayer])) {
        falencia();
    }
}






function fornecerGrao() {
    ok = false;
    while (ok = false) {
        grainsForPopulation = prompt("Você tem um total de " + grainReserve[currentPlayer] + " de grãos e deverá fornecer entre " + Math.trunc(grainReserve[currentPlayer] * .2 - 1) + " e " + Math.trunc(grainReserve[currentPlayer] * .8 - 1));

        if (grainsForPopulation >= grainReserve[currentPlayer] * .2 && grainsForPopulation <= grainReserve[currentPlayer] * .8) {
            ok = true;
        }
        else {
            alert("Você não respeitou os limites de fornecimento de grãos. Você deve fornecer no mínimo 20% e no máximo 80% da reserva de grãos para sua população");
            ok = false;
        }
    }
    grainReserve[currentPlayer] = grainReserve[currentPlayer] - grainsForPopulation;
}

function resultadosAdm() {
    alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer]);
    Z = grainsForPopulation / demand - 1;
    if (Z > 0) { Z = Z / 2; }
    if (Z > .25) { Z = Z / 10 + .25; }
    Z2 = 50 - customTaxRate[currentPlayer] - salesTaxRate[currentPlayer] - wealthTaxRate[currentPlayer];
    if (Z2 < 0) { Z2 = Z2 * justiceLevel[currentPlayer]; }
    Z2 = Z2 / 10;
    if (Z2 > 0) { Z2 = Z2 + 3 - justiceLevel[currentPlayer] };
    Z = Z + (Z2 / 10);
    if (Z > .5) { Z = .5; }
    if (grainsForPopulation < (demand - 1)) { }//THEN 388 ************************************* 
    A = 7;
    servosNasceram(A);//  352 GOSUB 171
    A = 3;
    servosMorreram(A); // 354 GOSUB 176

    if (customTaxRate[currentPlayer] + salesTaxRate[currentPlayer] < 35) {
        merchants[currentPlayer] = merchants[currentPlayer] + Math.trunc(aleatorio() * 8);
    }
    if (wealthTaxRate[currentPlayer] < Math.trunc(aleatorio() * 20)) { nobles[currentPlayer] = nobles[currentPlayer] + Math.trunc(aleatorio() * 4) - 1; }

    clergy[currentPlayer] = clergy[currentPlayer] + Math.trunc(aleatorio() * 3) - 1;
    if (grainsForPopulation >= (demand + demand * .3)) { //THEN 376
        Z2 = serfs[currentPlayer] / 1000;
        Z = (grainsForPopulation - demand) / demand * 10;
        Z = Z * Z2 * Math.trunc(aleatorio() * 25) + Math.trunc(aleatorio() * 40);
        if (Z > 32000) { Z = 32000; }
        Z2 = Z;
        Z = Math.trunc(aleatorio() * Z2);
        if (Z < 1) { Z = 2; }
        alert(Z + " servos mudaram para sua cidade");
        serfs[currentPlayer] = serfs[currentPlayer] + Z;
        economicValue[currentPlayer] = economicValue[currentPlayer] + .5;
        Z2 = Z / 5;
        Z = Math.trunc(aleatorio() * Z2);
        if (Z > 50) { Z = 50; }
        merchants[currentPlayer] = merchants[currentPlayer] + Z;
        nobles[currentPlayer] = nobles[currentPlayer] + 1;
        clergy[currentPlayer] = clergy[currentPlayer] + 2;
    }
    else { servosFugiram() };

}
function servosFugiram() {

    if (justiceLevel[currentPlayer] >= 3) { //THEN 387 //essa é a linha 376 do if acima
        J1 = serfs[currentPlayer] / 100 * (justiceLevel[currentPlayer] - 2) * (justiceLevel[currentPlayer] - 2);
        J1 = Math.trunc(aleatorio() * J1);
        if (J1 <= 1) { J1 = 2; }
        serfs[currentPlayer] = serfs[currentPlayer] - J1;
        alert(J1 + " servos fugiram em virtude de injustiças.");
        temp = prompt("Digite <ENTER> p/continuar");
    }
    //depois daqui tem que ir para 402
}


function verificacoesDiversas() { //388
    X = (demand - grainsForPopulation) / demand * 100 - 9;
    X2 = X;
    if (X <= 65) {
        if (X < 0) {
            X2 = 0;
            X = 0;
        }
    } else {
        X = 65;
        merchants[currentPlayer] = merchants[currentPlayer] / 2;
    }
    A = 3;
    servosNasceram(A);
    A = X2 + 8;
    servosMorreram(A);
    if (Z2 > 1000) {
        economicValue[currentPlayer] = economicValue[currentPlayer] / 2;
    }
    servosFugiram();
}

function rendimentoMercadoMoinhos() { //402

    HE = salesTaxRate[currentPlayer];
    if (salesTaxRate[currentPlayer] <= 5) {
        HE = Math.trunc(aleatorio() * 4 + 1);
    }
    Z = Math.trunc(markets[currentPlayer] * serfs[currentPlayer] * merchants[currentPlayer] / (1500 * Math.sqrt(HE)));
    if (Z >= markets[currentPlayer] * 1000) {
        Z = Math.trunc(markets[currentPlayer] * 300 * (1 + aleatorio() * 3));
    }
    treasury[currentPlayer] = treasury[currentPlayer] + Z;
    if (Z > 0) {
        alert("Seus mercados renderam " + Z + " florins");
    }
    if (woolenMills[currentPlayer] > 0) {
        TX = grainReserve[currentPlayer] / (woolenMills[currentPlayer] * 5000);
        if (TX > 1) { TX = 1; }
        Z = Math.trunc(woolenMills[currentPlayer] * TX * serfs[currentPlayer] / (3 * Math.sqrt(HE)));
        if (Z >= woolenMills[currentPlayer] * 2000) {
            Z = Math.trunc(woolenMills[currentPlayer] * 1000 * (1 + aleatorio() * 2));
        }
        grainReserve[currentPlayer] = grainReserve[currentPlayer] - TX * woolenMills[currentPlayer] * 5000;
        treasury[currentPlayer] = treasury[currentPlayer] + Z;
        alert("Seus moinhos renderam" + Z + " florins");
    }
    Z = soldiers[currentPlayer] * 3;
    alert("Gastos militares: " + Z + " florins");
    treasury[currentPlayer] = treasury[currentPlayer] - Z;
    if ((land[currentPlayer] / 1000) > soldiers[currentPlayer]) {
        invasao();
    }
    if ((land[currentPlayer] / 500) >= soldiers[currentPlayer]) {
        for (A = 1; A <= 4; A++) {
            if (soldiers[A] > (soldiers[currentPlayer] * 2.4)) { invasao(); }
        }

    }
    temp = prompt("Aperte <ENTER> para continuar.");
}


function mapa() {
    //430 CLS: L2 = land[currentPlayer] / 1000
    //    431 LOCATE 14, 2: PRINT city[currentPlayer]
    //    432 LOCATE 25, 2: PRINT land[currentPlayer]; "hect."
    //    433 IF(soldiers[currentPlayer] - 5) < (land[currentPlayer] / 1000) THEN 444
    //    434 LOCATE 1, 6: PRINT" ÛÛÛÛÛÛÛ"
    //    435 LOCATE 1, 7: PRINT"  ÛËËËÛ"
    //    436 LOCATE 1, 8: PRINT"  ÛËËËÛ"
    //    437 LOCATE 1, 9: PRINT"  ÛËËËÛ"
    //    438 LOCATE 1, 10: PRINT" ÛÛÛUÛÛÛ"
    //    439 IF(soldiers[currentPlayer] / 2) < (land[currentPlayer] / 1000) THEN 447
    //    440 LOCATE 1, 4: PRINT" Â Â Â Â"
    //    441 LOCATE 1, 5: PRINT" ÛÛÛÛÛÛÛ"
    //   442 LOCATE 1, 6: PRINT"  ÛÛÛÛÛ "
    //   443 LOCATE 1, 7: PRINT"  ÛËËËÛ"
    //   444 LOCATE 1, 8: PRINT"  ÛËËËÛ"
    //   445 LOCATE 1, 9: PRINT" ÛÛÛÛÛÛÛ"
    //   446 LOCATE 1, 10: PRINT" ÛÛÛUÛÛÛ"
    //   447 Z = cathedrals[currentPlayer]
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
    //    464 Z = palaces[currentPlayer]
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
    Z = Math.trunc((markets[currentPlayer] + palaces[currentPlayer] + cathedrals[currentPlayer] + woolenMills[currentPlayer] + treasury[currentPlayer] / 1000 + land[currentPlayer] / 1000 + grainReserve[currentPlayer] / 10000 + serfs[currentPlayer] / 1000 / 2));
    if (Z < 10) { Z = 10; }
    if (Z > 35) { Z = 35; }
    XX = 35;
    YY = Math.trunc((54 - Z) / 2);
    //  482 LOCATE XX, YY: PRINT"©Åª"
    //  483 LOCATE XX, YY - 1: PRINT" O "
    //  484 LOCATE XX, YY - 2: PRINT" Î "
    //  485 Z = markets[currentPlayer]
    //  486 IF Z = 0 THEN 492
    //  487 LOCATE 8, 17: PRINT"ÎÎMÎÎ"
    //  488 LOCATE 8, 18: PRINT"ÛßßßÛ"
    //  489 LOCATE 8, 19: PRINT"ÝÌÌÌÊ"
    //  490 LOCATE 8, 20: PRINT"ÛÛ×ÛÛ"
    //  491 LOCATE  9, 19: PRINT Z
    //  492 Z = woolenMills[currentPlayer]
    //    493 IF Z = 0 THEN 501
    //   494 LOCATE 14, 15: PRINT"ÎÎÎÎÎ"
    //   495 LOCATE 14, 16: PRINT"ÛÛÛÛÛ"
    // 496 LOCATE 14, 17: PRINT"Ý\\\Ê"
    // 497 LOCATE 14, 18: PRINT"Ý\\\Ê"
    //    498 LOCATE 14, 19: PRINT"Ý\À\Ê"
    //   499 LOCATE 14, 20: PRINT"ÛÛUÛÛ"
    //    500 LOCATE 15, 18: PRINT Z
    //    501 LOCATE 1, 3: PRINT"ANO"; currentYear[5)
    //    502 LOCATE 3, 24: PRINT "  Qualquer tecla p/continuar "
    //    503 GOSUB 708
    //    504 RETURN
}


function investimentosEstado() {
    if (treasury[currentPlayer] < -30000) { } //THEN 660 ****************** VERIFICAR
    I = -1;
    while (I < 0 || I > 7) {
        I = prompt(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer] + "\n INVESTIMENTOS DO ESTADO: \n 1. mercados (1000 florins,cada) \n 2. moinhos (2000 florins,cada)\n 3. palacios (parte - 3000 florins)\n 4. catedrais (parte - 5000 florins) \n 5. Gastos militares (formação de um pelotão - 500 florins)\n DISPONIBILIDADE CAIXA:" + Math.trunc(treasury[currentPlayer]) + " florins\n Que Investimento fara? (ou aperte <6> para ver o comparativo dos jogadores ou <7> p/mapear ou <0> para continuar");
    }
    if (I == 7) { mapa(); }
    if (I == 6) { inventarioJogadores(); }

    if (I == 2) {
        temp = prompt("Quantos moinhos deseja comprar: ");
        woolenMills[currentPlayer] = woolenMills[currentPlayer] + temp;
        treasury[currentPlayer] = treasury[currentPlayer] - temp * 2000;
        if (treasury[currentPlayer] < -30000) { falencia(); }
        economicValue[currentPlayer] = economicValue[currentPlayer] + temp * .25;
    }
    if (I == 1) {
        temp = prompt("Quantos mercados deseja comprar: ");
        markets[currentPlayer] = markets[currentPlayer] + temp;
        if (treasury[currentPlayer] < -30000) { falencia(); }
        merchants[currentPlayer] = merchants[currentPlayer] + 2;
        treasury[currentPlayer] = treasury[currentPlayer] - temp * 1000;
        economicValue[currentPlayer] = economicValue[currentPlayer] + temp * .1;
    }
    if (I == 3) {
        temp = prompt("Quantas partes de palácios deseja comprar: ");
        palaces[currentPlayer] = palaces[currentPlayer] + temp;
        treasury[currentPlayer] = treasury[currentPlayer] - temp * 3000;
        if (treasury[currentPlayer] < -30000) { falencia(); }
        nobles[currentPlayer] = Math.trunc(nobles[currentPlayer] + aleatorio() * temp * 2);
        economicValue[currentPlayer] = economicValue[currentPlayer] + temp * .5;
    }

    if (I == 4) {
        temp = prompt("Quantas partes de catedral deseja comprar: ");
        treasury[currentPlayer] = treasury[currentPlayer] - temp * 5000;
        if (treasury[currentPlayer] < -30000) { falencia(); }
        clergy[currentPlayer] = Math.trunc(clergy[currentPlayer] + aleatorio() * 6 * temp);
        cathedrals[currentPlayer] = cathedrals[currentPlayer] + temp;
        economicValue[currentPlayer] = economicValue[currentPlayer] + temp;
    }

    if (I == 5) {
        soldiers[currentPlayer] = soldiers[currentPlayer] + 20;
        serfs[currentPlayer] = serfs[currentPlayer] - 20;
        treasury[currentPlayer] = treasury[currentPlayer] - 500;
    }
}


function mostraConvencoes() { //TRANSFERIDO
    alert("CONVENÇÕES: \n NOB............Nobres\n SOL............Soldados \n CLE............Clero\nCOM............Comerciantes\nSER............Servos\nCAIXA..........Dinheiro");
    Z$ = prompt("Digite <ENTER> p/voltar");

}

function verificarPromocao() {
    Z = 0;
    A = markets[currentPlayer];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = palaces[currentPlayer];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = cathedrals[currentPlayer];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = woolenMills[currentPlayer];
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = treasury[currentPlayer] / 5000;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = (land[currentPlayer] - 5000) / 4000;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = merchants[currentPlayer] / 50;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = nobles[currentPlayer] / 5;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = soldiers[currentPlayer] / 50;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = clergy[currentPlayer] / 10;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = serfs[currentPlayer] / 2000;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = economicValue[currentPlayer] / 5;
    if (A > 10) { A = 10; }
    Z = Z + A;
    A = Math.trunc(Z / nivelDoJogo - justiceLevel[currentPlayer] + 1);
    if (A > 8) { A = 8; }

    if ((currentYear[7] + 2) != yearOfDeath[currentPlayer]) {
        if (socialPosition[currentPlayer] < A) {
            socialPosition[currentPlayer] = A
        }
        else {
            socialPosition[currentPlayer] = socialPosition[currentPlayer] + 1;
        }

        if (socialPosition[currentPlayer] == 8) { gameOver(); }

        alert("CONGRATULAÇÕES \n" + nomeWithCity[currentPlayer] + "\n Você agora é " + title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer] + name[currentPlayer] + " de " + city[currentPlayer]);

    }

}

function gameOver() {
    alert("GAME OVER\n" + title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer] + "Você VENCEU!");
    mapa();
    inventarioJogadores(); //637 GOSUB 136
    inicioJogo();
}


function pestes() {
    PEST = Math.trunc(aleatorio() * 100);
    if (PEST = Math.trunc((aleatorio() * 1000) / 10)) {

        PP = Math.trunc(aleatorio() * 70);
        NN = Math.trunc(nobles[currentPlayer] * PP / 100) + 1;
        nobles[currentPlayer] = nobles[currentPlayer] - NN;
        CC = Math.trunc(clergy[currentPlayer] * PP / 100) + 2;
        clergy[currentPlayer] = clergy[currentPlayer] - CC;
        MM = Math.trunc(merchants[currentPlayer] * PP / 100) + 2;
        merchants[currentPlayer] = merchants[currentPlayer] - MM;
        SS = Math.trunc(serfs[currentPlayer] * PP / 100) + 2;
        serfs[currentPlayer] = serfs[currentPlayer] - SS;
        alert("NOTÍCIAS CATASTRÓFICAS \n A peste negra varreu sua cidade vitimando: \n" + NN + " nobres +\n" + CC + " bispos e padres +\n" + MM + "  comerciantes +\n" + SS + " servos.");
    }
}

function falencia() {
    alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer] + "\n **** FALIU ****");
    if (treasury[currentPlayer] <= (-50000 * socialPosition[currentPlayer] / 3)) { confiscoDeBens(); }
    else {
        alert(" Os Bancos tomaram seus bens");
        markets[currentPlayer] = Math.trunc(markets[currentPlayer] * (Math.trunc(aleatorio() * 10) / 10));
        palaces[currentPlayer] = Math.trunc(palaces[currentPlayer] * (Math.trunc(aleatorio() * 10) / 10));
        cathedrals[currentPlayer] = Math.trunc(cathedrals[currentPlayer] * (Math.trunc(aleatorio() * 10) / 10));
        woolenMills[currentPlayer] = Math.trunc(woolenMills[currentPlayer] * (Math.trunc(aleatorio() * 10) / 10));
        land[currentPlayer] = Math.trunc(land[currentPlayer] * (Math.trunc(aleatorio() * 10) / 10));
        economicValue[currentPlayer] = 1;
        treasury[currentPlayer] = 100;
        merchants[currentPlayer] = Math.trunc(merchants[currentPlayer] * Math.trunc(aleatorio() * 7) / 10);
        grainReserve[currentPlayer] = grainReserve[currentPlayer] - 5000;
        if (land[currentPlayer] < 5000) { land[currentPlayer] = 5000; }
    }
}

function invasao() {
    Z = 5;
    for (A = 1; A <= numberOfPlayers; numberOfPlayers++) {
        // perguntas inúteis IF soldiers[A] < soldiers[currentPlayer] THEN 684
        // perguntas inúteis682 IF soldiers[A] < (1.2 * (land[A] / 1000)) THEN 684
        if (soldiers[A] > soldiers[Z]) { Z = A; }
    }

    if (Z == 5) {
        city[7] = "BARÃO ";
        nomeWithCity[7] = "MALONE DE VINCENZA";
        A1 = Math.trunc(aleatorio() * 9000 + 1000);

        // linha jamais usada --> 689 A1 = soldiers[Z) * 1000 - land[Z) / 3
    }
    if (A1 > (land[currentPlayer] - 5000)) {
        A1 = (land[currentPlayer] - 5000) / 2;
        temp = prompt("Digite <ENTER> p/continuar.");
    }
    if (numberOfPlayers != 1) {
        alert(title[socialPosition[Z]] + sex[Z] + nomeWithCity[Z] + "\n invadiu e anexou " + A1 + "hectares de suas terras.");
    } else {
        alert(title[Z] + nomeWithCity[Z] + " invadiu e anexou " + A1 + " hectares de suas terras.");
    }

    land[Z] = land[Z] + A1;
    land[currentPlayer] = land[currentPlayer] - A1;
    Z = Math.trunc(aleatorio() * 40);
    if (Z > (soldiers[currentPlayer] - 15)) {
        Z = soldiers[currentPlayer] - 15;
    }
    alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer] + " perdeu " + Z + " soldados em batalha");
    soldiers[currentPlayer] = soldiers[currentPlayer] - Z;
    Z$ = prompt("Aperte <ENTER>");
}

function gameOverSemVencedores() {
    alert("**** GAME OVER ****");
    F$ = prompt("Quer jogar novamente (S/N)");
    if (F$ == "S" || F$ == "s") { inicioJogo(); } else { desligarJogo() };
}

function confiscoDeBens() {
    alert("Os Bancos confiscaram seus bens...");
    if (treasury[currentPlayer] <= -20000 && treasury[currentPlayer] > -35000) {
        tempoCondenacao[currentPlayer] = tempoCondenacao[currentPlayer] + 1;
    }
    if (treasury[currentPlayer] <= -35000 && treasury[currentPlayer] > -50000) {

        tempoCondenacao[currentPlayer] = tempoCondenacao[currentPlayer] + Math.trunc(aleatorio() * 4);
        if (tempoCondenacao[currentPlayer] = 0) { tempoCondenacao[currentPlayer] = 1; }
    }
    if (treasury[currentPlayer] <= 50000) {
        tempoCondenacao[currentPlayer] = tempoCondenacao[currentPlayer] + Math.trunc(aleatorio() * 6);
        if (tempoCondenacao[currentPlayer] < 2) { tempoCondenacao[currentPlayer] = 3; }
    }
    G$ = "o";
    if (sex[currentPlayer] = 8) { G$ = "a"; }

    alert(title[socialPosition[currentPlayer] + sex[currentPlayer]] + nomeWithCity[currentPlayer] + " foi a julgamento acusad" + G$ + " de fraude \n Desta forma foi condenad" + G$ + " a " + tempoCondenacao[currentPlayer] + " anos de prisão");

    if (numberOfPlayers == 1) {
        currentYear[7] = currentYear[7] + tempoCondenacao[currentPlayer];
    }
    if (numberOfPlayers > 1) {
        variavelNaoDescoberta[currentPlayer] = 1;
    }
    markets[currentPlayer] = 0;
    palaces[currentPlayer] = 0;
    cathedrals[currentPlayer] = 0;
    woolenMills[currentPlayer] = 0;
    land[currentPlayer] = 4000;
    economicValue[currentPlayer] = 1;
    treasury[currentPlayer] = 0;
    merchants[currentPlayer] = Math.trunc(merchants[currentPlayer] / 4);
    grainReserve[currentPlayer] = 5000;
    // ?
}


function desligarJogo() {
    alert("Fim de Jogo");
}

function aleatorio() { //********************************** TRANSFERIDA
    return Math.random();
}

