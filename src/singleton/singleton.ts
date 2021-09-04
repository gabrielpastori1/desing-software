
/**
 * export - Faz com que a classe possa ser lida por outros arquivos
 */
 export class Singleton {
    /**
     * A variável instance é static, pois será a mesma para todo o sistema
     */
    private static instance: Singleton;

    /**
     * Aqui está os arguments da classe,
     * nesse caso temos name mas poderíamos
     * colocar quantas propriedades e metodos
     * forem necessarios.
     * 
     * "?": null safe - Informa que o name pode ser um valor nulo 
     */
    public name?: string;


    /**
     * Responsável por instanciar o singleton.
     * 
     * Ele é privado pois a única forma de 
     * instanciar essa classe deve ser por meio
     * do método getInstance()
     */
    private constructor() { 
        this.name = 'João'
    }


    /**
     * Única forma de acessar a instância da 
     * classe.
     * 
     * Ela é static pois deve ser executado sem
     * uma instância.
     * 
     * Ela irá verificar se a propriedade statac
     * instance existe, caso não exista, ela vai
     * criar uma instancia de Singleton e salvar
     * na variável.
     * 
     * Retorna a instância de Singleton
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

}
