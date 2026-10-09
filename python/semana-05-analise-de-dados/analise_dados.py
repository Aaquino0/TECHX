import csv
import re


class IdadeInvalidaError(Exception):
    pass


def validar_email(email):
    return re.match(r"^[\w.]+@\w+\.\w+(\.\w+)?$", email) is not None


def validar_cpf(cpf):
    return re.match(r"^\d{3}\.\d{3}\.\d{3}-\d{2}$", cpf) is not None


def validar_telefone(telefone):
    return re.match(r"^\(\d{2}\)\s\d{5}-\d{4}$", telefone) is not None


def validar_data(data):
    return re.match(r"^\d{2}/\d{2}/\d{4}$", data) is not None


def validar_idade(idade):
    idade = int(idade)
    if idade < 0 or idade > 120:
        raise IdadeInvalidaError(f"idade {idade} fora do permitido")


validos = []
invalidos = []

try:
    with open("dados.csv", encoding="utf-8") as arquivo:
        leitor = csv.DictReader(arquivo)
        for linha in leitor:
            erros = []

            if not validar_email(linha["email"]):
                erros.append("email")
            if not validar_cpf(linha["cpf"]):
                erros.append("cpf")
            if not validar_telefone(linha["telefone"]):
                erros.append("telefone")
            if not validar_data(linha["data"]):
                erros.append("data")

            try:
                validar_idade(linha["idade"])
            except ValueError:
                erros.append("idade não é um número")
            except IdadeInvalidaError as erro:
                erros.append(str(erro))

            if erros:
                invalidos.append([linha["nome"], erros])
            else:
                validos.append(linha["nome"])
except FileNotFoundError:
    print("Arquivo dados.csv não encontrado.")
except KeyError as erro:
    print(f"A coluna {erro} não existe no arquivo.")
else:
    total = len(validos) + len(invalidos)

    print("--- RELATÓRIO ---")

    print("\nRegistros válidos:")
    for nome in validos:
        print(f"{nome}")

    print("\nRegistros inválidos:")
    for nome, erros in invalidos:
        print(f"{nome} - erro em: {', '.join(erros)}")

    print(f"\nTotal de registros: {total}")
    print(f"Válidos: {len(validos)}")
    print(f"Inválidos: {len(invalidos)}")
finally:
    print("\nAnálise finalizada.")
