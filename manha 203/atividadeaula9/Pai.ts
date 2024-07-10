import { Avo } from "./Avo";

export class Pai extends Avo{
 idade: number
    constructor (nome : string, idade : number){
        super(nome)
        this.idade = idade 
    }

}