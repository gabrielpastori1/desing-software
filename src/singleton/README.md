# Singleton

O singleton garante que haverá apenas uma unica instancia do objeto. Para fazer isso ela instancia ela mesma como propriedade static.

O construtor é privado, pois a unica forma de acessar a instancia será a partir do metodo getInstance

```ts
public static getInstance(): Singleton {
    if (!Singleton.instance) {
        Singleton.instance = new Singleton();
    }

    return Singleton.instance;
}
```