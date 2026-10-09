const pedidos = [
    { cliente: "Bia", valor: 120, status: "pago" },
    { cliente: "", valor: 50, status: "pago" },
    { cliente: "Caio", valor: -10, status: "pago" },
    { cliente: "Duda", valor: 80, status: "pendente" }
];

const validos = pedidos.filter(p => p.cliente !== "" && typeof p.valor === "number" && p.valor > 0);
const pagos = validos.filter(p => p.status === "pago");
const total = pagos.reduce((soma, p) => soma + p.valor, 0);

pagos.forEach(p => console.log(`${p.cliente} — R$ ${p.valor.toFixed(2)}`));
console.log(`Total: R$ ${total.toFixed(2)}`);

const botaoCep = document.querySelector("#botao-cep");
const statusCep = document.querySelector("#status-cep");
const resultadoCep = document.querySelector("#resultado-cep");

function mostrar(titulo, valor) {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = titulo;
    dd.textContent = valor;
    resultadoCep.append(dt, dd);
}

document.querySelector("#form-cep").addEventListener("submit", async e => {
    e.preventDefault();
    const cep = document.querySelector("#cep").value.trim();

    if (!/^\d{8}$/.test(cep)) {
        statusCep.textContent = "CEP inválido";
        return;
    }

    statusCep.textContent = "Buscando...";
    botaoCep.disabled = true;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error("erro");
        const dados = await response.json();

        resultadoCep.replaceChildren();
        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado";
        } else {
            mostrar("Rua", dados.logradouro);
            mostrar("Bairro", dados.bairro);
            mostrar("Cidade", dados.localidade);
            mostrar("UF", dados.uf);
            statusCep.textContent = "";
        }
    } catch (erro) {
        statusCep.textContent = "Falha na conexão";
    }

    botaoCep.disabled = false;
});

const botaoPokemon = document.querySelector("#botao-pokemon");
const statusPokemon = document.querySelector("#status-pokemon");
const resultadoPokemon = document.querySelector("#resultado-pokemon");

document.querySelector("#form-pokemon").addEventListener("submit", async e => {
    e.preventDefault();
    const nome = document.querySelector("#pokemon").value.trim().toLowerCase();

    if (nome === "") {
        statusPokemon.textContent = "Digite um nome";
        return;
    }

    statusPokemon.textContent = "Buscando...";
    botaoPokemon.disabled = true;
    resultadoPokemon.replaceChildren();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

        if (response.status === 404) {
            statusPokemon.textContent = "Pokémon não encontrado";
        } else if (!response.ok) {
            throw new Error("erro");
        } else {
            const dados = await response.json();
            const titulo = document.createElement("h3");
            const imagem = document.createElement("img");
            const tipos = document.createElement("p");

            titulo.textContent = dados.name;
            imagem.src = dados.sprites.front_default;
            tipos.textContent = dados.types.map(t => t.type.name).join(", ");

            resultadoPokemon.append(titulo, imagem, tipos);
            statusPokemon.textContent = "";
        }
    } catch (erro) {
        statusPokemon.textContent = "Falha na conexão";
    }

    botaoPokemon.disabled = false;
});
