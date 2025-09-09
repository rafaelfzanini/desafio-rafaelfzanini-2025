class Pessoa{
    constructor(numeroDeAnimais, brinquedos){
        this.numeroDeAnimais = numeroDeAnimais;
        this.brinquedos = []; 

        //Adicionando brinquedos ao array
         for (let i = 0; i < brinquedos.length; i++){
            this.brinquedos.push(brinquedos[i].trim().toUpperCase());
        }
    }

    
    
    
    
    //Método que verifica se os brinquedos do animal estão na lista da pessoa
    temBrinquedos (brinquedosAnimal) {
        let indicePessoa = -1;

        //Percorre cada brinquedo
        for (let i = 0; i < brinquedosAnimal.length; i ++){
            let encontrado = false;
                
            //Verifica brinquedo a partir da posição
            for (let j = indicePessoa + 1; j < this.brinquedos.length; j++) {
                if (this.brinquedos[j] === brinquedosAnimal[i]){
                    indicePessoa = j;
                    encontrado = true;
                    break;
                } 
            }
            if (!encontrado){
                return false;
            }        
        }
        return true;
    }
}
export { Pessoa };