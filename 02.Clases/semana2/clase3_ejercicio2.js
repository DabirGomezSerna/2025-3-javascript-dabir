const { ask } = require("../helpers/input.js");

async function main() {
  const frutas = [
    "Manzanas",
    "Naranjas",
    "Mangos",
    "Platanos",
    "Kiwis",
    "Mandarinas",
    "Uvas",
  ];

  const cajon = Number(await ask("¿Que cajon quieres abrir? (1-7): "));

  for (let i = 1; i <= frutas.length; i++) {
    if (i === cajon) {
      console.log("En el cajón " + i + " hay " + frutas[i - 1]);
    }
  }
}

main();
