export class Item {
    constructor(nombre, vidaASumar) {
        this.nombre = nombre;
        this.vidaASumar = vidaASumar;
    }

    utilizar(objetivo) {
        objetivo.vida += this.vidaASumar;
        if (objetivo.vida > objetivo.vidaMaxima) {
            objetivo.vida = objetivo.vidaMaxima;
        }
        console.log(`${objetivo.nombre} ha utilizado ${this.nombre} y ha recuperado ${this.vidaASumar} de vida.`);
    }
}