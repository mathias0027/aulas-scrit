export enum Pizzas{
    sabor1 = 'peperoni',
    sabor2 = 'quatroqueijos',
    sabor3 = 'brocolis',
    sabor = 'chocolate',
}

export class Pizza {
    sabor: string
    tamaho : string
    preco : number

    constructor(sabor : string, tamanho : string, preco : number ){
        this.preco = 25
        this.sabor = sabor
        this.tamaho = tamanho
    }


    descrition(){
    console.log()
}
}
Pizza
