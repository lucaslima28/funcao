// for(Crio o contador; condicao; interador){
//     codigo
// }

// ENQUANTO (condição){
//     imprimir()
// }

// FOR IN :PERCORRE OS INDICES
// FOR OF :Percorre o conteudo


// let filmes = ['Harry Potter', 'Titanic', 'Laranja Mecanica', 'Wall-e','Bastardos Inglorios'];
// // FOROFA FOR OF
// for(let item of filmes ){
//     console.log(item);
// }
// FARINHA FOR IN
// for(let indice in filmes){
//     console.log(filmes[indice]);
// }

// let indice;

// for(indice=0; indice<=filmes.length-1; indice++){
//     console.log(filmes[indice]);
// }   

// function nomeDaFuncao(argumentos){
//  return qualquer coisa que envolva os argumentos;
// }

// function calcMedia(atividade, p1, p2){
//     return ((atividade + p1 + p2)/3).toFixed(1);
// }


// calcMedia = (atividade, p1, p2)=>{
//     return ((atividade + p1 + p2)/3).toFixed(1);
// }



let filmes = [
   /* 0 */ {titulo:"Staw Wars", classificacao: 14},
   /* 1 */ {titulo:"Up", classificacao: 0},
   /* 2 */ {titulo:"Ninja Assassino", classificacao: 18}
]
/* QUAL É A SUA IDADE
    condicao se a idade for menor ou igual classifacao, mostrar o filme  
    mostrar qual filme disponivel
  
    FOR IN
    let e prompt
    if else
    */

    let idade = prompt("Qual a sua idade ?")
    for (indice in filmes){
        if (filmes[indice].classificacao <= idade){
            alert("Voce pode ver: " + filmes[indice].titulo)
        }
    }