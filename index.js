const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome:');
let salario_bruto = parseFloat(prompt('Digite seu Salario bruto:'));
let ir = salario_bruto * 0.10;
let salario_liquido = salario_bruto - ir;
console.log("salario recebido: R$" + salario_liquido);