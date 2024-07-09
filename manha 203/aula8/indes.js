var Carro = /** @class */ (function () {
    function Carro(novavelocidade) {
        this.velocidade = novavelocidade;
    }
    Carro.prototype.getvelocidade = function () {
        return this.velocidade;
    };
    Carro.prototype.setvelocidade = function (velocidade) {
        if (this.velocidade < 0)
            this.velocidade = velocidade;
    };
    Carro.prototype.else = function () {
        console.log('vocxa nao pode ter velocidade negativa');
    };
    return Carro;
}());
var carro = new Carro(-100);
console.log(carro.getvelocidade());
carro.setvelocidade(150);
console.log(carro.getvelocidade());
