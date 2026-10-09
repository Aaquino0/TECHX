console.log("--- BLOCO 1 ---");

let pontos = 50;
pontos = pontos + 10;
console.log(pontos);

const MAX_PONTOS = 100;
try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log(erro.name + ": const não pode receber outro valor depois de criada");
}

const nome = "Alana";
const idade = 20;
const estudante = true;
let indefinido;
const nulo = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
console.log(typeof indefinido);
console.log(typeof nulo);

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
console.log("Meu nome é " + nome + " e tenho " + idade + " anos");

console.log("--- BLOCO 2 ---");

console.log(ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log(erro.name + ": função de expressão não pode ser chamada antes de ser criada");
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

function dobroDeclarada(n) {
    return n * 2;
}

const dobroExpressao = function (n) {
    return n * 2;
};

const dobroArrow = n => n * 2;

console.log(dobroDeclarada(4));
console.log(dobroExpressao(5));
console.log(dobroArrow(6));

function dobroPadrao(n = 1) {
    return n * 2;
}

console.log(dobroPadrao());

console.log("--- BLOCO 3 ---");

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(7));

const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho": console.log("Pare"); break;
    case "amarelo": console.log("Atenção"); break;
    case "verde": console.log("Siga"); break;
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

for (let i = 1; i <= 20; i++) {
    console.log(i % 2 === 0 ? `${i} é par` : `${i} é ímpar`);
}

let numero = 1;
while (numero <= 20) {
    console.log(numero % 2 === 0 ? `${numero} é par` : `${numero} é ímpar`);
    numero++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda";
        case 3: return "Terça";
        case 4: return "Quarta";
        case 5: return "Quinta";
        case 6: return "Sexta";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}

console.log(diaDaSemana(3));
console.log(diaDaSemana(9));
