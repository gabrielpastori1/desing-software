# State Machine
As state machines são utilizadas para controlar estados e transações de estados.

Criamos a classe Context, ela controla o estado atual. No construtor passamos o `state` inicial.

Dentro de cada state definimos `handle1` e `handle2` que são 2 operações possiveis de alteração de status.

Quando chamamos o `context` no metodo `request1()` o metodo `handle1` do estado atual é chamado fazendo a alteração do status