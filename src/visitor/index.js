var Card = function (damage, health, value) {
    var self = this;
    this.damage = damage;
    this.health = health;
    this.value = value;

    this.accept = function (visitor) {
        visitor.visit(self);
    };

    this.getHealth = function () {
        return health;
    };

    this.setHealth = function (heal) {
        health = heal;
    };

    this.getDamage = function () {
        return damage;
    };

    this.setDamage = function (dan) {
        damage = dan;
    };
};

var addHealth = function (value) {
    this.visit = function (card) {
        card.setHealth(card.getHealth() + value);
    };
};

var addDamege = function (value) {
    this.visit = function (card) {
        card.setDamage(card.getDamage() + value);
    };
};

function run() {

    var cards = [
        new Card(2, 4, 3),
        new Card(5, 1, 3),
        new Card(3, 5, 4)
    ];

    var visitorAddDamenge = new addDamege(-1);
    var visitorAddHealth = new addHealth(1);

    cards.forEach(card => {
        card.accept(visitorAddDamenge);
        card.accept(visitorAddHealth);
        console.log(card);
    });

}