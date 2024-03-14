let limite = 100

let a = (Math.floor(Math.random() * limite));

let b = (Math.floor(Math.random() * limite));

let tentativa = 0;

while (a != b) {
    if (b > a) {
        console.log("Tente novamente, o número secreto é menor que", b);
    } else if (b < a) {
       console.log("Tente novamente, o número secreto é maior que", b);
    } else {
        console.log("Parabéns, você digitou o número correto!", a);
    }
    tentativa++;
    b = Math.floor(Math.random() * limite);

}
console.log("Você tentou", tentativa, "vezes");
