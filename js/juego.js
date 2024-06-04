import { orco } from './orco.js';
import { goblin } from './goblin.js';
import { esqueleto } from './esqueleto.js';
import { Item } from './item.js';
import { Heroe } from './heroe.js';
import { Inventario } from './inventario.js';

export class Juego {
    constructor() {
        this.historial = [];
        this.monstruo = null;
    }

    loguear(mensaje) {
        this.historial.push(mensaje);
        console.log(mensaje);
    }

    investigar(heroe) {
        if (this.monstruo && this.monstruo.vida > 0) {
            this.loguear("No puedes investigar, hay un monstruo presente.");
            return;
        }

        const probabilidad = Math.random();
        if (probabilidad < 0.5) {
            const monstruos = [orco, goblin, esqueleto];
            const indiceAleatorio = Math.floor(Math.random() * monstruos.length);
            this.monstruo = new monstruos[indiceAleatorio]();
            this.loguear(`¡Un ${this.monstruo.nombre} ha aparecido!`);
        } else {
            const puntuacion = Math.floor(Math.random() * 20) + 10; // Puntuación de la poción
            const poción = new Item("Poción de Vida", puntuacion);
            heroe.inventario.push(poción); // Corrección aquí
            this.loguear(`¡Has encontrado una Poción de Vida! Añadida al inventario.`);
        }
    }

    atacar(heroe) {
        if (!this.monstruo || this.monstruo.vida <= 0) {
            this.loguear("No hay monstruo para atacar.");
            return;
        }

        heroe.atacar(this.monstruo);
        this.loguear(`${heroe.nombre} ataca a ${this.monstruo.nombre}! Le saca ${heroe.ataque} de vida.`);

        if (this.monstruo.vida > 0) {
            this.monstruo.atacar(heroe);
            this.loguear(`${this.monstruo.nombre} ataca a ${heroe.nombre}! Le saca ${this.monstruo.ataque} de vida.`);
        } else {
            this.loguear(`${this.monstruo.nombre} ha sido derrotado!`);
        }
    }
}
