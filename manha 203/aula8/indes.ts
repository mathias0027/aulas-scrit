class Carro {
    private velocidade : number

    constructor(novavelocidade: number){
        this.velocidade = novavelocidade

    }


getvelocidade():number{
    return this.velocidade
}

setvelocidade(velocidade : number):void{
    if(this.velocidade < 0)
 this.velocidade = velocidade
}

else(){
console.log('vocxa nao pode ter velocidade negativa')

}



}

const carro = new Carro(-100)
console.log(carro.getvelocidade())
carro.setvelocidade(150)
console.log(carro.getvelocidade())