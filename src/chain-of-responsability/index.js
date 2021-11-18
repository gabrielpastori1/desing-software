var Saque = function (amount) {
    this.amount = amount;
    console.log("Valor de saque requisitado: $" + amount + "\n");
}

Saque.prototype = {
    get: function (bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        console.log(count + " notas de R$" + bill);
        return this;
    }
}
function run() {
    var saque = new Saque(378);

    console.log("Resto: " + saque.get(100).get(50).get(20).get(10).get(5).amount);
}