export class combate {
    constructor(heroe, monstruo) {
        this.heroe = heroe;
        this.monstruo = monstruo;
    }

    ejecutar() {
        this.heroe.atacar(this.monstruo);
        console.log(`${this.heroe.nombre} ataca a ${this.monstruo.nombre} y le causa ${this.heroe.ataque} de daño.`);

        if (this.monstruo.vida > 0) {
            this.monstruo.atacar(this.heroe);
            console.log(`${this.monstruo.nombre} ataca a ${this.heroe.nombre} y le causa ${this.monstruo.ataque} de daño.`);
        } else {
            console.log(`${this.monstruo.nombre} ha sido derrotado.`);
        }
    }
}
