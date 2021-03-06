' ****************************************
' INITIALIZE                            **
' ****************************************
10 ' SANTA PARAVIA EN FIUMACCIO
20 ' BY REV. GEORGE BLANK  LEECHBURG, PA. 15656
30 CLEAR 700
40 DEFINT A-J,M-Q,T,V,W
50 Y(0)=1400
' ****************************************
' INPUT                                 **
' ****************************************
60 DATA"SIR ","BARON ","COUNT ","MARQUIS ","GRAND DUKE ","PRINCE ","* H.R.H. KING "
70 DATA"LADY ","BARONESS ","COUNTESS ","MARQUISE ","DUCHESS ","GRAND DUCHESS ","PRINCESS ","* H.R.H. QUEEN "
80 DATA"SANTA PARAVIA","FIUMACCIO","TORRICELLA","MOLINETTO","FONTANILE","ROMAGNA"
90 '* SET UP MATRICES *
100 CLS:PRINT:PRINT"SANTA PARAVIA EN FIUMACCIO"
110 PRINT:FOR A=1 TO 16:READ A$:NEXT
120 INPUT"HOW MANY PEOPLE WANT TO PLAY (1 TO 6)";F
130 FOR A=1 TO F:READ T$(A)
140 PRINT:PRINT"WHO IS THE RULER OF ";T$(A);
150 INPUT N$(A)
160 N$(A)=N$(A)+" OF "+T$(A)
170 PRINT"IS ";N$(A);" A MAN OR WOMAN";
180 V(A)=0:INPUT A$
190 IF LEFT$(A$,1)="W" V(A)=8
200 G(A)=25:H(A)=10:I(A)=5:J(A)=2:O(A)=1420+RND(35)
210 K(A)=1000:L(A)=10000:R(A)=5000:T(A)=1:U(A)=1
220 N(A)=4:P(A)=25:Q(A)=5:M(A)=25:S(A)=2000
230 NEXT
240 FOR A=1 TO F
250 RESTORE
260 B=V(A)+T(A)
270 FOR C=1 TO B
280 READ T$(A)
290 NEXT C
300 NEXT A
310 INPUT"DO YOU WISH INSTRUCTIONS";A$
320 IF LEFT$(A$,1)="N" THEN 340
330 GOSUB 3870
340 PRINT"1. APPRENTICE  2. JOURNEYMAN  3. MASTER  4 GRAND MASTER"
350 INPUT"ENTER LEVEL OF PLAY DESIRED";U(0)
360 IF U(0)<1 U(0)=1
370 IF U(0)>4 U(0)=4
380 U(0)=U(0)+5
' ****************************************
' CONTROL                               **
' ****************************************
400 E=E+1
410 IF T(E)=-1 E=E+1
420 '*-TEST FOR END OF GAME AFTER DEATH-*
430 IF (T(1)<1) AND (T(2)<1) AND (T(3)<1) AND (T(4)<1) AND (T(5)<1) AND (T(6)<1) THEN 4060
440 IF E>F THEN E=0:Y(0)=Y(0)+1:GOTO 400
450 IF Y(0)>O(E) THEN 400
460 IF Y(0)=O(E) THEN 640
470 GOSUB 860
480 GOSUB 1500
490 GOSUB 2010
500 GOSUB 1740
510 GOSUB 2520
520 GOSUB 2980
530 GOSUB 3340
540 GOTO 400
' ****************************************
' COMPARISON                            **
' ****************************************
560 CLS
570 PRINT"NOBLES SOLDIERS CLERGY MERCHANTS SERFS   LAND   TREASURY"
580 PRINT:FOR A=1 TO F:PRINT T$(A);N$(A)
590 PRINTN(A);TAB(7) P(A);TAB(16) Q(A);TAB(23) M(A);TAB(32) S(A);TAB(40) L(A);TAB(50) K(A)
600 NEXT
610 PRINT:INPUT"  ( PRESS ENTER )";A$
620 RETURN
' ****************************************
' OBITUARY                              **
' ****************************************
640 CLS:PRINT"VERY SAD NEWS":PRINT
650 PRINT T$(E);N$(E);" HAS JUST DIED"
660 T(E)=-1:Y=RND(8)
670 IF Y(0)>1450 PRINT"OF OLD AGE AFTER A LONG REIGN.":GOTO 730
680 IF Y<4 PRINT"OF PNEUMONIA AFTER A COLD WINTER IN A DRAFTY CASTLE."
690 IF Y=5 PRINT"IN A SMALLPOX EPIDEMIC."
700 IF Y=4 PRINT"OF TYPHOID AFTER DRINKING CONTAMINATED WATER."
710 IF Y=6 PRINT"AFTER BEING ATTACKED BY ROBBERS WHILE TRAVELING."
720 IF Y>6 PRINT"OF FOOD POISONING."
730 PRINT
740 INPUT"  ( PRESS ENTER )";A$
750 GOSUB 2520
760 GOSUB 560
770 GOTO 400
' ****************************************
' MINOR                                 **
' ****************************************
790 I!=INT(I!):RETURN
800 C!=INT(C!):RETURN
810 S!=INT(S!):RETURN
820 K(E)=INT(K(E)):RETURN
830 Z=RND(A)*S(E)/100:Z%=Z:PRINT Z%;"SERFS BORN THIS YEAR.":S(E)=S(E)+Z%:RETURN
840 Z=RND(A)*S(E)/100:Z%=Z:PRINT Z%;"SERFS DIE THIS YEAR.":S(E)=S(E)-Z%:RETURN
850 '* AGRICULTURAL CALCULATIONS *
860 W=(RND(5)+RND(6))/2
870 ON W GOTO 880,900,920,940,960
880 W$="DROUGHT    FAMINE THREATENS"
890 GOTO 980
900 W$="BAD WEATHER    POOR HARVEST"
910 GOTO960
920 W$="NORMAL WEATHER   AVERAGE HARVEST"
930 GOTO 980
940 W$="GOOD WEATHER    FINE HARVEST"
950 GOTO 980
960 W$="EXCELLENT WEATHER   GREAT HARVEST"
970 '* RATS EAT GRAIN *
980 R=RND(50)
990 R(E)=(R(E)*100-R(E)*R)/100
1000 '* GRAIN HARVEST *
1010 X=L(E):Y=(S(E)-D(E)*100)*5:IF Y<0 Y=0
1020 IF Y<X THEN X=Y
1030 Y=R(E)*2:IF Y<X THEN X=Y
1040 Y=W-.5:H!=X*Y:R(E)=R(E)+H!
1050 '* GRAIN DEMAND *
1060 D!=N(E)*100+C(E)*40+M(E)*30+P(E)*10+S(E)*5
1070 '* PRICE OF LAND *
1080 L=(3*W+RND(6)+RND(6)+10)/10
1090 IF H!<1 Y=2:GOTO 1110
1100 Y=D!/H!:IF Y>2 Y=2
1110 IF Y<.8 Y=.8
1120 L=L*Y:L=INT(L*10):L=L/10
1130 '* PRICE OF GRAIN
1140 Z=6-W
1150 G=(Z*3+RND(5)+RND(5))/5*Y*20
1160 RETURN
' *********************************************************
' STEWARD - Print summary od grain and market conditions **
' *********************************************************
1180 PRINT
1190 PRINT"RATS ATE";R;" % OF YOUR GRAIN RESERVES."
1200 PRINT W$;" (";H!;" STERES)."
1210 PRINT:IF K(E)<32766 GOSUB 820
1220 PRINT"GRAIN      GRAIN     PRICE OF   PRICE OF   TREASURY"
1230 PRINT"RESERVE    DEMAND     GRAIN      LAND"
1240 PRINT R(E);TAB(11) D!;TAB(22) G;TAB(33) L;TAB(44) K(E)
1250 PRINT"STERES     STERES    1000 ST.   HECTARE    GOLD FLORINS"
1260 RETURN
' ****************************************
' JUSTICE                               **
' ****************************************
1280 J=(J(E)*300-500)*T(E):ON J(E) GOTO 1290,1310,1330,1350
1290 J$="VERY FAIR"
1300 GOTO 1360
1310 J$="MODERATE"
1320 GOTO 1360
1330 J$="HARSH"
1340 GOTO 1360
1350 J$="OUTRAGOUS"
1360 Y=150-G(E)-H(E)-I(E):IF Y<1 Y=1
' ****************************************
' TAXES                                 **
' ****************************************
1380 C!=(N(E)*100+Q(E)*75+M(E)*20)*(Y/100)+U(E)*100
1390 S!=(N(E)*50+M(E)*25+U(E)*10)*(Y/100)*(5-J(E))/2
1400 I!=N(E)*250+U(E)*20+(10*J(E)*N(E))*(Y/100)
1410 C!=C!*G(E)/100:IF C!<32760 GOSUB 800
1420 S!=S!*H(E)/100:IF S!<32760 GOSUB 810
1430 I!=I!*I(E)/100:IF I!<32760 GOSUB 790
1440 PRINT"STATE REVENUES   ";J+C!+S!+I!;"GOLD FLORINS"
1450 PRINT"STATE REVENUES","SALES TAX","INCOME TAX","JUSTICE"
1460 PRINT G(E);"%",H(E);"%",I(E);"%",J$
1470 PRINT C!,S!,I!,J;"FL."
1480 RETURN
' ****************************************
' HARVEST TIME                          **
' ****************************************
1490 '* MANAGE HARVEST *
1500 CLS:PRINT:PRINT T$(E);N$(E)
1510 GOSUB 1180
1520 PRINT
1530 PRINT"1.BUY GRAIN  2.SELL GRAIN  3.BUY LAND  4.SELL LAND"
1540 INPUT" ( ENTER 0 TO CONTINUE )";I!
1550 IF I!>4 THEN 1530
1560 IF I!<1 THEN RETURN
1570 ON I! GOTO 1580,1620,1660,1690
1580 INPUT"HOW MUCH GRAIN DO YOU WANT TO BUY";I!
1590 K(E)=K(E)-(I!*G/1000):R(E)=R(E)+I!
1600 CLS:PRINT:PRINT T$(E);N$(E):GOSUB 1210
1610 GOTO 1520
1620 INPUT"HOW MUCH GRAIN DO YOU WISH TO SELL";I!
1630 IF I!>R(E) PRINT"YOU DON'T HAVE IT.":PRINT:GOTO 1620
1640 K(E)=K(E)+(I!*G/1000):R(E)=R(E)-I!
1650 GOTO 1600
1660 INPUT"HOW MANY HECTARES DO YOU WANT TO BUY";I!
1670 L(E)=L(E)+I!:K(E)=K(E)-(I!*L)
1680 GOTO 1600
1690 INPUT"HOW MANY HECTARES DO YOU WANT TO SELL";I!
1700 IF I!>(L(E)-5000) PRINT"YOU CAN'T SELL THAT MUCH.":GOTO 1690
1710 L(E)=L(E)-I!:K(E)=K(E)+(I!*L)
1720 GOTO 1600
' ****************************************
' TAX CHANGE                            **
' ****************************************
1730 '* DISPLAY TAXES *
1740 CLS:PRINT:PRINT T$(E);N$(E)
1750 PRINT:GOSUB 1280
1760 PRINT:PRINT"1. CUSTOMS DUTY  2. SALES TAX  3. WEALTH TAX  4. JUSTICE"
1770 INPUT" ( ENTER TAX NUMBER FOR CHANGES, ELSE 0 TO CONTINUE )";I
1780 IF I>4 PRINT:GOTO 1760
1790 IF I<1 THEN 1940
1800 ON I GOTO 1810,1850,1880,1910
1810 INPUT"NEW CUSTOMS DUTY ( 0 TO 100 )";I
1820 IF I>100 I=100
1830 IF I<0 I=0
1840 G(E)=I:GOTO 1740
1850 INPUT"NEW SALES TAX ( 0 TO 50 )";I
1860 IF (I>50) OR (I<0) I=5
1870 H(E)=I:GOTO 1740
1880 INPUT"ENTER NEW WEALTH TAX ( 0 TO 25 )";I
1890 IF (I>25) OR (I<0) I=0
1900 I(E)=I:GOTO 1740
1910 INPUT"JUSTICE: 1. VERY FAIR  2. MODERATE 3. HARSH 5. OUTRAGOUS";I
1920 IF (I>4) OR (I<1) THEN I=1
1930 J(E)=I:GOTO 1740
' ****************************************
' REVENUE                               **
' ****************************************
1940 K(E)=K(E)+C!+S!+I!+J
1950 '* INTEREST CHARGE *
1960 IF K(E)<0 THEN K(E)=K(E)*1.5
1970 '* BANKRUPTCY TEST *
1980 IF K(E)<(-10000*T(E)) GOTO 3630
1990 RETURN
' ****************************************
' POPULATION                            **
' ****************************************
2000 '* POPULATION *
2010 PRINT
2020 INPUT"HOW MUCH GRAIN WILL YOU RELEASE FOR FOR CONSUMPTION";G!
2030 IF G!<(R(E)/5) PRINT"YOU MUST RELEASE AT LEAST 20% OF YOUR RESERVES.":GOTO 2020
2040 IF G!>(R(E)-(R(E)/5))PRINT"YOU MUST KEEP AT LEAST 25%.":GOTO 2020
2050 R(E)=R(E)-G!:CLS:PRINT:PRINT T$(E);N$(E):PRINT
2060 Z=G!/D!-1:IF Z>0 Z=Z/2
2070 IF Z>.25 Z=Z/10+.25
2080 Z%=50-G(E)-H(E)-I(E):IF Z%<0 Z%=Z%*J(E)
2090 Z%=Z%/10:IF Z%>0 Z%=Z%+3-J(E)
2100 Z=Z+(Z%/10):IF Z>.5 Z=.5
2110 IF G!<(D!-1) THEN 2340
2120 A=7:GOSUB 830
2130 A=3:GOSUB 840
2140 IF (G(E)+H(E))<35 M(E)=M(E)+RND(4)
2150 IF I(E)<RND(20) N(E)=N(E)+RND(2)-1:Q(E)=Q(E)+RND(3)-1
2160 IF G!<(D!+D!*.3) THEN 2270
2170 Z%=S(E)/1000
2180 Z=(G!-D!)/D!*10
2190 Z=Z*Z%+RND(25)+RND(40):IF Z>32000 Z=32000
2200 Z%=Z:Z=RND(Z%)
2210 PRINT Z;"SERFS MOVE TO THE CITY":S(E)=S(E)+Z
2220 Z%=Z/5:Z=RND(Z%):IF Z>50 Z=50
2230 M(E)=M(E)+Z
2240 N(E)=N(E)+1
2250 Q(E)=Q(E)+2
2340 X=(D!-G!)/D!*100-9:X%=X:IF X>65 X=65
2350 IF X<0 X%=0:X=0
2360 A=3:GOSUB 830
2370 A=X%+8:GOSUB 840
2380 GOTO 2270
' ****************************************
' INJUSTICE                             **
' ****************************************
2260 '* INJUSTICE PENALTY *
2270 IF J(E)<3 THEN 2320
2280 J!=S(E)/100*(J(E)-2)*(J(E)-2)
2290 J!=RND(J!)
2300 S(E)=S(E)-J!
2310 PRINT J!;"SERFS FLEE HARSH JUSTICE."
2320 GOTO 2390
2330 '* FOOD SHORTAGE *
' ****************************************
' TREASURY                            **
' ****************************************
2390 Z=A(E)*75:K(E)=K(E)+Z:IF Z>0 PRINT"YOUR MARKET EARNED";Z;"FLORINS RENT."
2400 IF S(E)<32766 S!=S(E):GOSUB 810:S(E)=S!
2410 Z=D(E)*(55*RND(250)):IF Z>0 K(E)=K(E)+Z:PRINT"YOUR WOOLEN MILL EARNED";Z;"FLORINS."
2420 Z=P(E)*3:PRINT"YOU PAID YOUR SOLDIERS";Z;" FLORINS.":K(E)=K(E)-Z
' ****************************************
' INVASION                              **
' ****************************************
2430 '* INVASION *
2440 IF (L(E)/1000)>P(E) THEN 3700
2450 IF (L(E)/500)<P(E) THEN 2490
2460 FOR A=1 TO F:IF A=E THEN 2480
2470 IF P(A)>(P(E)*2.4) THEN 3700
2480 NEXT
2490 INPUT"  ( PRESS ENTER )";A$
2500 RETURN
' ****************************************
' MAP                                   **
' ****************************************
2510 '* DRAW MAP *
2520 CLS
2530 L%=(L(E)/1000):IF L%<10 X=80:Y=27:GOTO 2600
2540 IF L%<30 X=80:Y=27-(L%-10):GOTO 2600
2550 IF L%<50 X=60:Y=27-(L%-30):GOTO 2600
2560 IF L%<70 X=40:Y=27-(L%-50):GOTO 2600
2570 IF L%<90 X=20:Y=27-(L%-70):GOTO 2600
2580 IF L%<110 X=1:Y=27-(L%-90):GOTO 2600
2590 X=1:Y=7
2600 FOR Z=X TO 127:SET(Z,Y):NEXT Z
2610 FOR Z=Y TO 47:SET(X,Z):NEXT Z
2620 IF (P(E)-5)<(L(E)/1000) THEN 2660
2630 FOR A=X+1 TO X+6:FOR B=Y+1 TO Y+5:SET(A,B):NEXT B:NEXT A:SET(X,Y-1):SET(X+2,Y-1):SET(X+4,Y-1):SET(X+6,Y-1)
2640 IF (P(E)/2)<(L(E)/1000) THEN 2660
2650 FOR A=X+7 TO X+10:FOR B=Y+1 TO Y+5:SET(A,B):NEXT B:NEXT A:SET(X+8,Y-1):SET(X+10,Y-1):RESET(X+3,Y+2):RESET(X+7,Y+4):SET(X+1,Y-1):SET(X+9,Y-1):SET(X,Y-2):SET(X+2,Y-2):SET(X+8,Y-2):SET(X+10,Y-2)
2660 Z=C(E)+1:IF Z>7 THEN Z=7
2670 ON Z GOTO 2750,2740,2720,2710,2700,2690,2680
2680 FORA=96TO110:SET(A,30):NEXTA:RESET(102,30):RESET(104,30)
2690 FORA=96TO99:FORB=24TO29:SET(A,B):NEXTB:NEXTA
2700 FORA=107TO110:FORB=24TO29:SET(A,B):NEXTB:NEXTA
2710 FORB=22TO24:SET(103,B):NEXTB:SET(102,23):SET(104,23)
2720 FORA=101TO105:FORB=25TO26:SET(A,B):NEXTB:NEXTA
2730 RESET(101,25):RESET(105,25)
2740 FORA=100TO106:FORB=27TO29:SET(A,B):NEXTB:NEXTA:RESET(102,29):RESET(104,29)
2750 Z=B(E)*2:IF Z=0 THEN 2800
2760 IF Z>9 SET(73,32):SET(75,32):SET(89,32):SET(91,32):SET(74,31):SET(90,31)
2770 IF Z>8 Z=9:FORA=80TO84:FORB=30TO32:SET(A,B):NEXTB:NEXTA:RESET(81,32):RESET(83,31):SET(81,29):SET(83,29):SET(82,28)
2780 FORA=(82-Z)TO(82+Z):FORB=33TO35:SET(A,B):NEXTB:NEXTA
2790 FORA=(83-Z)TO(81+Z)STEP2:RESET(A,34):NEXTA:RESET(82,35)
2800 Z=S(E)-D(E)*100:IF Z<1 Z=1
2810 Z=Z*5/L(E)*10+1:IF Z>10 Z=10
2820 Z=(Z/10)*(45-Y):Z=INT(47-Z)
2830 FORA=119TO127:SET(A,Z):NEXTA:RESET(122,Z):RESET(123,Z):RESET(125,Z)
2840 FORA=119TO127STEP2:SET(A,Z+1):NEXTA:SET(118,Z-1):SET(127,Z-1)
2850 Z=A(E)*2:IF Z=0 THEN 2880
2860 IF Z>((126-X)-2) Z=((126-X)-2)
2870 FORA=XTOX+ZSTEP2:SET(A,39):SET(A+1,39):SET(A+1,40):SET(A+1,41):NEXTA
2880 Z=D(E):IF Z=0 THEN 2920
2890 IF Z>(126-X) Z=126-X
2900 FORA=126-ZTO127:FORB=45TO47:SET(A,B):NEXTB:NEXTA
2910 FORA=127-ZTO126STEP2:RESET(A,46):NEXTA
2920 PRINT@644,"YEAR";
2930 PRINT@707,Y(0);
2940 PRINT@0,T$(E);N$(E);
2950 INPUT" ( ENTER 0 )";A$
2960 RETURN
' ****************************************
' INVEST                                **
' ****************************************
2970 '* INVESTMENTS *
2980 CLS:PRINT:PRINTT$(E);N$(E):PRINT"STATE PURCHASES":PRINT
2990 PRINT"1. MARKETPLACE            1000 FLORINS"
3000 PRINT"2. WOOLEN MILL            2000 FLORINS"
3010 PRINT"3. PALACE (PARTIAL)       3000 FLORINS"
3020 PRINT"4. CATHEDRAL (PARTIAL)    5000 FLORINS"
3030 PRINT"5. EQUIP ONE PLATOON OF SERFS AS SOLDIERS 500 FLORINS"
3040 PRINT:PRINT"YOU HAVE";K(E);"GOLD FLORINS":PRINT
3050 PRINT"TO CONTINUE, ENTER 0, TO COMPARE STANDINGS ENTER 6"
3060 INPUT"YOUR CHOICE";I
3070 CLS:IF I<1 RETURN
3080 IF I>5 GOSUB 560:GOTO 2980
3090 ON I GOTO 3140,3100,3190,3240,3290
3100 D(E)=D(E)+1
3110 K(E)=K(E)-2000
3120 U(E)=U(E)+.25
3130 GOTO 2980
3140 A(E)=A(E)+1
3150 M(E)=M(E)+5
3160 K(E)=K(E)-1000
3170 U(E)=U(E)+.1
3180 GOTO 2980
3190 B(E)=B(E)+1
3200 N(E)=N(E)+RND(2)
3210 K(E)=K(E)-3000
3220 U(E)=U(E)+.5
3230 GOTO 2980
3240 C(E)=C(E)+1
3250 Q(E)=Q(E)+RND(6)
3260 K(E)=K(E)-5000
3270 U(E)=U(E)+1
3280 GOTO 2980
3290 P(E)=P(E)+20
3300 S(E)=S(E)-20
3310 K(E)=K(E)-500
3320 GOTO 2980
' ****************************************
' TITLE                                 **
' ****************************************
' PURPOSE: Calculate new title
' PROCESS: Each of the significant criteria is examined in turn; markets, palaces, cathedrals, mills, treasury, land, merchants, nobles, soldiers, clergy, serfs, economic factor. Each of them is divided by a equalization factor relative to their importance, then in the subroutine at 3550, their effect on any title is limited so that one factor does not dominate the whole game. The current factor is added to the scores for the previous ones. In line 3470 the total is divided by the skill level. then the level of justice is subtracted to get the title deserved. Line 3530 tests for the winner of the game. 
3330 '* CALCULATE NEW TITLE *
3340 Z=0
3350 A=A(E):GOSUB 3550
3360 A=B(E):GOSUB 3550
3370 A=C(E):GOSUB 3550
3380 A=D(E):GOSUB 3550
3390 A=K(E)/5000:GOSUB 3550
3400 A=L(E)/6000:GOSUB 3550
3410 A=M(E)/50:GOSUB 3550
3420 A=N(E)/5:GOSUB 3550
3430 A=P(E)/50:GOSUB 3550
3440 A=Q(E)/10:GOSUB 3550
3450 A=S(E)/2000:GOSUB 3550
3460 A=U(E)/5:GOSUB 3550
3470 A=Z/U(0)-J(E):A=INT(A):IF A>8 A=8
3480 IF (Y(0)+2)=O(E) T(E)=T(E)+1
3490 IF T(E)>=A THEN 3540
3500 T(E)=A
3510 RESTORE
3520 FOR B=1 TO (T(E)+V(E)):READ T$(E):NEXT
3530 IF T(E)=8 THEN 3600
3540 RETURN
3550 IF A>10 A=10
3560 A=INT(A)
3570 Z=Z+A
3580 RETURN
' ****************************************
' ROYAL                                 **
' ****************************************
'Announces winner, prints' display and comparison, calls END 
3590 '* KING OR QUEEN *
3600 CLS:PRINT:PRINT"GAME OVER ";T$(E);N$(E);" WINS."
3610 GOSUB 2530:GOSUB 560:GOTO 4070
' ****************************************
' BANKRUPT                              **
' ****************************************
'Penalizes player who borrows too much money. PROCESS: All buildings are eliminated, all but 6000 hectares of land seized, treasury is set to 100 Florins
3620 '* BANKRUPTCY *
3630 CLS:PRINT:PRINT T$(E);N$(E);" IS BANKRUPT."
3640 PRINT:PRINT"CREDITORS HAVE MUCH OF YOUR ASSETS."
3650 PRINT
3660 INPUT" ( PRESS ENTER )";A$
3670 A(E)=0:B(E)=0:C(E)=0:D(E)=0:L(E)=6000:U(E)=1:K(E)=100
3680 RETURN
' ****************************************
' INVASION - from 4940                  **
' ****************************************
'PURPOSE: Penalty for inadequate defenses
'PROCESS: A stronger player invades and seizes land if ratio of soldiers to land falls below 1 to 1000. An invasion is possible with a ratio of less than 1 to 500 if another player is particularly strong. If no other player is stronger, Baron Peppone of Monterana invades. In addition to land lost, some soldiers are killed in battle. 
3690 '* INVASION ( FROM 4940 ) *
3700 Z=0:FOR A=1 TO F
3710 IF A=E THEN 3750
3720 IF P(A)<P(E) THEN 3750
3730 IF P(A)<(1.2*L(A)/1000)) THEN 3750
3740 IF P(A)>P(Z) Z=A
3750 NEXT
3760 IF Z=0 T$(0)=" BARON ":N$(0)="PEPPONE OF MONTERANA":A!=RND(9000)+1000:GOTO 3780
3770 A!=P(Z)*1000-L(Z)/3
3780 IF A!>(L(E)-5000) A!=(L(E)-5000)/2
3790 PRINT T$(Z);N$(Z);" INVADES AND SEIZES";A!
3800 PRINT"HECTARES OF LAND !"
3810 L(Z)=L(Z)+A!:L(E)=L(E)-A!
3820 Z=RND(40):IF Z>(P(E)-15) Z=P(E)-15
3830 PRINT T$(E);N$(E);" LOSES";Z;" SOLDIERS IN BATTLE."
3840 P(E)=P(E)-Z:INPUT" ( PRESS ENTER )";A$
3850 RETURN
' ****************************************
' INSTRUCTION                           **
' ****************************************
' Give general idea of game to new player
3860 '* INSTRUCTION *
3870 CLS:PRINT"SANTA PARAVIA AND FIUMACCIO"
3880 PRINT"  YOU ARE THE RULER OF A 15TH CENTURY ITALIAN CITY-STATE."
3890 PRINT"IF YOU RULE WELL, YOU WILL RECIEVE HIGHER TITLES. THE"
3900 PRINT"FIRST PLAYER TO BECOME KING OR QUEEN WINS. LIFE EXPECTANCY"
3910 PRINT"THEN WAS BREIF, SO YOU MAY NOT LIVE LONG ENOUGH TO WIN."
3920 PRINT"  THE COMPUTER WILL DRAW A MAP OF YOUR STATE. THE SIZE"
3930 PRINT"OF THE AREA IN THE WALL GROWS AS YOU BUY MORE LAND. THE"
3940 PRINT"SIZE OF THE GUARD TOWER IN THE UPPER LEFT CORNER SHOWS"
3950 PRINT"THE ADEQUACY OF YOUR DEFENSES. IF IT SHRINKS, EQUIP MORE"
3960 PRINT"SOLDIERS ! IF THE HORSE AND PLOWMAN IS TOUCHING THE TOP WALL,"
3970 PRINT"ALL YOUR LAND IS IN PRODUCTION. OTHERWISE YOU NEED MORE"
3980 PRINT"SERFS, WHO WILL MIGRATE TO YOUR STATE IF YOU DISTRIBUTE "
3990 PRINT"MORE GRAIN THAN THE MINIMUM DEMAND. IF YOU DISTRIBUTE LESS"
4000 PRINT"GRAIN, SOME OF YOUR PEOPLE WILL STARVE, AND YOU WILL HAVE"
4010 PRINT"A HIGHER DEATH RATE. HIGH TAXES RAISE MONEY, BUT SLOW DOWN"
4020 PRINT"ECONOMIC GROWTH. ( PRESS ENTER TO BEGIN GAME )";
4030 INPUT A$
4040 CLS:RETURN
' ****************************************
' END                                  **
' ****************************************
4050 '* END GAME *
4060 GOSUB 2520:GOSUB 560
4070 PRINT"GAME IS OVER. PRESS ENTER FOR NEW GAME.";
4080 INPUT A$
4090 GOTO 10