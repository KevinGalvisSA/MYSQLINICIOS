import { character } from "./personaje.js";
import { warrior } from "./warriors.js";
import { mage } from "./mages.js";
import { healer } from "./healers.js";

let personajeDefault = new character();
let personaGuerrero1 = new warrior("Joel");
let personaMago1 = new mage("Camilo");
let personaSacerdote1 = new healer("David");

console.log(personajeDefault.toString());
console.log(personaGuerrero1.toString());
console.log(personaMago1.toString());
console.log(personaSacerdote1.toString());

// Realizar ataque
personaGuerrero1.atacar(personaMago1);

console.log(`Vida del mago después del ataque: ${personaMago1.getVida}`);
