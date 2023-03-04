"use strict";
console.log("benvenuto nel mondo di TypeScript");
const corso = {
    titolo: "TypeScript",
    durata: 24,
};
// corso.lezioni
// Esempio di type sefety
let saluto = "ciao";
// saluto = 1 // errore
console.log(saluto.toLowerCase()); // VSCode suggerisce il metodo
// Number
const number = 1;
// Boolean
const isBoolean = true;
// Type inference
let numero = 1;
// numero = "ciao" // errore
let isBooleano = true;
// Non usare mai any
let hero;
function getHero() {
    return "Batman"; // or true
}
hero = getHero();
