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
        let indicePessoa = -1;

        for (let i = 0; i < brinquedosAnimal.length; i ++){
            let encontrado = false;
                
           for (let j = indicePessoa + 1; j < this.brinquedos.length; j++) {
                if (this.brinquedos[j] === brinquedosAnimal[i]) {
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