var nome = Array(4);
var Cidade = Array(4);
var nomeComCidade = Array(4);
var sexo0H8 = Array(4);
Cidade[1]="Bologna";
Cidade[2]="Milano";
Cidade[3]="Torino";
Cidade[4]="Sicilia";

F = 0
while (F < 2 || F > 4) {
    F = prompt("Quantas pessoas (2 a 4) vão participar");
}
console.log("Após prompt F= " + F);
for (var A = 1; A <= F; A++) {
    console.log(A);
    nome[A] = prompt("Quem é o governante de " + Cidade[A] + " ?");
    nomeComCidade[A] = nome[A] + " de " + Cidade[A];
    F = prompt(nomeComCidade[A] + " é homem(H) ou mulher(M): ");
    if (F == "H") { sexo0H8[A] = 8; } else { sexo0H8[A] = 0 };
}