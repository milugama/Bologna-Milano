var producaoGraos=0;
var terra=Array(4);
var servos=Array(4);
var jogadorDaVezç=1;
var DD=1;
var Y=2;
var X=3;

terra[jogadorDaVezç]=5000;
servos[jogadorDaVezç]=50;


producaoGraos = Math.trunc(Y * terra[jogadorDaVezç] / 1.5 + Y * X + (aleatorio() * servos[jogadorDaVezç]) - DD);

console.log(terra[jogadorDaVezç]);
console.log(servos[jogadorDaVezç]);
console.log(producaoGraos);
testeteste();


function aleatorio() { //********************************** TRANSFERIDA
    return Math.random();
}

function testeteste(){
    console.log("Teste:"+terra[jogadorDaVezç]);
}



