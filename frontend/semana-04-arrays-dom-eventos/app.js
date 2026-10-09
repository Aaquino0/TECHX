const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach(nome => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log(precosAcimaDe20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log(somaPrecos);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 3 },
    { nome: "Estojo", preco: 25 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log(nomesProdutos);

const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log(produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log(totalProdutos);

produtos.forEach(produto => console.log(`${produto.nome}: R$ ${produto.preco}`));

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog da Alana";

const textos = document.querySelectorAll(".texto");
textos.forEach(texto => console.log(texto.textContent));

const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Primeiro item</li><li>Segundo item</li>";

const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

terceiroItem.classList.add("destaque");
console.log(terceiroItem.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach(tarefa => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
});

lista.querySelector("li").classList.add("feito");
console.log(document.querySelectorAll("li").length);

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log(campoNome.value);
});

lista.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

const itemNovo = document.createElement("li");
itemNovo.textContent = "Item criado pelo JavaScript";
lista.append(itemNovo);

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", e => {
    e.preventDefault();
    const texto = campoTarefa.value.trim();

    if (texto !== "") {
        const item = document.createElement("li");
        item.textContent = texto;
        lista.append(item);
        campoTarefa.value = "";
    }
});
