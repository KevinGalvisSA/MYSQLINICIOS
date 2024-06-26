import { Heroe } from './heroe.js';
import { Juego } from './juego.js';
import { Item } from './item.js';

// Inicio de juego y héroe
const juego = new Juego();
const heroe = new Heroe("Pepito Ramirez", 100, 100, 20);

// Ejecutar acciones del juego
juego.investigar(heroe); // Investigar (puede generar un monstruo o una poción)
juego.investigar(heroe); 
juego.investigar(heroe); 

juego.defenderse(heroe); //

// Atacar al monstruo si está presente
juego.atacar(heroe);
// Atacar al monstruo si está presente
juego.atacar(heroe);
// Atacar al monstruo si está presente
juego.atacar(heroe);

// Agregar una poción al inventario del héroe
const poción = new Item("Poción de Vida", 5);
heroe.inventario.push(poción);

// Mostrar el estado del héroe después del ataque
console.log(heroe.toString());

// Utilizar la poción
heroe.utilizarItem(poción);

// Mostrar el estado del héroe después de usar la poción
console.log(heroe.toString());
