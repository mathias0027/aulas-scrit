/*enum DiasDaSemana {
    domingo = 'melhor dia',
    segunda = 'puts, tem tema pra hj',
    terca = 'fica +-',
    quarta = 'ta ficando massa',
    quinta = 'deixa o tema pra amanha',
    sexta = 'semana q vem eu faco',
    sabado = 'vo n ',
    
}
console.log(DiasDaSemana.terca);//saida : 0

for (let ver in DiasDaSemana ){
    console.log(ver)
}
*/
var Direcao;
(function (Direcao) {
    Direcao[Direcao["norte"] = 1] = "norte";
    Direcao[Direcao["sul"] = 2] = "sul";
    Direcao[Direcao["leste"] = 3] = "leste";
    Direcao[Direcao["oeste"] = 4] = "oeste";
})(Direcao || (Direcao = {}));
for (var verDirecao in Direcao) {
    console.log(verDirecao);
}
