from abc import ABC, abstractmethod


class Cliente:
    def __init__(self, nome, email):
        self.nome = nome
        self.email = email

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, valor):
        if "@" not in valor:
            raise ValueError("Email inválido")
        self._email = valor

    def __str__(self):
        return f"{self.nome} ({self.email})"


class Conta(ABC):
    def __init__(self, cliente, saldo):
        self.cliente = cliente
        self.saldo = saldo

    @property
    def saldo(self):
        return self._saldo

    @saldo.setter
    def saldo(self, valor):
        if valor < 0:
            raise ValueError("Saldo não pode ficar negativo")
        self._saldo = valor

    @abstractmethod
    def atualizar_mes(self):
        pass

    def __str__(self):
        return f"{self.cliente.nome} - R$ {self.saldo:.2f}"

    def __repr__(self):
        return f"Conta({self.cliente.nome}, {self.saldo})"

    def __eq__(self, outra):
        return self.saldo == outra.saldo

    def __lt__(self, outra):
        return self.saldo < outra.saldo


class ContaCorrente(Conta):
    def __init__(self, cliente, saldo, tarifa):
        super().__init__(cliente, saldo)
        self.tarifa = tarifa

    def atualizar_mes(self):
        self.saldo = self.saldo - self.tarifa

    def __str__(self):
        return f"Corrente: {super().__str__()}"


class ContaPoupanca(Conta):
    def __init__(self, cliente, saldo, juros):
        super().__init__(cliente, saldo)
        self.juros = juros

    def atualizar_mes(self):
        self.saldo = self.saldo + self.saldo * self.juros

    def __str__(self):
        return f"Poupança: {super().__str__()}"


ana = Cliente("Ana", "ana@gmail.com")
bruno = Cliente("Bruno", "bruno@gmail.com")
carla = Cliente("Carla", "carla@hotmail.com")
diego = Cliente("Diego", "diego@yahoo.com")
print(ana)

contas = [
    ContaCorrente(ana, 1500, 20),
    ContaPoupanca(ana, 3000, 0.01),
    ContaCorrente(bruno, 800, 15),
    ContaPoupanca(carla, 500, 0.01),
    ContaCorrente(diego, 250, 15),
    ContaPoupanca(diego, 800, 0.02),
]

for conta in contas:
    conta.atualizar_mes()
    print(conta)

print(sorted(contas))
print(contas[0] == contas[1])

try:
    Cliente("Elisa", "elisa.gmail.com")
except ValueError as erro:
    print(erro)

try:
    ContaCorrente(bruno, -100, 15)
except ValueError as erro:
    print(erro)
