//juego.js

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

//combate.js

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

//monstruo.js

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

export class goblin extends monstruo {
    constructor() {
        super("Goblin", 50, 50, 10);
    }
}

export class esqueleto extends monstruo {
    constructor() {
        super("esqueleto", 30, 30, 5);
    }
}

export class orco extends monstruo {
    constructor() {
        super("Orco", 80, 80, 15);
    }
}

//inventario.js

export class Inventario {
    constructor() {
        this.items = [];
    }

    agregarItem(item) {
        this.items.push(item);
    }

    utilizarItem(nombreItem, objetivo) {
        const item = this.items.find(item => item.nombre === nombreItem);
        if (item) {
            item.utilizar(objetivo);
            this.removerItem(item);
        }
    }

    removerItem(item) {
        const numeroItem = this.items.indexOf(item);
        if (numeroItem > -1) {
            this.items.splice(numeroItem, 1);
        }
    }

    listarItems() {
        return this.items.map(item => item.nombre).join(', ');
    }
}

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

//heroe.js

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

//criatura.js

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