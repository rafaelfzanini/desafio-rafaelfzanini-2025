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

    //ordem alfabetica
    listaAnimais.sort();

    //saida de dados
    let listaSaida = [];
    for (let i = 0; i < listaAnimais.length; i++){
      listaSaida[i] = listaAnimais[i] + " - abrigo";
    }
    return {lista: listaSaida};


  }
}

export {AbrigoAnimais as AbrigoAnimais};
