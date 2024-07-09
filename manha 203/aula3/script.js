/*
Número Positivo ou Negativo: Solicite um número do usuário e, em seguida, determine se o número é positivo, negativo ou igual a zero. Exiba a mensagem correspondente.


Login Simples: Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta".


Calculadora Básica: Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /). Use if e else para executar a operação escolhida e exibir o resultado.


Maior de Três Números: Peça ao usuário para inserir três números e use if e else para determinar qual é o maior dos três. Em seguida, exiba o número maior.
*/

/*
//atividade 1

const readlineSync = require('readline-sync')

function positivouliegative(number)

const num1 = Number(readlineSync.question('qual seu primeiro numero?'))
//const num2 = Number(readlineSync.question('qual seu segundo numero?'))

if(num1 === 0){
    console.log('igaul a 0')

}    

else if (num1 < 0){
    console.log(num1 ,'menor que zero')
}

 else if (num1 > 0){
    console.log("maior que 0")

}
*/
 
//atividade 2
/*
 const readlineSync = require('readline-sync')
 
 const  senha1= 1234
  
 const senha = Number(readlineSync.question('qual sua senha?'))

if (senha1 === senha){
    console.log('senha correta, seja bem vindo!')

}      else if (senha1 !== senha ) {
    console.log ('Que pena, voce errou!')
}
*/
const readlineSync = require('readline-sync')
const opcao = readlineSync.question('qual a funcao a ser chamada?')




const n1 = readlineSync.question('numero')

if (n1 === n1 ){
   const n2 = 1
    console.log(n2 + 1 )


}

//if(v1 > v2 && v1 > v3){


 /*   
    console.log(v1,'é o maoir numero ')
} else if (v2 > v1 && v2 > v3){
     console.log(v2,'é omaior valor')
} else if (v3 > v2 && v3 > v1){
    console.log(v3," é o maior valor")
}

function numero1(){


const v1 = readlineSync.question('primeiro valor:') 
const v2 = readlineSync.question('segundo valor :')
const v3 = readlineSync.question(" terceiro valor :")

const num1 = readlineSync.question('qual o numero para verificar?')

if(num1 === 0){
    console.log('igaul a 0')

}    

else if (num1 < 0){
    console.log(num1 ,'menor que zero')
}

 else if (num1 > 0){
    console.log("maior que 0")


}
}


switch(opcao){
    case 1: 
    numero1()
    break

}
*/
