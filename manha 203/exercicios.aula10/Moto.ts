import { Produtos } from "./Produtos";


export class Moto implements Produtos {
    tipo: string;
    nome: string;
    preco: number;
   
   constructor(tipo : string,  nome :string, preco : number ){
    this.nome = 'Moto eletrica'
    this.preco = 7000.00
    this.tipo = 'veiculo'                                                                                                  
   
}
   
    mostrarPreco(): void {
      
    }

}



