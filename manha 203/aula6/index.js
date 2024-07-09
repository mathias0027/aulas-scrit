var montro = /** @class */ (function () {
    function montro(monNome) {
        this.nome = monNome;
        this.forca = 5;
        this.vida = 50;
        this.raca = 'monstro';
    }
    montro.prototype.atacar = function () {
        console.log('montro ataca guerreiro');
    };
    return montro;
}());
var guerreiro = /** @class */ (function () {
    function guerreiro(guerreiro) {
        this.nome = guerreiro;
        this.forca = 5;
        this.vida = 50;
        this.raca = 'guerreiro';
    }
    return guerreiro;
}());
montro.atacar();
