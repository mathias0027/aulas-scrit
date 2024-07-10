export class Animal{
    nome:string
    peso:number

    constructor(nome:string, peso:number){
        this.nome = nome 
        this.peso = peso

    }

    comer(quantidade:number):void{
console.log("o animal esta comendo" + quantidade)
    }

}