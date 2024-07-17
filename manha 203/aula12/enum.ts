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

enum Direcao {
    norte = 1,
    sul,
    leste,
    oeste,
}

for( let verDirecao in Direcao){
    console.log (verDirecao)

}