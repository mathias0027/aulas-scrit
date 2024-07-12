import { Produtos } from "./Produtos";

    export class Livro implements Produtos{
        tipo: string;
        nome: string;
        preco: number;
       
       constructor(tipo: string, nome: string, preco : number){
        this.nome = 'a inquisição'
        this.preco = 35.00
        this.tipo = 'ficção'
        


       }
        mostrarPreco(): void {

        }
         

    }