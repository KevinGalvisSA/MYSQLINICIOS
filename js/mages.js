import { character } from "./personaje.js";

export class mage extends character {
    #capa = false;
    #botas = true;
    #sombrero = true;

    constructor(nom) {
        super();
        this.setNombre = nom;
        this.setVida = 10; // Ajustamos la vida inicial
        this.vestimentaMagica();
    }

    vestimentaMagica() {
        if (this.#capa) this.setDefensa = 40;
        if (this.#botas) this.setDefensa = 10;
        if (this.#sombrero) this.setDefensa = 25;
    }

    toString() {
        return `Mage ${super.toString()}`;
    }
}
