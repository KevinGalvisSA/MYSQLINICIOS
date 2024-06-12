import { criatura } from './criatura.js';

export class Heroe extends criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
        super(nombre, vida, vidaMaxima, ataque);
        this.inventario = [];
        this.descansada = true;
        this.defensaActiva = false;  // Nueva propiedad para la defensa
    }

    atacar(monstruo) {
        monstruo.recibirDaño(this.ataque);
    }

    recibirDaño(daño) {
        if (this.defensaActiva) {
            daño = Math.max(0, daño - this.calcularReduccionDeDaño(daño)); // Aplica la reducción de daño
            this.defensaActiva = false;  // La defensa solo dura un turno
        }
        this.vida -= daño;
        this.descansada = false;
        if (this.vida < 0) {
            this.vida = 0;
        }
        console.log(`${this.nombre} ha recibido ${daño} de daño y ahora tiene ${this.vida} de vida`);
    }

    defenderse() {
        this.defensaActiva = true;
        console.log(`${this.nombre} se está defendiendo y reducirá el daño recibido en el próximo ataque`);
    }

    calcularReduccionDeDaño(daño) {
        const porcentajeReduccion = 0.5;  // Reducimos el daño en un 50%
        return daño * porcentajeReduccion;
    }

    utilizarItem(item) {
        item.utilizar(this);
        const usoItem = this.inventario.indexOf(item);
        if (usoItem > -1) {
            this.inventario.splice(usoItem, 1);
        }
    }
}
