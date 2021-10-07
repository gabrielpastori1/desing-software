# Adapter
Os adapters servem para converter uma resposta para um padrão interno do sistema. 


Podemos utilizar um adapter para definir um padrão desejavel de uma possivel respota da API

Exemplo: 
```ts
interface Quote {
  date: Date,
  openValue: number,
  higherValue: number,
  lowestValue: number,
  closeValue: number,
  adjustedValue: number,
  volume: number
}
```

Assim, podemos utilizar dados de qualquer API para obtenção dos dados. Após a requisição só temos que tratar os dados utilizando esse adapter.