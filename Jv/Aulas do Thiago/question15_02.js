//elabore um algoritimo que peça
//usuario inserir seu peso em quilogramas
//e sua altura em metros. Calcule o IMC usando a 
//fórmula: IMC = peso / (altura * altura).
//informe ao usuario em qual categoria de IMC ele se encontra
//(abaixo do peso, peso normal, sobrepeso, obesidade.)

let a = 67;
let b = 1.67;
 
let resultado = a / (b * b);
console.log(resultado);

if (resultado < 18.5) {
    console.log("abaixo do peso!");
} else if (resultado >= 18.5 && resultado <= 24.9) {
    console.log("normal!");
} else if (resultado >= 25 && resultado <= 29.9) {
    console.log("sobrepeso!");
} else {
    console.log("obeso!");
}

