const readline = require("readline-sync");

console.log("\x1b[33m%s\x1b[0m", "Bem-vindo a calculadora");
console.log("\x1b[36m%s\x1b[0m", "================================");

let num1 = readline.question("\x1b[36mDigite o primeiro numero:\x1b[0m ");

if (isNaN(num1)) {
   console.log("\x1b[31m%s\x1b[0m", "Erro: Entrada invalida!");
   process.exit();
}

let operacao = readline.question(
   "\x1b[36mDigite a operacao (+, -, *, /, ^):\x1b[0m "
);

let num2 = readline.question("\x1b[36mDigite o segundo numero:\x1b[0m ");

if (isNaN(num2)) {
   console.log("\x1b[31m%s\x1b[0m", "Erro: Entrada invalida!");
   process.exit();
}

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let resultado;

switch (operacao) {
   case "+":
      resultado = num1 + num2;
      break;
   case "-":
      resultado = num1 - num2;
      break;
   case "*":
      resultado = num1 * num2;
      break;
   case "/":
      resultado = num1 / num2;
      break;
   case "^":
      resultado = num1 ** num2;
      break;
   default:
      console.log("\x1b[31m%s\x1b[0m", "Erro: Operação invalida!");
      process.exit();
}

console.log("\x1b[36m%s\x1b[0m", "================================");
console.log(
   "\x1b[33m%s\x1b[0m",
   `O resultado da operação ${num1} ${operacao} ${num2} é: ${resultado}`
);
