let fh = 78.8;
let resultado = (fh - 32) / 1.8;
let resultado2 = resultado.toFixed(1);
let mensagem = "A temperatura de sua casa em C° nesse exato momento é de ";
let mensagem2 = ",E em fh é ";
console.log(mensagem + resultado2 + mensagem2 + fh);