# Objetos, Dados e Assincronismo - Semana 05

Buscador de CEP (API ViaCEP) e Mini Pokédex (PokéAPI). Para ver, abrir o index.html no navegador.

## Por que Promise.all pode ser mais rápido que vários await seguidos?

Com vários await seguidos, cada requisição só começa depois que a anterior termina, então os tempos se somam.

Com Promise.all todas as requisições começam juntas e ele espera todas terminarem, então o tempo total é o da mais demorada.
