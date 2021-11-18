# Visitor

O desing partten `visitor` permite criar funções visitantes que serão executadas no contexto do objeto visitado

Para isso precisamos que o objeto a ser visitado tenha a função `accept` que  ira rodar o visitante com seu contexto.

Nesse explo vamos usar o explo de um jogo de cartas, onde os visitante irão visitar as cartas e aumentar sua vida e diminuir seu dano.