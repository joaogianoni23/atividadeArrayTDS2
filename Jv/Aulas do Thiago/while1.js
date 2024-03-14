//crie um algoritimo que peça dois
//números e mostre todos os números inteiros entre eles.

let a = 14;
let b = 64;

let inicio = 0;
let fim = 0;

if (a < b){
    inicio = a;
    fim = b;
} else {
    inicio = b;
    fim = a;
}

while (inicio <= fim) {
    console.log(inicio);
    inicio++;
}

console.log("terminou")

