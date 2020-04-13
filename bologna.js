// Far from being finalized! ****************************************************************** FEITO ATÉ LINHA 100
// Longe de ser finalizado! *******************************************************************
// 1 KEY OFF:SCREEN0:BLOAD"BOLOGNA.BIN",S: 2 COLOR 6,5:WIDTH 39: 3 LOCATE12,10
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
var posicialSocial = Array(5);  //se -1 jogador morto
var naoDescobriAinda = Array(5);
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
function inicioJogo() { //********************************** TRANSFERIDA
    F = 0
    while (F < 2 || F > 4) {
        F = prompt("Quantas pessoas (2 a 4) vão participar");
    }
    //F = VAL(F$);
    //66 CLS: BEEP
    //67 LOCATE  5, 10: PRINT"Ir±o participar"; F; "pessoas,OK?"
    //68 FOR K = 1 TO  500: NEXT K
    for (var A = 1; A <= F; A++) {
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
    alert("NÍVEIS DO JOGO: \n 1. Débil mental \n 1. Aprendiz \n 2. Aventureiro \n 3. Mestre \n 4. Grande mestre");
    nivelDoJogo = prompt("Em que nível deseja jogar: ");
    nivelDoJogo = nivelDoJogo + 2 + 2 * nivelDoJogo;
    jogadorDaVezç = jogadorDaVezç + 1;
}

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


122 GOTO 126

125 GOTO 112
126 IF anoCorrente[5) >= limitedeVida[jogadorDaVezç) THEN 149
127 GOSUB 181 // colheita
128 GOSUB 245
129 GOSUB 331
130 GOSUB 286
131 GOSUB 639
132 GOSUB 430
133 GOSUB 509
134 GOSUB 580
135 GOTO 111

136 CLS
137 PRINT: PRINT"NOB  SOL  CLE  COM  SERV  TERRA  CAIXA"
138 PRINT"======================================"
139 FOR A = 1 TO F
140 PRINT: PRINT TAB(15); Cidade[A)
141 PRINT Math.trunc(nobres[A)); TAB(4); Math.trunc(soldados[A)); TAB(9); Math.trunc(bispos[A)); TAB(14); Math.trunc(comerciantes[A)); TAB(18); Math.trunc(servos[A)); TAB(25); Math.trunc(terra[A)); TAB(31); Math.trunc(caixa[A))
142 NEXT
143 LOCATE 8, 16: PRINT"Digite <C> p/conven‡”es"
144 LOCATE 8, 17: PRINT"      <0> p/continuar"
145 GOSUB 708
146 IF Z$ = "C" THEN GOSUB 568
147 IF Z$ = "0" THEN RETURN
148 GOTO 145


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



156 PRINT: PRINT"Devido a velhice ap¢s longo governo"
157 GOTO 163

159 IF Y = 5 THEN PRINT: PRINT"Devido a peste negra"
160
161 IF Y = 6 THEN PRINT: PRINT"Devido a ataque de barbaros durante umaviagem"
162 IF Y > 6 THEN PRINT: PRINT"Devido a envenenamento alimentar"
163 PRINT: PRINT "APERTE RETURN": FORK = 1TO1000: NEXT
164 prompt Z$
165 IF F = 1 THEN 725
166 GOSUB 430
167 GOSUB 136
168 GOTO 112
169 caixa[jogadorDaVezç) = Math.trunc(caixa[jogadorDaVezç))
170 RETURN
171 Z = (aleatorio[) * A) * servos[jogadorDaVezç) / 100
172 Z2 = Math.trunc(Z)
173 PRINT: PRINT Z2; "servos nasceram este ano"
174 servos[jogadorDaVezç) = servos[jogadorDaVezç) + Z2
175 RETURN
176 Z = (aleatorio[) * A) * servos[jogadorDaVezç) / 100
177 Z2 = Math.trunc(Z)
178 PRINT: PRINT Z2; "servos morreram este ano"
179 servos[jogadorDaVezç) = servos[jogadorDaVezç) - Z2
180 RETURN

//Colheita - 181
function colheita() {
    W = 0;
    while (W < 1 || W > 5) {
        W = Math.trunc((Math.trunc(aleatorio() * 5) + Math.trunc(aleatorio() * 6)) / 2) + 1;
    }

    switch (W) {
        case 1:
            alert("Estiagem - Ameaça de fome!!");
            break;
        case 2:
            alert("Tempo ruim - Colheita pobre.");
            break;
        case 3:
            alert("Tempo normal - Colheita razoável.");
            break;
        case 4:
            alert("Tempo bom - Colheita boa.");
            break;
        case 5:
            alert("Tempo ótimo - Colheita excelente!!");
            break;
    }

    R = Math.trunc(aleatorio() * 50);
    if (R == 0) { R = 1; }
    reserva[jogadorDaVezç] = (reserva[jogadorDaVezç] * 100 - reserva[jogadorDaVezç] * R) / 100;
    X = Math.trunc(servos[jogadorDaVezç] - moinhos[jogadorDaVezç] * 100);
    if (x < 0) { x = 1; }
    Y = W - .5
    DD = W * (servos[jogadorDaVezç] - X);
    if (DD == 0) { DD = 1; }
    H1 = Math.trunc(Y * terra[jogadorDaVezç] / 1.5 + Y * X + (aleatorio() * servos[jogadorDaVezç]) - DD);
    reserva[jogadorDaVezç] = Math.trunc(reserva[jogadorDaVezç] + H1);
    D1 = nobres[jogadorDaVezç] * 100 + catedrais[jogadorDaVezç] * 40 + comerciantes[jogadorDaVezç] * 30 + soldados[jogadorDaVezç] * 10 + servos[jogadorDaVezç] * 5;
    L = Math.trunc((100 * W + Math.trunc(aleatorio() * 9) + Math.trunc(aleatorio() * 9)) / 10);
    L = (anoCorrente[5] - 1400 + L) / 10;
    Z = 6 - W;
    G = Math.trunc((Math.trunc(aleatorio() * 5) + Math.trunc(aleatorio() * 5) + Z * 10) / (5 + 2 * Y) * 30);
}

//RATOS E FORMA DE JUSTIÇA NA RESERVA DE GRÃOS - 213
213 PRINT: PRINT  "Os ratos comeram"; R; " % da reserva  de      gr±os dos silos de armazenagem"
214 PRINT: PRINT W$
215 PRINT"Produ‡±o de gr±os"; H1; "sacas"
216 IF caixa[jogadorDaVezç) < 32766 THEN GOSUB 169
217 PRINT: PRINT"RESERVA  DEMANDA  PRE€O  PRE€O  CAIXA gr±os    gr±os    gr±os  Terra": PRINT
218 PRINT Math.trunc(reserva[jogadorDaVezç)); TAB(9); Math.trunc(D1); TAB(18); Math.trunc(G); TAB(26); L; TAB(32); Math.trunc(caixa[jogadorDaVezç))
219 PRINT" sacas    sacas  mil/sc  hect. florins"
220 RETURN
221 J = (formaJustica[jogadorDaVezç) * 300 - 500) * posicialSocial[jogadorDaVezç)
222 IF formaJustica[jogadorDaVezç) = 1 THEN 226
223 IF formaJustica[jogadorDaVezç) = 2 THEN 228
224 IF formaJustica[jogadorDaVezç) = 3 THEN 230
225 IF formaJustica[jogadorDaVezç) = 4 THEN 232
226 J$ = "Justa"
227 GOTO 233
228 J$ = "Moderada"
229 GOTO 233
230 J$ = "R¡spida"
231 GOTO 233
232 J$ = "Abusiva"
233 C1 = (nobres[jogadorDaVezç) * 90 + bispos[jogadorDaVezç) * 35 + comerciantes[jogadorDaVezç) * 10) * (Y / 100) + naoDescobriAinda[jogadorDaVezç) * 20
234 S1 = (nobres[jogadorDaVezç) * 50 + comerciantes[jogadorDaVezç) * 75 + naoDescobriAinda[jogadorDaVezç) * 10) * (Y / 100) * (5 - formaJustica[jogadorDaVezç)) / 2
235 I1 = nobres[jogadorDaVezç) * 250 + naoDescobriAinda[jogadorDaVezç) * 20 + (10 * formaJustica[jogadorDaVezç) * nobres[jogadorDaVezç)) * (Y / 100)
236 C1 = Math.trunc(5 * C1 * taxaAlfandegaria[jogadorDaVezç) / 100)
237 S1 = Math.trunc(25 * S1 * taxaVendas[jogadorDaVezç) / 100)
238 I1 = Math.trunc(ABS(2 * I1 * impostos[jogadorDaVezç) / 100))
239 PRINT: PRINT "RENDA DO ESTADO:"; J + C1 + S1 + I1; " florins"
240 PRINT "ßßßßßßßßßßßßßßß": PRINT"TAXAS DA  TAXAS S/  IMPOSTOS  JUSTI€A  ALFANDEGA  VENDAS  DIVERSOS  (forma)"
241 PRINT: PRINT TAB(1); taxaAlfandegaria[jogadorDaVezç); "%"; TAB(10); taxaVendas[jogadorDaVezç); "%"; TAB(21); impostos[jogadorDaVezç); "%"; TAB(30); J$
242 PRINT: PRINT TAB(1); C1; TAB(10); S1; TAB(21); I1; TAB(32); J
243      PRINT "florins  florins    florins    florins"
244 RETURN

//OPÇÕES ECONÔMICAS - 245
245 CLS
246 LOCATE 0, 1: PRINT Titulo[sexo0H8[jogadorDaVezç) + posicialSocial[jogadorDaVezç)); nomeComCidade[jogadorDaVezç)
247 GOSUB 213
248 PRINT"      OP€™ES ECONOMICAS"
249 PRINT"      ßßßßßßßßßßßßßßßßß"      : PRINT"      1. Comprar gr±os": PRINT"      2. Vender gr±os"
250 PRINT"      3. Comprar terras": PRINT"      4. Vender terras"
251 PRINT: PRINT"      Area da na‡±o ==>"; Math.trunc(terra[jogadorDaVezç)); "Hect.": PRINT"      Digite <0> p/continuar"
252 GOSUB 708
253 IF Z$ != "0" AND Z$ != "1"AND Z$ != "2"AND Z$ != "3"AND Z$ != "4" THEN 248
254 I1 = VAL(Z$)
255 IF I1 > 4 THEN 248
256 IF I1 < 1 THEN RETURN
257 IF I1 = 1 THEN 261
258 IF I1 = 2 THEN 268
259 IF I1 = 3 THEN 275
260 IF I1 = 4 THEN 279
261 CLS: LOCATE 5, 10: prompt" Quanto gr±o vai comprar"; I1
262 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - (I1 * G / 1000)
263 reserva[jogadorDaVezç) = reserva[jogadorDaVezç) + I1
264 CLS
265 PRINT Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); nomeComCidade[jogadorDaVezç)
266 GOSUB 216
267 GOTO 248
268 CLS: LOCATE 5, 10: prompt" Quanto gr±o vai vender"; I1
269 IF I1 <= reserva[jogadorDaVezç) THEN 272
270 LOCATE 5, 10: PRINT"N±o ha tanto gr±o dispon¡vel ...": GOSUB 826: FORK = 1TO 500: NEXT
271 GOTO 248
272 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) + (I1 * G / 1000)
273 reserva[jogadorDaVezç) = reserva[jogadorDaVezç) - I1
274 GOTO 264
275 CLS: LOCATE 5, 10: prompt"Quantos hect. vai comprar"; I1
276 terra[jogadorDaVezç) = terra[jogadorDaVezç) + I1
277 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - (I1 * L)
278 GOTO 264
279 CLS: LOCATE 5, 10: prompt"Quantos hect. vai vender"; I1
280 IF I1 <= (terra[jogadorDaVezç) - 5000) THEN 283
281 CLS: LOCATE 5, 10: PRINT" Vocˆ n±o pode vender tanto!": GOSUB 826: FORK = 1TO500: NEXT
282 GOTO 279
283 terra[jogadorDaVezç) = terra[jogadorDaVezç) - I1
284 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) + (I1 * L)
285 GOTO 264
286 CLS
287 PRINT: PRINT Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); nomeComCidade[jogadorDaVezç)
288 GOSUB 221
289 PRINT: PRINT"        OP€™ES FINANCEIRAS"
290 PRINT"        ßßßßßßßßßßßßßßßßßß" : PRINT"        1. Taxas alfandegarias                2. Taxas s/vendas"
291      PRINT"        3. Impostos diversos                  4. Taxas judiciarias"
292 PRINT: PRINT: PRINT"        Digite (0) p/continuar"
293 GOSUB 708
294 IF Z$ != "0" AND Z$ != "1"AND Z$ != "2"AND Z$ != "3"AND Z$ != "4" THEN 293
295 I = VAL(Z$)
296 IF I < 1 THEN 320
297 IF I = 1 THEN 301
298 IF I = 2 THEN 306
299 IF I = 3 THEN 310
300 IF I = 4 THEN 314
301 CLS: LOCATE 5, 10: prompt"  Nova taxa alfandegaria                      (0 A 100%)"; I
302 IF I > 100 THEN I = 100
303 IF I < 0 THEN I = 0
304 taxaAlfandegaria[jogadorDaVezç) = I
305 GOTO 286
306 CLS: LOCATE 5, 10: prompt"  Nova taxa s/vendas                          (0 A 50%)"; I
307 IF I > 50 OR I < 0 THEN I = 5
308 taxaVendas[jogadorDaVezç) = I
309 GOTO 286
310 CLS: LOCATE 5, 10: prompt"  Nova taxa s/impostos                        (0 A 25%)"; I
311 IF I < 0 OR I > 25 THEN I = 0
312 impostos[jogadorDaVezç) = I
313 GOTO 286
314 CLS: LOCATE 3, 10: PRINT"JUSTI€A ==>  1. Justa                              2. Moderada                            3. R¡spida                            4. Abusiva"
315 GOSUB 708
316 IF Z$ != "1"AND Z$ != "2"AND Z$ != "3"AND Z$ != "4" THEN 315
317 I = VAL(Z$)
318 formaJustica[jogadorDaVezç) = I
319 GOTO 286
320 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) + C1 + S1 + I1 + J
321 CLS
322 IF caixa[jogadorDaVezç) >= 0 THEN 329
323 JE = Math.trunc(aleatorio[) * 50)
324 IF JE < 20 THEN 323
325 LOCATE 5, 10: PRINT"Os Bancos cobraram "; JE; "% de juros      sobre sua d¡vida"
326 GOSUB 775: FORK = 1TO2000: NEXT
327 JJ = 1 + JE / 100
328 caixa[jogadorDaVezç) = Math.trunc(caixa[jogadorDaVezç) * JJ)
329 IF caixa[jogadorDaVezç) < (-10000 * posicialSocial[jogadorDaVezç)) THEN 660
330 RETURN
331 CLS: LOCATE 5, 10: prompt" Quanto gr±o fornecera para  a po      pula‡±o da cidade"; graosPopulacaoç
332 IF graosPopulacaoç >= (reserva[jogadorDaVezç) / 5) THEN 335
333 CLS: LOCATE 5, 10: PRINT"  Vocˆ devera fornecer no m¡nimo        20% da reserva de gr±os": GOSUB 826: FORK = 1TO 500: NEXT
334 GOTO 331
335 IF graosPopulacaoç <= (reserva[jogadorDaVezç) - reserva[jogadorDaVezç) / 5) THEN 338
336 CLS: LOCATE 5, 10: PRINT"  Vocˆ devera manter 20% da reser        va de gr±os": GOSUB 826: FORK = 1TO 500: NEXT
337 GOTO 331
338 reserva[jogadorDaVezç) = reserva[jogadorDaVezç) - graosPopulacaoç
339 CLS
340 PRINT: PRINT Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); nomeComCidade[jogadorDaVezç)
341 Z = graosPopulacaoç / D1 - 1
342 IF Z > 0 THEN Z = Z / 2
343 IF Z > .25 THEN Z = Z / 10 + .25
344 Z2 = 50 - taxaAlfandegaria[jogadorDaVezç) - taxaVendas[jogadorDaVezç) - impostos[jogadorDaVezç)
345 IF Z2 < 0 THEN Z2 = Z2 * formaJustica[jogadorDaVezç)
346 Z2 = Z2 / 10
347 IF Z2 > 0 THEN Z2 = Z2 + 3 - formaJustica[jogadorDaVezç)
348 Z = Z + (Z2 / 10)
349 IF Z > .5 THEN Z = .5
350 IF graosPopulacaoç < (D1 - 1)THEN 388
351 A = 7
352 GOSUB 171
353 A = 3
354 GOSUB 176
355 IF(taxaAlfandegaria[jogadorDaVezç) + taxaVendas[jogadorDaVezç)) < 35 THEN comerciantes[jogadorDaVezç) = comerciantes[jogadorDaVezç) + Math.trunc(aleatorio[) * 8)
356 IF impostos[jogadorDaVezç) < Math.trunc(aleatorio[) * 20) THEN nobres[jogadorDaVezç) = nobres[jogadorDaVezç) + Math.trunc(aleatorio[2) * 4) - 1
357 bispos[jogadorDaVezç) = bispos[jogadorDaVezç) + Math.trunc(aleatorio[) * 3) - 1
358 IF graosPopulacaoç < (D1 + D1 * .3) THEN 376
359 Z2 = servos[jogadorDaVezç) / 1000
360 Z = (graosPopulacaoç - D1) / D1 * 10
361 Z = Z * Z2 * Math.trunc(aleatorio[) * 25) + Math.trunc(aleatorio[2) * 40)
362 IF Z > 32000 THEN Z = 32000
363 Z2 = Z
364 Z = Math.trunc(aleatorio[) * Z2)
365 IF Z < 1 THEN Z = 2
366 PRINT: PRINT Z; "servos mudaram para sua cidade"
367 GOSUB 775
368 servos[jogadorDaVezç) = servos[jogadorDaVezç) + Z
369 naoDescobriAinda[jogadorDaVezç) = naoDescobriAinda[jogadorDaVezç) + .5
370 Z2 = Z / 5
371 Z = Math.trunc(aleatorio[) * Z2)
372 IF Z > 50 THEN Z = 50
373 comerciantes[jogadorDaVezç) = comerciantes[jogadorDaVezç) + Z
374 nobres[jogadorDaVezç) = nobres[jogadorDaVezç) + 1
375 bispos[jogadorDaVezç) = bispos[jogadorDaVezç) + 2
376 IF formaJustica[jogadorDaVezç) < 3 THEN 387
377 J1 = servos[jogadorDaVezç) / 100 * (formaJustica[jogadorDaVezç) - 2) * (formaJustica[jogadorDaVezç) - 2)
378 J1 = Math.trunc(aleatorio[) * J1)
379 IF J1 <= 1 THEN J1 = 2
380 servos[jogadorDaVezç) = servos[jogadorDaVezç) - J1
381 PRINT: PRINT: PRINT J1; "servos fugiram em virtude de injus-    ti‡as": GOSUB 775
382 PRINT: PRINT"    Digite (0) p/continuar"
383 GOSUB 708
384 IF Z$ = "0"THEN 386
385 GOTO 383
386 CLS
387 GOTO 402
388 X = (D1 - graosPopulacaoç) / D1 * 100 - 9
389 X2 = X
390 IF X <= 65 THEN 393
391 X = 65
392 comerciantes[jogadorDaVezç) = comerciantes[jogadorDaVezç) / 2
393 IF X >= 0 THEN 396
394 X2 = 0
395 X = 0
396 A = 3
397 GOSUB 171
398 A = X2 + 8
399 GOSUB 176
400 IF Z2 > 1000 THEN naoDescobriAinda[jogadorDaVezç) = naoDescobriAinda[jogadorDaVezç) / 2
401 GOTO 376
402 HE = taxaVendas[jogadorDaVezç)
403 IF taxaVendas[jogadorDaVezç) <= 5 THEN HE = Math.trunc(aleatorio[) * 4 + 1)
404 Z = Math.trunc(mercados[jogadorDaVezç] * servos[jogadorDaVezç] * comerciantes[jogadorDaVezç] / (1500 * Math.sqrt(HE)))
405 IF Z >= mercados[jogadorDaVezç) * 1000 THEN Z = Math.trunc(mercados[jogadorDaVezç) * 300 * (1 + aleatorio[) * 3))
406 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) + Z
407 IF Z <= 0 THEN 409
408 PRINT: PRINT"Seus mercadosç renderam "; Z; " florins"
409 IF moinhos[jogadorDaVezç) = 0 THEN 417
410 TX = reserva[jogadorDaVezç) / (moinhos[jogadorDaVezç) * 5000)
411 IF TX > 1 THEN TX = 1
412 Z = Math.trunc(moinhos[jogadorDaVezç) * TX * servos[jogadorDaVezç) / (3 * Math.sqrt(HE)))
413 IF Z >= moinhos[jogadorDaVezç) * 2000 THEN Z = Math.trunc((moinhos[jogadorDaVezç) * 1000 * (1 + aleatorio[) * 2))
414 reserva[jogadorDaVezç) = reserva[jogadorDaVezç) - TX * moinhos[jogadorDaVezç) * 5000
415 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) + Z
416 PRINT: PRINT"Seus moinhosç renderam"; Z; " florins"
417 Z = soldados[jogadorDaVezç) * 3
418 PRINT: PRINT"Gastos militares: "; Z; " florins"
419 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - Z
420 IF(terra[jogadorDaVezç) / 1000) > soldados[jogadorDaVezç) THEN 678
421 IF(terra[jogadorDaVezç) / 500) < soldados[jogadorDaVezç) THEN 426
422 FOR A = 1 TO F
423 IF A = E THEN 425
424 IF soldados[A) > (soldados[jogadorDaVezç) * 2.4) THEN 678
425 NEXT
426 LOCATE  2, 18: LINE prompt "P/continuar press. <0> e <RETURN>"; H$
427 IF H$ = "0"THEN 429
428 GOTO 426
429 RETURN
430 CLS: L2 = terra[jogadorDaVezç) / 1000
431 LOCATE 14, 2: PRINT Cidade[jogadorDaVezç)
    432 LOCATE 25, 2: PRINT terra[jogadorDaVezç); "hect."
433 IF(soldados[jogadorDaVezç) - 5) < (terra[jogadorDaVezç) / 1000) THEN 444
434 LOCATE 1, 6: PRINT" ÛÛÛÛÛÛÛ"
435 LOCATE 1, 7: PRINT"  ÛËËËÛ"
436 LOCATE 1, 8: PRINT"  ÛËËËÛ"
437 LOCATE 1, 9: PRINT"  ÛËËËÛ"
438 LOCATE 1, 10: PRINT" ÛÛÛUÛÛÛ"
439 IF(soldados[jogadorDaVezç) / 2) < (terra[jogadorDaVezç) / 1000) THEN 447
440 LOCATE 1, 4: PRINT" Â Â Â Â"
441 LOCATE 1, 5: PRINT" ÛÛÛÛÛÛÛ"
442 LOCATE 1, 6: PRINT"  ÛÛÛÛÛ "
443 LOCATE 1, 7: PRINT"  ÛËËËÛ"
444 LOCATE 1, 8: PRINT"  ÛËËËÛ"
445 LOCATE 1, 9: PRINT" ÛÛÛÛÛÛÛ"
446 LOCATE 1, 10: PRINT" ÛÛÛUÛÛÛ"
447 Z = catedrais[jogadorDaVezç)
    448 IF Z = 0 THEN 464
449 IF Z > 7 THEN Z = 7
450 IF Z = 1 THEN 463
451 IF Z = 2 THEN 462
452 IF Z = 3 THEN 461
453 IF Z = 4 THEN 460
454 IF Z = 5 THEN 459
455 IF Z = 6 THEN 458
456 IF Z = 7 THEN 457
457 LOCATE 26, 14: PRINT"ÎÎUÎÎ"
458 LOCATE 26, 15: PRINT"ÛÅÅÅÛ"
459 LOCATE 26, 16: PRINT"Ý×××Ê"
460 LOCATE 26, 17: PRINT"Ý×××Ê"
461 LOCATE 26, 18: PRINT"Ý×××Ê"
462 LOCATE 26, 19: PRINT"Ý×××Ê"
463 LOCATE 26, 20: PRINT"ÛÛÀÛÛ"
464 Z = palacios[jogadorDaVezç)
    465 IF Z = 0 THEN 480
466 IF Z = 1 THEN 479
467 IF Z = 2 THEN 478
468 IF Z = 3 THEN 477
469 IF Z = 4 THEN 476
470 IF Z = 5 THEN 475
471 IF Z = 6 THEN 474
472 IF Z = 7 THEN Z = 7
473 LOCATE 20, 14: PRINT" ÎÎÎ "
474 LOCATE 20, 15: PRINT"ÎÅÅÅÎ"
475 LOCATE 20, 16: PRINT"ÝÌÌÌÊ"
476 LOCATE 20, 17: PRINT"ÝÌÌÌÊ"
477 LOCATE 20, 18: PRINT"ÝÌÌÌÊ"
478 LOCATE 20, 19: PRINT"ÝÌÌÌÊ"
479 LOCATE 20, 20: PRINT"ÛÛUÛÛ": GOTO 481
480 LOCATE 20, 20: PRINT"©ÍÍÍª"
481 GOSUB 505
482 LOCATE XX, YY: PRINT"©Åª"
483 LOCATE XX, YY - 1: PRINT" O "
484 LOCATE XX, YY - 2: PRINT" Î "
485 Z = mercados[jogadorDaVezç)
    486 IF Z = 0 THEN 492
487 LOCATE 8, 17: PRINT"ÎÎMÎÎ"
488 LOCATE 8, 18: PRINT"ÛßßßÛ"
489 LOCATE 8, 19: PRINT"ÝÌÌÌÊ"
490 LOCATE 8, 20: PRINT"ÛÛ×ÛÛ"
491 LOCATE  9, 19: PRINT Z
492 Z = moinhos[jogadorDaVezç)
    493 IF Z = 0 THEN 501
494 LOCATE 14, 15: PRINT"ÎÎÎÎÎ"
495 LOCATE 14, 16: PRINT"ÛÛÛÛÛ"
496 LOCATE 14, 17: PRINT"Ý\\\Ê"
497 LOCATE 14, 18: PRINT"Ý\\\Ê"
498 LOCATE 14, 19: PRINT"Ý\À\Ê"
499 LOCATE 14, 20: PRINT"ÛÛUÛÛ"
500 LOCATE 15, 18: PRINT Z
501 LOCATE 1, 3: PRINT"ANO"; anoCorrente[5)
    502 LOCATE 3, 24: PRINT "  Qualquer tecla p/continuar "
503 GOSUB 708
504 RETURN
505 Z = Math.trunc((mercados[jogadorDaVezç) + palacios[jogadorDaVezç) + catedrais[jogadorDaVezç) + moinhos[jogadorDaVezç) + caixa[jogadorDaVezç) / 1000 + terra[jogadorDaVezç) / 1000 + reserva[jogadorDaVezç) / 10000 + servos[jogadorDaVezç) / 1000 / 2))
506 IF Z < 10 THEN Z = 10
507 IF Z > 35 THEN Z = 35
508 XX = 35: YY = Math.trunc((54 - Z) / 2): RETURN
509 CLS
510 LOCATE 0, 0: PRINT Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); nomeComCidade[jogadorDaVezç)
    511      PRINT: PRINT"INVESTIMENTOS DO ESTADO:"
512 PRINT"ßßßßßßßßßßßßßßßßßßßßßßß": PRINT"1. mercadosç  (1000 florins,cada)"
513 PRINT"2. moinhosç    (2000 florins,cada)"
514 PRINT"3. palaciosç  (parte - 3000 florins)"
515 PRINT"4. catedraisç  (parte - 5000 florins)"
516 PRINT"5. Gastos militares (forma‡„o de um pe-              lot±o - 500 florins)"
517 PRINT: PRINT"DISPONIBILIDADE CAIXA:"; Math.trunc(caixa[jogadorDaVezç)); "florins": PRINT"ßßßßßßßßßßßßßßßßßßßßßß"
518 IF caixa[jogadorDaVezç) < -30000 THEN 660
519 PRINT: PRINT"(Que Investimento fara?)": PRINT: PRINT: PRINT"Press. <6> p/comparar                        <7> p/mapear"
520 PRINT"      <0> p/continuar"
521 GOSUB 708
522 IF Z$ != "0" AND Z$ != "1" AND Z$ != "2"AND Z$ != "3"AND Z$ != "4"AND Z$ != "5"AND Z$ != "6"AND Z$ != "7" THEN 521
523 I = VAL(Z$)
524 IF I >= 1 THEN 527
525 CLS
526 RETURN
527 IF I = 1 THEN 543
528 IF I = 2 THEN 537
529 IF I = 3 THEN 550
530 IF I = 4 THEN 557
531 IF I = 5 THEN 564
532 IF I = 6 THEN 535
533 GOSUB 430
534 GOTO  509
535 GOSUB 136
536 GOTO  509
537 CLS: LOCATE 2, 10: prompt"Quantos moinhosç deseja comprar "; I
538 moinhos[jogadorDaVezç) = moinhos[jogadorDaVezç) + I
539 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - I * 2000
540 IF caixa[jogadorDaVezç) <= -30000 THEN 660
541 naoDescobriAinda[jogadorDaVezç) = naoDescobriAinda[jogadorDaVezç) + I * .25
542 GOTO 509
543 CLS: LOCATE 2, 10: prompt"Quantos mercadosç deseja comprar "; I
544 mercados[jogadorDaVezç) = mercados[jogadorDaVezç) + I
545 IF caixa[jogadorDaVezç) <= -30000 THEN 660
546 comerciantes[jogadorDaVezç) = comerciantes[jogadorDaVezç) + 2
547 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - I * 1000
548 naoDescobriAinda[jogadorDaVezç) = naoDescobriAinda[jogadorDaVezç) + I * .1
549 GOTO 509
550 CLS: LOCATE 2, 10: prompt"Quantos palaciosç deseja comprar"; I
551 palacios[jogadorDaVezç) = palacios[jogadorDaVezç) + I
552 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - I * 3000
553 IF caixa[jogadorDaVezç) <= -30000 THEN 660
554 nobres[jogadorDaVezç) = Math.trunc(nobres[jogadorDaVezç) + aleatorio[) * I * 2)
    555 naoDescobriAinda[jogadorDaVezç) = naoDescobriAinda[jogadorDaVezç) + I * .5
556 GOTO 509
557 CLS: LOCATE 2, 10: prompt"Quantas catedraisç deseja comprar "; I
558 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - I * 5000
559 IF caixa[jogadorDaVezç) <= -30000 THEN 660
560 bispos[jogadorDaVezç) = Math.trunc(bispos[jogadorDaVezç) + aleatorio[) * 6 * I)
    561 catedrais[jogadorDaVezç) = catedrais[jogadorDaVezç) + I
562 naoDescobriAinda[jogadorDaVezç) = naoDescobriAinda[jogadorDaVezç) + I
563 GOTO 509
564 soldados[jogadorDaVezç) = soldados[jogadorDaVezç) + 20
565 servos[jogadorDaVezç) = servos[jogadorDaVezç) - 20
566 caixa[jogadorDaVezç) = caixa[jogadorDaVezç) - 500
567 GOTO 509
568 CLS
569 PRINT: PRINT"          DD CONVENC™ES DD"
570 PRINT: PRINT: PRINT"      NOB............Nobres"
571 PRINT: PRINT"      SOL............Soldados"
572 PRINT: PRINT"      CLE............Clero"
573 PRINT: PRINT"      COM............Comerciantes"
574 PRINT: PRINT"      SER............Servos"
575 PRINT: PRINT"      CAIXA..........Dinheiro"
576 PRINT: PRINT: PRINT"        Digite (0) p/voltar "
577 GOSUB 708
578 IF Z$ = "0" THEN 136
579 GOTO 577
580 Z = 0
581 A = mercados[jogadorDaVezç)
    582 GOSUB 627
583 A = palacios[jogadorDaVezç)
    584 GOSUB 627
585 A = catedrais[jogadorDaVezç)
    586 GOSUB 627
587 A = moinhos[jogadorDaVezç)
    588 GOSUB 627
589 A = caixa[jogadorDaVezç) / 5000
590 GOSUB 627
591 A = (terra[jogadorDaVezç) - 5000) / 4000
592 GOSUB 627
593 A = comerciantes[jogadorDaVezç) / 50
594 GOSUB 627
595 A = nobres[jogadorDaVezç) / 5
596 GOSUB 627
597 A = soldados[jogadorDaVezç) / 50
598 GOSUB 627
599 A = bispos[jogadorDaVezç) / 10
600 GOSUB 627
601 A = servos[jogadorDaVezç) / 2000
602 GOSUB 627
603 A = naoDescobriAinda[jogadorDaVezç) / 5
604 GOSUB 627
605 A = Math.trunc(Z / nivelDoJogo - formaJustica[jogadorDaVezç) + 1)
    606 IF A > 8 THEN A = 8
607 IF(anoCorrente[5) + 2) != limitedeVida[jogadorDaVezç) THEN 610
608 posicialSocial[jogadorDaVezç) = posicialSocial[jogadorDaVezç) + 1
609 GOTO 612
610 IF posicialSocial[jogadorDaVezç) >= A GOTO 626
611 posicialSocial[jogadorDaVezç) = A
612 IF posicialSocial[jogadorDaVezç) = 8 THEN 630
613 CLS
614 LOCATE 5, 10: PRINT"NNËËË  CONGRATULA€™ES ËËËNN"
615 PRINT: PRINT: PRINT nomeComCidade[jogadorDaVezç)
    616 PRINT: PRINT  "Vocˆ agora ‚ "; Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç))
    617 nomeComCidade[jogadorDaVezç) = nome[jogadorDaVezç) + " de " + Cidade[jogadorDaVezç)
    618 PLAY"CDEFGABR2", "L8CDEFGABR2": PLAY"T240L6V12", "T240L2V9": PLAY"R8O6GABO7DCCEB", "O4GO5GE"
619 PLAY"DG#GDO6BGAB", "O4BO5EO4E"
620 PLAY"O7CDEDCO6BABG", "O4ABO5C"
621 PLAY"F#GADF#AO7CO6BC", "O5DF#D"
622 PLAY"BGABO7DCCED", "GGC"
623 PLAY"DGF#DO6BGAB", "O4BO5ED"
624 PLAY"EO7DCO6BAGDGF#G2", "CC#DG"
625 FOR K = 1 TO 1000 : NEXT
626 RETURN
627 IF A > 10 THEN A = 10
628 Z = Z + A
629 RETURN
630 CLS


function gameOver() {
        631 LOCATE 10, 10: PRINT"ÌÌÌ GAME OVER ËËË"
        632 FOR K = 1 TO 1000: NEXT
        633 CLS: LOCATE  7, 10: PRINT  Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); nomeComCidade[jogadorDaVezç)
        634 PRINT: PRINT: PRINT "      ÁÁÁÁÁÁ    VENCEU    ÁÁÁÁÁÁÁ"
        635 GOSUB 795 //<-- Só musiquinha
        636 GOSUB 430
        637 GOSUB 136
        638 GOTO 725
    }


639 PEST = Math.trunc(aleatorio[2) * 100)
    640 IF PEST = Math.trunc((aleatorio[) * 1000) / 10) THEN 642
641 RETURN
642 CLS
643 PP = Math.trunc(aleatorio[) * 70)
    644 NN = Math.trunc(nobres[jogadorDaVezç) * PP / 100) + 1
645 nobres[jogadorDaVezç) = nobres[jogadorDaVezç) - NN
646 CC = Math.trunc(bispos[jogadorDaVezç) * PP / 100) + 2
647 bispos[jogadorDaVezç) = bispos[jogadorDaVezç) - CC
648 MM = Math.trunc(comerciantes[jogadorDaVezç) * PP / 100) + 2
649 comerciantes[jogadorDaVezç) = comerciantes[jogadorDaVezç) - MM
650 SS = Math.trunc(servos[jogadorDaVezç) * PP / 100) + 2
651 servos[jogadorDaVezç) = servos[jogadorDaVezç) - SS
652 PRINT: PRINT" ËËËËù NOTICIAS CATASTROFICAS ùËËËËË"
653 GOSUB 775
654 PRINT: PRINT"A peste negra varreu sua cidade vitimando:"
655 PRINT NN; "  nobres +"
656 PRINT CC; "  bispos e padres +"
657 PRINT MM; "  comerciantes +"
658 PRINT SS; "  servos +"
659 FOR G = 1 TO 5000: NEXT: RETURN
660 CLS
661 LOCATE 4, 10: PRINT Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); nomeComCidade[jogadorDaVezç): PRINT: PRINT: PRINT      "ÌÌÌ  FALIU ÌÌÌ"
662 GOSUB 775: FORK = 1TO5000: NEXT
663 IF caixa[jogadorDaVezç) <= (-50000! * posicialSocial[jogadorDaVezç) / 3) THEN 730
664 CLS: LOCATE 2, 10: PRINT" Os Bancos tomaram seus bens"
665 GOSUB 775
666 CLS
667 mercados[jogadorDaVezç) = Math.trunc(mercados[jogadorDaVezç) * (Math.trunc(aleatorio[) * 10) / 10))
    668 palacios[jogadorDaVezç) = Math.trunc(palacios[jogadorDaVezç) * (Math.trunc(aleatorio[) * 10) / 10))
    669 catedrais[jogadorDaVezç) = Math.trunc(catedrais[jogadorDaVezç) * (Math.trunc(aleatorio[) * 10) / 10))
    670 moinhos[jogadorDaVezç) = Math.trunc(moinhos[jogadorDaVezç) * (Math.trunc(aleatorio[) * 10) / 10))
    671 terra[jogadorDaVezç) = Math.trunc(terra[jogadorDaVezç) * (Math.trunc(aleatorio[) * 10) / 10))
    672 naoDescobriAinda[jogadorDaVezç) = 1
673 caixa[jogadorDaVezç) = 100
674 comerciantes[jogadorDaVezç) = Math.trunc(comerciantes[jogadorDaVezç) * Math.trunc(aleatorio[) * 7) / 10)
675 reserva[jogadorDaVezç) = reserva[jogadorDaVezç) - 5000
676 IF terra[jogadorDaVezç) < 5000 THEN terra[jogadorDaVezç) = 5000
677 RETURN
678 Z = 5
679 FOR A = 1 TO F
680 IF A = 6 THEN 684
681 IF soldados[A) < soldados[jogadorDaVezç) THEN 684
682 IF soldados[A) < (1.2 * (terra[A) / 1000)) THEN 684
683 IF soldados[A) > soldados[Z) THEN Z = A
684 NEXT
685 IF Z = 5 THEN Cidade[5) = "BAR°O "
686 nomeComCidade[5) = "MALONE DE VINCENZA"
687 A1 = Math.trunc(aleatorio[) * 9000 + 1000)
        688 GOTO  690
689 A1 = soldados[Z) * 1000 - terra[Z) / 3
690 IF A1 > (terra[jogadorDaVezç) - 5000) THEN A1 = (terra[jogadorDaVezç) - 5000) / 2
691 PRINT: PRINT"    Digite <0> p/continuar "
692 GOSUB 708
693 IF F = 1 THEN 697
694 CLS
695 LOCATE 5, 10: PRINT Titulo[posicialSocial[Z) + sexo0H8[Z)); nomeComCidade[Z); " invadiu e anexou "; A1; "hectares de terras"
696 GOTO 699
697 CLS
698 LOCATE 5, 10: PRINT Titulo[Z); nomeComCidade[Z); " invadiu e anexou "; A1; "hectares de terras"
699 terra[Z) = terra[Z) + A1
700 terra[jogadorDaVezç) = terra[jogadorDaVezç) - A1
701 Z = Math.trunc(aleatorio[) * 40)
        702 IF Z > (soldados[jogadorDaVezç) - 15) THEN Z = soldados[jogadorDaVezç) - 15
703 LOCATE 5, 13: PRINT Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); ""; nomeComCidade[jogadorDaVezç); " perdeu"; Z; " soldados em batalha"
704 soldados[jogadorDaVezç) = soldados[jogadorDaVezç) - Z
705 PRINT: PRINT "Aperte <RETURN>"
706 prompt Z$
707 RETURN
708 Z$ = INKEY$
709 IF Z$ = "" THEN 708
710 RETURN



725 CLS: LOCATE 10, 10: PRINT" ÌÌÌ GAME OVER ÌÌÌ"
726 GOSUB 829
727 LOCATE 2, 10: prompt"Quer jogar novamente (S/N)"; F$
728 if (F$ = "S" || F$ = "s") THEN 832
729 if (F$ = "N" || F$ = "n") { desligarJogo() };
730 CLS: LOCATE 2, 10: PRINT"Os Bancos confiscaram seus bens..." : GOSUB 775: FORK = 1TO3000: NEXT
731 IF caixa[jogadorDaVezç) <= -20000 AND caixa[jogadorDaVezç) > -35000! THEN 734
732 IF caixa[jogadorDaVezç) <= -35000! AND caixa[jogadorDaVezç) > -50000! THEN 736
733 IF caixa[jogadorDaVezç) <= 50000! THEN 739
734 tempoCondenacao[jogadorDaVezç) = tempoCondenacao[jogadorDaVezç) + 1
735 GOTO 742
736 tempoCondenacao[jogadorDaVezç) = tempoCondenacao[jogadorDaVezç) + Math.trunc(aleatorio[) * 4)
737 IF tempoCondenacao[jogadorDaVezç) = 0 THEN tempoCondenacao[jogadorDaVezç) = 1
738 GOTO 742
739 tempoCondenacao[jogadorDaVezç) = tempoCondenacao[jogadorDaVezç) + Math.trunc(aleatorio[) * 6)
740 IF tempoCondenacao[jogadorDaVezç) < 2 THEN tempoCondenacao[jogadorDaVezç) = 3
741 GOTO 742
742 G$ = "o"
743 IF sexo0H8[jogadorDaVezç) = 8 THEN G$ = "a"
744 CLS: LOCATE 4, 10: PRINT Titulo[posicialSocial[jogadorDaVezç) + sexo0H8[jogadorDaVezç)); nomeComCidade[jogadorDaVezç)
745 PRINT"    Foi a julgamento,acusad"; G$; " de fraude"
746 PRINT: PRINT"    Desta forma foi condenad"; G$; " a "; tempoCondenacao[jogadorDaVezç); "anos    de pris„o"
747 GOSUB 826: FORK = 1TO5000: NEXT
748 IF F = 1 THEN 751
749 IF F > 1 THEN variavelNaoDescoberta[jogadorDaVezç) = 1
750 GOTO 752
751 anoCorrente[5) = anoCorrente[5) + tempoCondenacao[jogadorDaVezç)
752 mercados[jogadorDaVezç) = 0
753 palaciosç[jogadorDaVezç) = 0
754 catedrais[jogadorDaVezç) = 0
755 moinhos[jogadorDaVezç) = 0
756 terra[jogadorDaVezç) = 4000
757 naoDescobriAinda[jogadorDaVezç) = 1
758 caixa[jogadorDaVezç) = 0
759 comerciantes[jogadorDaVezç) = Math.trunc(comerciantes[jogadorDaVezç) / 4)
760 reserva[jogadorDaVezç) = 5000
761 GOTO 677


function desligarJogo{
    765 CLS: BEEP: LOCATE 10, 10: PRINT"    F I M "
    766 GOSUB 775: FOR K = 1 TO 1000: NEXT
    767 CLS: END
}
// ************************************************************************************************** { ROTINA MÚSICA DE ABERTURA
768 PLAY"O2L16BO3BBBO4CO3BABBF#B", "O3L8O2BO3BO4CO3ABF#"
769 PLAY"O2L16BO3BBBO4CO3BABBF#B", "O3L8O2BO3BO4CO3ABF#"
770 PLAY"O2L16BO3BF#BABBBO4CO3BO4DO3B", "O2L8BO3F#ABO4CD"
771 PLAY"O3L16BBO4CO3BABBBGBF#B", "O3L8BO4CO3ABGF#", "O2L2B."
772 PLAY"O2L16BO3BBBO4CO3BABBBF#B", "O2L8BO3O4CO3ABF#", "O2L2B."
773 PLAY"O2L16BO3BBBO4CO3BABBBF#B", "O2L8BO3O4CO3ABF#", "O2L2B."
774 RETURN
// ************************************************************************************************** ROTINA MÚSICA DE ABERTURA }

775 PLAY"S0M10000V15T180"
776 PLAY"L4O3GFL8EDECO2BABG"
777 PLAY"O3L4CEAGBO4L3CO3"
778 PLAY"L8AGFEL3EL4DGBO4C"
779 FOR K = 1 TO 1000: NEXT: RETURN
780 PLAY"R8O6GABO7DCCEB", "O4GO5GE"
781 PLAY"DG#GDO6BGAB", "O4BO5EO4E"
782 PLAY"O7CDEDCO6BABG", "O4ABO5C"
783 PLAY"F#GADF#AO7CO6BA", "O5DF#D"
784 PLAY"BGABO7DCCED", "GGC"
785 PLAY"DGF#DO6BGAB", "O4BO5ED"
786 PLAY"EO7DCO6BAGDGF#G2", "CC#DG"
787 FOR K = 1 TO 1000: NEXT
788 RETURN
789 PLAY"M2000S11T255O3CCEEGGAAA#A#AAGGEE"
790 PLAY"FFAAO4CCDDD#D#DDCCO3AA"
791 PLAY"GGBBO4DDEEO3FFAAO4CCDD"
792 RETURN
793 SOUND 7, 56: SOUND 8, 15: SOUND 1, 0
794 SOUND 0, 50: FOR I = 1 TO 200: NEXT: SOUND 0, 100: FOR I = 1 TO 200: NEXT I: GOTO 764
795 PLAY"v10t180", "v9t180"
796 PLAY"o4l8deL4f#g", "l4o1do2ao3d"
797 PLAY"o4l2al4bgea", "l4o1do2ao3do1do2ao3d"
798 PLAY"o4l2f#.l8edef#ge", "o1l4do2ao3do1do2ao3d"
799 PLAY"o4l2f#gl4e.l8f#", "o1l4do2ao3do1do2ao3d"
800 PLAY"o4l2d..l8el4f#g", "l4o1do2ao3do1do2ao3d"
801 PLAY"o4l4aabgea", "l4o1do2ao3do1do2ao3d"
802 PLAY"o4l2f#.l8edef#ge", "l4o1do2ao3do1do2ao3d"
803 PLAY"o4l8f#f#gf#edc#o3bo4c#def#", "l4o1do2ao3do1do2ao3d"
804 PLAY"o4l2d.l4f#ed", "l4o1do2ao3do1do2ao3d"
805 PLAY"o4l1f#l4ed", "l4o1Do2ao3Do1Do2ao3d"
806 PLAY"o4l2a.l4f#ed", "l4o1do2ao3do1do2ao3d"
807 PLAY"o4l2agl8eeef#", "l4o1do2ao3do1do2ao3d"
808 PLAY"o4l2d.l8gf#l4ed", "l4o1do2ao3do1do2ao3d"
809 PLAY"oo4l2f#.l8gf#l4ed", "l4o1do2ao3do1do2ao3d"
810 PLAY"o4l2a.l8edef#ge", "l4o1do2ao3do1do2ao3d"
811 PLAY"o4l8f#f#ef#gf#edc#ded#", "o1l4do2ao3do1do2ao3d"
812 PLAY"o4l2d.l8o3del4f#g", "l4o1do2ao3do1do2ao3d"
813 PLAY"o3l4aabgea", "l4o1do2ao3do1do2ao3d"
814 PLAY"o3l2f#.l8edef#ge", "l4o1do2ao3do1do2ao3d"
815 PLAY"o3l8f#f#gf#edc#o2bo3c#def#", "l1o1d."
816 PLAY"o3l2d.l4f#ed", "l4o1do2ao3do1do2ao3d"
817 PLAY"o3l2f#.l4f#ed", "l4o1do2ao3do1do2ao3d"
818 PLAY"o3l2a.l4f#ed", "l4o1do2ao3do1do2ao3d"
819 PLAY"o3l4al8gf#edc#o2bo3c#def#", "l1o1d."
820 PLAY"o3l2d.o4l8gf#l4ed", "l4o1do2ao3do1do2ao3d"
821 PLAY"o4l2f#.l8gf#ef#dd", "l4o1do2ao3do1do2ao3d"
822 PLAY"o4l2a.l8gf#ef#ge", "l4o1do2ao3do1do2ao3d"
823 PLAY"o4l8f#gaf#gagf#edef#", "o1l4do2ao3do1do2ao3d"
824 PLAY"l1d", "l4o1do2ao3do1d"
825 RETURN
826 DATA 100, 125, 112, 170, 170, 112, 100, 125
827 RESTORE: SOUND 7, 56: SOUND 8, 16: SOUND 1, 0: SOUND 12, 36: FOR I = 1 TO 8: READ A: SOUND 0, A: SOUND 13, 0: FOR P = 1 TO 150: NEXT P: IF I = 4 THEN FOR P = 1 TO 150: NEXT P: NEXT I ELSE NEXT I
828 RETURN
829 SOUND 7, 56: SOUND 8, 15: SOUND 1, 0: SOUND 9, 15: SOUND 3, 0
830 SOUND 0, 190: SOUND 2, 192: FOR I = 1 TO 400: NEXT I: SOUND 0, 250: SOUND 2, 253: FOR I = 1 TO 400: NEXT I
831 RETURN
832 SOUND 7, 56: SOUND 8, 15: SOUND 1, 0
833 FOR L = 230 TO 100 STEP - .5: SOUND 0, L: NEXT L: SOUND 0, 0: FOR I = 1 TO 150: NEXT I
inicioJogo(); //  834 GOTO 63

function aleatorio[) { //********************************** TRANSFERIDA
    return Math.random();
}