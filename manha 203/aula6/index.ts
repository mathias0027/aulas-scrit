class montro {
    nome: string 
    vida : number 
    forca : number
    raca : string 

    constructor ( monNome : string, ){
this.nome = monNome
 this.forca = 5
  this.vida = 50
  this.raca = 'monstro'

 }


 atacar (): void {
console.log('montro ataca guerreiro')


 }


}

 class guerreiro {
    nome: string 
    vida : number 
    forca : number
    raca : string 

    constructor ( guerreiro : string, ){
this.nome = guerreiro
 this.forca = 5
  this.vida = 50
  this.raca = 'guerreiro'

    }
 }


 montro.atacar()