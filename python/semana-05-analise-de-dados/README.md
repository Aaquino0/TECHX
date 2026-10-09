# Análise de Dados - Semana 05

O programa lê o arquivo dados.csv e confere se o email, CPF, telefone e data estão no formato certo.

## Validações

- Email: tem que ter @ e terminar com .com ou parecido
- CPF: formato 000.000.000-00
- Telefone: formato (00) 00000-0000
- Data: formato dd/mm/aaaa
- Idade: tem que ser um número entre 0 e 120

Usei regex porque esses campos têm um formato fixo, então dá para conferir tudo de uma vez.

## Exceções

- FileNotFoundError: se o arquivo dados.csv não existir
- KeyError: se faltar alguma coluna no arquivo
- ValueError: se a idade não for número
- IdadeInvalidaError: criei essa para quando a idade passa de 120 ou é negativa

## Entrada

```
nome,email,cpf,telefone,data,idade
Ana Souza,ana.souza@gmail.com,123.456.789-10,(11) 91234-5678,15/03/2024,28
Bruno Lima,bruno.lima@hotmail,987.654.321-00,(21) 99876-5432,02/07/2023,35
Carla Dias,carla@empresa.com.br,11122233344,(31) 98765-4321,20/11/2024,41
```

## Saída

```
Registros válidos:
Ana Souza

Registros inválidos:
Bruno Lima - erro em: email
Carla Dias - erro em: cpf
```
