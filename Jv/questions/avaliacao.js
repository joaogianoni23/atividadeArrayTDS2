//Iniciar contagem dos números;
let contador = 0;

//Fazer a contagem dos números ímpares;
while (contador <= 100) {
    //Dividir o número dado por 2 e se o resto for 1, o número é ímpar;
    if (contador % 2 == 1) {
        //Exibir contagem;
        console.log(contador);
    }
    //Adicionar comando para não ter looping infinito;
    contador++;
}

//Dividir o número do contador por 2;
let total = (Math.floor(contador / 2));

//Exibir resultado do total de números ímpares;
console.log("Total de números ímpares:" + total);

//Fazer potenciação do número total de ímpares;
let soma = (total ** 2);

//Exibir resultado da soma;
console.log("Soma:" + soma);
