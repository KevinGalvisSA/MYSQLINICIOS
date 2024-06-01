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
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    listarItems() {
        return this.items.map(item => item.nombre).join(', ');
    }
}