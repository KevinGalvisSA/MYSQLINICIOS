import { character } from "./personaje.js";

export class warrior extends character {
    #pechera = true;
    #casco = false;
    #grebas = true;
    #botas = true;
    #espada = true;

    constructor(nom) {
        super();
        this.setNombre = nom;
        this.setVida = 5; // Ajustamos la vida inicial
        this.armadura();
        this.dañoWarrior();
    }

    armadura() {
        if (this.#pechera) this.setDefensa = 80;
        if (this.#casco) this.setDefensa = 40;
        if (this.#grebas) this.setDefensa = 60;
        if (this.#botas) this.setDefensa = 20;
    }

    dañoWarrior() {
        if (this.#espada) this.setDaño = 20;
    }

    atacar(objetivo) {
        if (objetivo instanceof character) {
            objetivo.recibirDaño(this.getDaño);
        } else {
            throw new Error("El objetivo debe ser una instancia de character");
        }
    }

    toString() {
        return `Warrior ${super.toString()}`;
    }
}
