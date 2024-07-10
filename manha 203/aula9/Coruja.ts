import { Animal } from "./animal";


export class Coruja extends Animal{
    tipo : string
    constructor(nome:string, peso:number, tipo:string){
        super(nome, peso)
        this.tipo = tipo
    }
   
   
    chiando(){
console.log('a coruja esta chiando ')
    }
   

}



