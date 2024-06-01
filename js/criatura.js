export class criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
        if (new.target === criatura) {
            throw new TypeError("No se puede instanciar una clase abstracta.");
        }
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.ataque = ataque;
    }

    atacar() {
        throw new Error("Debe implementar el método atacar.");
    }

    recibirDaño(daño) {
        throw new Error("Debe implementar el método recibirDaño.");
    }

    toString() {
        return `${this.nombre}: Vida ${this.vida}/${this.vidaMaxima}, Ataque ${this.ataque}`;
    }
}
