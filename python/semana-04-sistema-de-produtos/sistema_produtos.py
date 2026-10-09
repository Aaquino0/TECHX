produtos = []
quantidade = int(input("Quantos produtos? "))

for i in range(quantidade):
    nome = input("Nome: ")
    preco = float(input("Preço: "))
    categoria = input("Categoria: ")
    produtos.append([nome, preco, categoria])

valor = float(input("Mostrar produtos acima de qual valor? "))
produtos_filtrados = []

for produto in produtos:
    if produto[1] > valor:
        produtos_filtrados.append(produto)

produtos.sort(key=lambda produto: produto[1])
produtos_decrescente = sorted(produtos, key=lambda produto: produto[1], reverse=True)

categorias = set()
for produto in produtos:
    categorias.add(produto[2])

precos = []
for produto in produtos:
    precos.append(produto[1])

estatisticas = (min(precos), max(precos), sum(precos) / len(precos))

print("\n--- RELATÓRIO ---")

print("\nPreço crescente:")
for produto in produtos:
    print(f"{produto[0]} - R$ {produto[1]:.2f} - {produto[2]}")

print("\nPreço decrescente:")
for produto in produtos_decrescente:
    print(f"{produto[0]} - R$ {produto[1]:.2f} - {produto[2]}")

print(f"\nProdutos acima de R$ {valor:.2f}:")
for produto in produtos_filtrados:
    print(f"{produto[0]} - R$ {produto[1]:.2f}")

print(f"\nCategorias: {categorias}")

print(f"\nMenor preço: R$ {estatisticas[0]:.2f}")
print(f"Maior preço: R$ {estatisticas[1]:.2f}")
print(f"Média: R$ {estatisticas[2]:.2f}")
