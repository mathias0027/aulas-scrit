import { Produtos } from "./Produtos";


export class Alimento implements Produtos {
    tipo: string;
    nome: string;
    preco: number;
   
   constructor(tipo : string,  nome :string, preco : number ){
    this.nome = 'salgadinho'
    this.preco = 15.00
    this.tipo = 'alimenticio'
   }
   
    mostrarPreco(): void {
      
    }

}