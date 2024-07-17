
/*
let MeuObjeto : object = {
    nome1 : 'valor',
    nome2 : 'valor2',
    nome3 : 'valor3'
}

for(let elemento in MeuObjeto){
    console.log(`elemento ${elemento} tem o valor ${MeuObjeto[elemento]}`)
}



let listaLivros = ['senhor dos aneis','o hubbit ','contos inacabados']

listaLivros.foreacha(livro =>{
    console.log('eu ja li',(livro))
});

*/

let ListaLivros = ['livro1', 'livro2','livro3'];
ListaLivros.forEach(livro => {
    console.log('eu ja li',(livro))
});
console.log(ListaLivros,'ja foram todos lidos')