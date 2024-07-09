
/*1mport * as readlineSync from 'readline-sync'


let nome: String = 'jogador'

let array : number[]= [0 , 1 ,2]
let res: string 
if(){

}


moeda = passos + 2
 3=2 portas */

    //craiaçao objetos  :
/*
class Dog {
    nome: string 
    peso: number
    pelo: string
    raca: string


    constructor (dogNome:string, dogPeso:number, dogPelo:string){ 
            this.nome = dogNome
            this.pelo = dogPelo
            this.peso = dogPeso
            this.raca = 'sem raca'
        
    
        }



    latir():void{
        console.log('dog faz barulho')

    }
    correr():void{
        console.log('dog joga')

    }
    comer():void{
        console.log('dog dorme ')
    }
}





const meucachorro:Dog = new Dog('vivi',12,'preto')
const meudog:Dog = new Dog('mion', 12, 'sem')

console.log(dog)*/
class Coruja {
    nome: string
    tamanho: string
    idade: number


 constructor (nomeC2: string, tamanhoC2: string, idadeC2:number ){
    this.nome = nomeC2
    this.tamanho = tamanhoC2
    this.idade = idadeC2
 }

 barulho():void{
 console.log('coruja esta piando')
 }

 caminhar():void{
    console.log('a coruja esta caminhando')
 }
 voar():void{
    console.log('coruja esta voando')
 }

}

Coruja.barulho()
Coruja.caminhar()
Coruja.voar()