import { criatura } from './criatura.js';

export class monstruo extends criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
        if (new.target === monstruo) {
            throw new TypeError("No se puede instanciar una clase abstracta.");
        }
        super(nombre, vida, vidaMaxima, ataque);
    }

    atacar(heroe) {
        heroe.recibirDaño(this.ataque);
    }

    recibirDaño(daño) {
        this.vida -= daño;
        if (this.vida < 0) {
            this.vida = 0;
        }
        console.log(`${this.nombre} ha recibido ${daño} de daño y ahora tiene ${this.vida} de vida`);
    }
}
