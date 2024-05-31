import { character } from "./personaje.js"; 

export class healer extends character{
    #bata = true;
    #gorro = true;
    constructor(nom){
        super(); //"super" va a ir a traer el constructor de "personaje"(character)
        this.setNombre = nom;
        this.setVida = 5;
        this.vestimentaHealer();
    }
    vestimentaHealer(){
        if(this.#bata) this.setDefensa = 15
        if(this.#gorro) this.setDefensa = 5
    }
}