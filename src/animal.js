class Animal {
    constructor (nome, especie, brinquedos){
        this.nome = nome;
        this.especie = especie;
        this.brinquedos = []; //array 

        //Passa todos os brinquedos para array
        for (let i = 0; i < brinquedos.length; i++) {
            this.brinquedos.push(brinquedos[i].trim().toUpperCase());
        }
    }
}
export { Animal };