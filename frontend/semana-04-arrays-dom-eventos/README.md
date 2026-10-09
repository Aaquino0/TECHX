# Arrays, DOM e Eventos - Semana 04

Exercícios de arrays, manipulação do DOM e eventos. Para ver, abrir o index.html no navegador com o console aberto (F12).

## Métodos de array

- map: cria um array novo mudando cada item. Usei para deixar os nomes em maiúsculo.
- filter: cria um array novo só com os itens que passam na condição. Usei para pegar os preços acima de 20.
- reduce: junta tudo em um valor só. Usei para somar os preços.

## DOM

Uso o querySelector para pegar os elementos da página e mudo o texto com textContent. Para colocar itens novos na lista, crio o li com createElement e adiciono com append. As classes são colocadas com classList.

## Event Delegation

Em vez de colocar um evento de clique em cada li, coloquei um só na lista e confiro com e.target se o clique foi em um li.

Isso é melhor porque usa só um listener em vez de vários, e também funciona nos itens que são criados depois pelo JavaScript.
