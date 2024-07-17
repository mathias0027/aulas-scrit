import { Produtos } from "./Produtos";


export class Combustivel implements Produtos {
    tipo: string;
    nome: string;
    preco: number;
   
   constructor(tipo : string,  nome :string, preco : number ){
    this.nome = 'gasolina'
    this.preco = 6.00
    this.tipo = 'combustivel'
   }
   
    mostrarPreco(): void {
      
    }

}