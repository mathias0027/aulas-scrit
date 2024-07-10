import { Animal } from "./animal";


export class dog extends Animal{
        raca: string

    constructor(nome: string, peso: number, raca: string) {
        super(nome,peso); 
        this.raca = raca
    }
    
    bark():void{
        console.log('dog esta latindo')
    
    }

}
