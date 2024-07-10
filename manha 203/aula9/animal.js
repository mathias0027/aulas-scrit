"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    Animal.prototype.comer = function (quantidade) {
        console.log("o animal esta comendo" + quantidade);
    };
    return Animal;
}());
exports.Animal = Animal;
