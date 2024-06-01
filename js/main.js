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


console.log("")

console.log("EL warrior Joel ataca al mago Camilo")

personaGuerrero1.atacar(personaMago1);

console.log("")

console.log("Camilo ha recibido 30 puntos de daño")

console.log("")

console.log(personaMago1.toString());
