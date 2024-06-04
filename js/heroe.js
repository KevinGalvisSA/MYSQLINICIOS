import { criatura } from './criatura.js';

export class Heroe extends criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
        super(nombre, vida, vidaMaxima, ataque);
        this.inventario = [];
        this.descansada = true;
    }

    atacar(monstruo) {
        monstruo.recibirDaño(this.ataque);
    }

    recibirDaño(daño) {
        this.vida -= daño;
        this.descansada = false;
        if (this.vida < 0) {
            this.vida = 0;
        }
        console.log(`${this.nombre} ha recibido ${daño} de daño y ahora tiene ${this.vida} de vida`);
    }

    utilizarItem(item) {
        item.utilizar(this);
        const usoItem = this.inventario.indexOf(item);
        if (usoItem > -1) {
            this.inventario.splice(usoItem, 1);
        }
    }
}