class Pessoa{
    constructor(numeroDeAnimais, brinquedos){
        this.numeroDeAnimais = numeroDeAnimais;
        this.brinquedos = []; 

        //mesma coisa com da classe animal 
         for (let i = 0; i < brinquedos.length; i++){
            this.brinquedos.push(brinquedos[i].trim().toUpperCase());
        }
    }

    //método que verifica se os brinquedos batem 
    temBrinquedos (brinquedosAnimal) {
        let contador = 0;

        for (let i = 0; i < brinquedosAnimal.length; i ++){
            let encontrado = false;
                
            for (let j = 0; contador < this.brinquedos.length; contador ++){
                if (this.brinquedos[contador] == brinquedosAnimal[i]){
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
export {Pessoa}