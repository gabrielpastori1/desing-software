# Factory

As factorys são um design pattern que utiliza de funções para distribuir código de forma padronizada.

Exemplo de factory:
```js

cost API = function(){

    function fetch(url){
        ...
    }

    function getUser(id){
        this.fetch(`/user/${id}`)
    }

    function getAllUser(){
        this.fetch(`/user`)
    }

    return {
        getUser,
        getAllUsers
    }
} 

```

Assim toda vez que executarmos a funcão API teremos como retorno um objeto contendo as funções referentes a API.