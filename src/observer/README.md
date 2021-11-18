# Observer

O observer é utilizado para notificar uma alteração de estado

É dividio em 2 objetos
Subject: É o objeto/elemento que será observado. Ele irá notificar todos os subscribers inscritos nele
Observer: É uma função/objeto que irá receber a notificação do Subject

subscribe (function){
    Essa função irá adicionar uma função a uma lista de inscritos.
} 

notify (data){
Essa função é responsável por notificar todos os obserers inscritos.
}