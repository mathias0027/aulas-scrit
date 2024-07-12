import { Produtos } from "./Produtos";


export class Eletronico implements Produtos {
   
   
    tipo: string;
    nome: string;
    preco: number;
   
    constructor(tipo:string, nome : string ,   preco : number,){
        this.nome = 'celular'
        this.preco = 560.00
        this.tipo = 'eletronco'

    }
    
    mostrarPreco(): void {
       

    }

    


}