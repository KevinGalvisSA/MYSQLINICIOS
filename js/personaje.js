export class character {
    #vida = 20;
    #defensa = 5;
    #daño = 10;
    
    constructor() {
        this.setNombre = undefined;
    }

    set setNombre(nom = "Jhon") {
        this.nombre = nom;
    }

    set setVida(puntos) {
        this.#vida += puntos;
    }

    get getVida() {
        return this.#vida;
    }

    set setDefensa(puntos) {
        this.#defensa += puntos;
    }

    get getDefensa() {
        return this.#defensa;
    }

    set setDaño(puntos) {
        this.#daño += puntos;
    }

    get getDaño() {
        return this.#daño;
    }

    recibirDaño(cantidad) {
        const dañoNeto = cantidad
        this.#vida -= dañoNeto
    }

    toString() {
        return `Nombre: ${this.nombre}, Vida: ${this.#vida}, Defensa: ${this.#defensa}, Daño: ${this.#daño}`;
    }
}
