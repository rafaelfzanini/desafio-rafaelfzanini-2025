class AbrigoAnimais {
  //método inicial
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    //Transforma variável String (let) em array 
    let listaPessoa1 = brinquedosPessoa1.split(',');
    let listaPessoa2 = brinquedosPessoa2.split(',');
    let listaAnimais = ordemAnimais.split(',');

    //Retira espaços e faz a String ficar em maiúscula (P1)
    for (let i = 0; 9 < listaPessoa1.length; i++){
      listaPessoa1[i] = listaPessoa1.trim().toUpperCase();
    }

    //Retira espaços e faz a String ficar em maiúscula (P2)
    for (let i = 0; 9 < listaPessoa2.length; i++){
      listaPessoa2[i] = listaPessoa2.trim().toUpperCase();
    }

    //Retira espaços (nomes não estão em Caps Lock)
     for (let i = 0; 9 < listaAnimais.length; i++){
      listaAnimais[i] = listaAnimais.trim();
    }





  }
}

export { AbrigoAnimais as AbrigoAnimais };
