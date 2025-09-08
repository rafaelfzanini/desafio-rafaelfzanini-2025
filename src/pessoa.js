class Pessoa{
    constructor(numeroDeAnimais, brinquedos){
        this.numeroDeAnimais = numeroDeAnimais;
        this.brinquedos = []; 

        //mesma coisa com da classe animal 
         for (let i = 0; i < brinquedos.length; i++){
            this.brinquedos.push(brinquedos[i].trim().toUpperCase());
        }
    }
}