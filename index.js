const readline = require("readline-sync");

let c = readline.questionInt("");

let palavras = [];

for (let i = 0; i < c; i++) {
  let palavra = readline.question("");

  if (palavra.length < 9 || palavra.length > 10000) {
    console.log("Informe no mínimo 9 caracteres ou no máximo 10000");
    break;
  } else {
    palavras.push(palavra);
  }
}

for (let j = 0; j < palavras.length; j++) {
  console.log(0.01 * palavras[j].length);
}
