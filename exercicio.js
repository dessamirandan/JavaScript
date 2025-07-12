// 1 - Declare quatro variáveis e exiba seus valore no terminal.  
console.log('Primeiro Exercício:');
console.log(' ');

let nome = 'Andressa';
const altura = 1.70;
let idade = 28;
let casada = true;

console.log(`Meu nome é ${nome}, tenho ${altura.toFixed(2)} de altura, possuo ${idade} anos.`)

console.log('É casada: ' + casada);

// 1.2 - Exiba os TIPOS das variáveis no terminal
console.log(' ');
console.log('Segundo Exercício:');
console.log(' ');

console.log(typeof nome);
console.log(typeof altura);
console.log(typeof idade);
console.log(typeof casada);


// 2 - Declarar duas variáveis do tipo STR e concatenar seus valores.
console.log('Terceiro Exercício:');
console.log(' ');

let primeiroNome = 'Andressa';
let segundoNome = 'Miranda';

console.log(primeiroNome + ' '+ segundoNome);

// 3 - Somar o valor de duas variáveis (numéricas)
console.log(' ');

let num1 = 12;
let num2 = 4;

let resultadoSoma = num1+num2;
console.log(`O resultado da soma de ${num1} por ${num2} é ${resultadoSoma}`);

// 4 - Subtrair o valor de duas variáveis (numéricas)

console.log(' ');


let resultadoSubtracao = num1-num2;
console.log(`O resultado da subtração de ${num1} por ${num2} é ${resultadoSubtracao}`);

// 5 - Multiplicar oConsole.log(" ")

console.log(' ');


let resultadoMultiplicacao = num1*num2;
console.log(`O resultado da multiplicação de ${num1} por ${num2} é ${resultadoMultiplicacao}`);

// 6 - Dividir o valor de duas variáveis numéricas

console.log(' ');



let resultadoDivisao = num1 / num2;

console.log(`O resultado da divisão de ${num1} por ${num2} é igual ${resultadoDivisao}`);


// 7 - Obter o resto da divisão realizada no exercício anterior.

console.log(' ');


let resto = num1 % num2;
console.log(`O resto da divisão de ${num1} por ${num2} é igual ${resto}`);
