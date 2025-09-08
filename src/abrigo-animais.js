import { Pessoa } from "./pessoa";

class AbrigoAnimais {
  
  //método inicial
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    
    //Transforma variável String (let) em array 
    let listaPessoa1 = brinquedosPessoa1.split(',');
    let listaPessoa2 = brinquedosPessoa2.split(',');
    let listaAnimais = ordemAnimais.split(',');

    //Retira espaços e faz a String ficar em maiúscula
    for (let i = 0; i < listaPessoa1.length; i++){
      listaPessoa1[i] = listaPessoa1[i].trim().toUpperCase();
    }

    for (let i = 0; i < listaPessoa2.length; i++){
      listaPessoa2[i] = listaPessoa2[i].trim().toUpperCase();
    }

    //Retira espaços (nomes não estão em Caps Lock)
     for (let i = 0; i < listaAnimais.length; i++){
      listaAnimais[i] = listaAnimais[i].trim();
    }





    //Verificar duplicados
    for (let i = 0; i < listaAnimais.length; i++){
      for (let j = i + 1; j < listaAnimais.length; j++){
        if (listaAnimais[i] == listaAnimais[j]){
          return {erro: 'Animal Inválido'}
        }
      }
    }

    for (let i = 0; i < listaPessoa1.length; i++){
      for (let j = i + 1; j < listaPessoa1.length; j++) {
        if (listaPessoa1[i] == listaPessoa1[j]) {
          return {erro: 'Brinquedo Inválido'};
        }
      }
    }

    for (let i = 0; i < listaPessoa2.length; i++){
      for (let j = i + 1; j < listaPessoa2.length; j++) {
        if (listaPessoa2[i] == listaPessoa2[j]) {
          return {erro: 'Brinquedo Inválido'};
        }
      }
    } 





    //instanciando objetos
    let pessoa1 = new Pessoa(0, listaPessoa1);
    let pessoa2 = new Pessoa(0, listaPessoa2);

    let animais = [
      new Animal('Rex', 'cão', ['RATO', 'BOLA']),
      new Animal('Mimi', 'gato', ['BOLA', 'LASER']),
      new Animal('Fofo', 'gato', ['BOLA', 'RATO', 'LASER']),
      new Animal('Zero', 'gato', ['RATO', 'BOLA']),
      new Animal('Bola', 'cão', ['CAIXA', 'NOVELO']),
      new Animal('Bebe', 'cão', ['LASER', 'RATO', 'BOLA']),
      new Animal('Loco', 'jabuti', ['SKATE', 'RATO'])
    ]

    //resultado
    let listaSaida = [];

    //colocando todos no abrigo
     for (let i = 0; i < listaAnimais.length; i++){
      let animalNome = listaAnimais[i];
      let dono = 'abrigo';


    
      //encontra animal pelo nome 
      let objetoAnimal = null;  //variável que guarda objeto animal
      for (let j = 0; j < animais.length; j++){
        if (animais[j].nome == animalNome){
        objetoAnimal = animais[j];
        break;
        }
      } 
    }  
    
    if (!objetoAnimal){
      return {erro: 'Animal Inválido'};
    }  


    //verifica quem pode levar animal
    
    //ordem alfabetica
    listaAnimais.sort();
  
    //saida de dados
    return {lista: listaSaida};
  }
}

export {AbrigoAnimais as AbrigoAnimais};
