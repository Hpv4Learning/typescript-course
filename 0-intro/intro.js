"use strict";
console.log("benvenuto nel mondo di TypeScript");
const corso = {
    titolo: "TypeScript",
    durata: 24,
};
corso.lezioni;
// Esempio di type sefety
let saluto = "ciao";
// saluto = 1 // errore
console.log(saluto.toLowerCase()); // VSCode suggerisce il metodo
